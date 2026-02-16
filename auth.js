// ============================================================
//  auth.js — Supabase Auth + StudyTracker (Cloud Sync)
// ============================================================

// 1. Supabase Client
const supabaseUrl = 'https://gebdtfvxrkzxapetgxub.supabase.co';
const supabaseKey = 'sb_publishable_K9wqyUfcYfYUj5vuVp_QNA_5iShL55b';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// ---- AUTH FUNCTIONS ----

async function authSignup(email, password) {
    const { data, error } = await supabaseClient.auth.signUp({ email, password });
    if (error) throw error;
    return data;
}

async function authLogin(email, password) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
}

async function authLoginGoogle() {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
    });
    if (error) throw error;
    return data;
}

async function authLogout() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw error;
}

async function getUser() {
    const { data: { user } } = await supabaseClient.auth.getUser();
    return user;
}

function onAuthChange(callback) {
    supabaseClient.auth.onAuthStateChange((_event, session) => {
        callback(session ? session.user : null);
    });
}

// ---- STUDY TRACKER ----

class StudyTracker {
    constructor(userId) {
        this.userId = userId || 'guest';
        this.storageKey = `flashcard_user_${this.userId}`;
        // Initialize with empty default data
        this.data = { sessions: [], reviews: [] };
    }

    // NEW: Async load function to handle Cloud vs Local
    async load() {
        if (this.userId === 'guest') {
            // --- GUEST: Load from LocalStorage ---
            try {
                const raw = localStorage.getItem(this.storageKey);
                if (raw) this.data = JSON.parse(raw);
            } catch (e) { console.error("Local load error", e); }
        } else {
            // --- USER: Load from Supabase Cloud ---
            const { data, error } = await supabaseClient
                .from('geo_flashcard_app_user_progress')
                .select('study_data')
                .eq('user_id', this.userId)
                .single();

            if (data && data.study_data) {
                // Cloud data found, use it
                this.data = data.study_data;
                console.log("☁️ Loaded progress from cloud");
            } else {
                // No cloud data yet? Check if they have "guest" data to migrate
                const guestRaw = localStorage.getItem('flashcard_user_guest');
                if (guestRaw) {
                    console.log("⬆️ Migrating guest data to cloud...");
                    this.data = JSON.parse(guestRaw);
                    this._save(); // Save to cloud immediately
                }
            }
        }
        return this;
    }

    // UPDATED: Save to Cloud or Local
    async _save() {
        if (this.userId === 'guest') {
            // --- GUEST: Save to LocalStorage ---
            localStorage.setItem(this.storageKey, JSON.stringify(this.data));
        } else {
            // --- USER: Save to Supabase Cloud ---
            // "upsert" means: insert if new, update if exists
            const { error } = await supabaseClient
                .from('geo_flashcard_app_user_progress')
                .upsert({
                    user_id: this.userId,
                    study_data: this.data
                });

            if (error) console.error("Cloud Save Error:", error);
        }
    }

    /**
     * Log a completed study session.
     */
    logSession(topicId, topicName, knownCount, unknownCount, totalCount) {
        this.data.sessions.push({
            topicId,
            topicName,
            known: knownCount,
            unknown: unknownCount,
            total: totalCount,
            score: Math.round((knownCount / totalCount) * 100),
            date: new Date().toISOString()
        });
        this._save();
    }

    /**
     * Log a single card review (know / don't know).
     */
    logCardReview(topicId, term, isKnown) {
        this.data.reviews.push({
            topicId,
            term,
            known: isKnown,
            date: new Date().toISOString()
        });
        this._save();
    }

    // ---- AGGREGATION METHODS ----

    /** Total number of individual card reviews */
    get totalReviews() { return this.data.reviews.length; }

    /** Total number of completed sessions */
    get totalSessions() { return this.data.sessions.length; }

    /** Average score across all sessions */
    get averageScore() {
        if (this.data.sessions.length === 0) return 0;
        const sum = this.data.sessions.reduce((a, s) => a + s.score, 0);
        return Math.round(sum / this.data.sessions.length);
    }

    /** Best session score ever */
    get bestScore() {
        if (this.data.sessions.length === 0) return 0;
        return Math.max(...this.data.sessions.map(s => s.score));
    }

    /**
     * Number of cards reviewed per day (last N days).
     * Returns { labels: ['Mon 1', ...], values: [12, ...] }
     */
    getActivityByDay(days = 30) {
        const map = {};
        const now = new Date();
        for (let d = days - 1; d >= 0; d--) {
            const dt = new Date(now);
            dt.setDate(dt.getDate() - d);
            const key = dt.toISOString().slice(0, 10);
            map[key] = 0;
        }
        this.data.reviews.forEach(r => {
            const key = r.date.slice(0, 10);
            if (key in map) map[key]++;
        });
        const labels = Object.keys(map).map(k => {
            const d = new Date(k + 'T00:00:00');
            return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
        });
        return { labels, values: Object.values(map) };
    }

    /**
     * Activity heatmap: cards reviewed per day for the last 6 months.
     * Returns array of { date: 'YYYY-MM-DD', count: N }
     */
    getHeatmapData(months = 6) {
        const results = [];
        const now = new Date();
        const start = new Date(now);
        start.setMonth(start.getMonth() - months);
        const countMap = {};
        this.data.reviews.forEach(r => {
            const key = r.date.slice(0, 10);
            countMap[key] = (countMap[key] || 0) + 1;
        });
        for (let d = new Date(start); d <= now; d.setDate(d.getDate() + 1)) {
            const key = d.toISOString().slice(0, 10);
            results.push({ date: key, count: countMap[key] || 0 });
        }
        return results;
    }

    /**
     * Best score per topic.
     * Returns [{ topicName, bestScore, sessions }]
     */
    getTopicScores() {
        const map = {};
        this.data.sessions.forEach(s => {
            if (!map[s.topicName]) {
                map[s.topicName] = { topicName: s.topicName, bestScore: 0, sessions: 0 };
            }
            map[s.topicName].bestScore = Math.max(map[s.topicName].bestScore, s.score);
            map[s.topicName].sessions++;
        });
        return Object.values(map).sort((a, b) => b.bestScore - a.bestScore);
    }

    /**
     * Current study streak (consecutive days with reviews) and longest streak.
     */
    getStreakInfo() {
        const days = new Set(this.data.reviews.map(r => r.date.slice(0, 10)));
        if (days.size === 0) return { current: 0, longest: 0 };
        const sorted = [...days].sort();
        let current = 0, longest = 0, streak = 1;
        // Check if today or yesterday is in the set
        const today = new Date().toISOString().slice(0, 10);
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

        for (let i = 1; i < sorted.length; i++) {
            const prev = new Date(sorted[i - 1] + 'T00:00:00');
            const curr = new Date(sorted[i] + 'T00:00:00');
            const diff = (curr - prev) / 86400000;
            if (diff === 1) {
                streak++;
            } else {
                longest = Math.max(longest, streak);
                streak = 1;
            }
        }
        longest = Math.max(longest, streak);

        // Current streak: count backwards from today
        current = 0;
        let checkDate = days.has(today) ? today : (days.has(yesterday) ? yesterday : null);
        if (checkDate) {
            current = 1;
            let d = new Date(checkDate + 'T00:00:00');
            while (true) {
                d.setDate(d.getDate() - 1);
                const key = d.toISOString().slice(0, 10);
                if (days.has(key)) { current++; } else { break; }
            }
        }
        return { current, longest };
    }

    /**
     * Most reviewed terms. Returns [{ term, count, knownRate }]
     */
    getMostReviewedTerms(limit = 10) {
        const map = {};
        this.data.reviews.forEach(r => {
            if (!map[r.term]) map[r.term] = { term: r.term, count: 0, knownCount: 0 };
            map[r.term].count++;
            if (r.known) map[r.term].knownCount++;
        });
        return Object.values(map)
            .sort((a, b) => b.count - a.count)
            .slice(0, limit)
            .map(t => ({ ...t, knownRate: Math.round((t.knownCount / t.count) * 100) }));
    }

    /**
     * Recent sessions. Returns the last N sessions (newest first).
     */
    getRecentSessions(limit = 10) {
        return [...this.data.sessions].reverse().slice(0, limit);
    }

    /**
     * Unique terms ever reviewed.
     */
    get uniqueTermsReviewed() {
        return new Set(this.data.reviews.map(r => r.term)).size;
    }

    /**
     * Reviews per month for the current year. Returns { labels, values }.
     */
    getMonthlyActivity() {
        const year = new Date().getFullYear();
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const counts = new Array(12).fill(0);
        this.data.reviews.forEach(r => {
            const d = new Date(r.date);
            if (d.getFullYear() === year) counts[d.getMonth()]++;
        });
        return { labels: months, values: counts };
    }
}

// ---- GLOBAL TRACKER INSTANCE ----
let tracker = new StudyTracker('guest');

async function initTracker() {
    const user = await getUser();
    tracker = new StudyTracker(user ? user.id : 'guest');

    // IMPORTANT: Wait for data to load from cloud or local before continuing
    await tracker.load();

    return tracker;
}
