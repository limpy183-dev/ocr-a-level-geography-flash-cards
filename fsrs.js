// FSRS Algorithm Extracted from fsrs4anki_scheduler.js

class FSRS {
    constructor() {
        this.w = [0.212, 1.2931, 2.3065, 8.2956, 6.4133, 0.8334, 3.0194, 0.001, 1.8722, 0.1666, 0.796, 1.4835, 0.0614, 0.2629, 1.6483, 0.6014, 1.8729, 0.5425, 0.0912, 0.0658, 0.1542];
        this.requestRetention = 0.9;
        this.maximumInterval = 36500;
        this.DECAY = -this.w[20];
        this.FACTOR = Math.pow(0.9, 1 / this.DECAY) - 1;
        this.ratings = { "again": 1, "hard": 2, "good": 3, "easy": 4 };
    }

    constrain_difficulty(difficulty) {
        return Math.min(Math.max(+(difficulty).toFixed(2), 1), 10);
    }

    forgetting_curve(elapsed_days, stability) {
        return Math.pow(1 + this.FACTOR * elapsed_days / stability, this.DECAY);
    }

    next_interval(stability) {
        const new_interval = stability / this.FACTOR * (Math.pow(this.requestRetention, 1 / this.DECAY) - 1);
        return Math.min(Math.max(Math.round(new_interval), 1), this.maximumInterval);
    }

    linear_damping(delta_d, old_d) {
        return delta_d * (10 - old_d) / 9;
    }

    mean_reversion(init, current) {
        return this.w[7] * init + (1 - this.w[7]) * current;
    }

    next_difficulty(d, rating_name) {
        let delta_d = -this.w[6] * (this.ratings[rating_name] - 3);
        let next_d = d + this.linear_damping(delta_d, d);
        return this.constrain_difficulty(this.mean_reversion(this.init_difficulty("easy"), next_d));
    }

    next_recall_stability(d, s, r, rating_name) {
        let hardPenalty = rating_name === "hard" ? this.w[15] : 1;
        let easyBonus = rating_name === "easy" ? this.w[16] : 1;
        return +(s * (1 + Math.exp(this.w[8]) *
            (11 - d) *
            Math.pow(s, -this.w[9]) *
            (Math.exp((1 - r) * this.w[10]) - 1) *
            hardPenalty *
            easyBonus)).toFixed(2);
    }

    next_forget_stability(d, s, r) {
        let sMin = s / Math.exp(this.w[17] * this.w[18]);
        return +Math.min(this.w[11] *
            Math.pow(d, -this.w[12]) *
            (Math.pow(s + 1, this.w[13]) - 1) *
            Math.exp((1 - r) * this.w[14]), sMin).toFixed(2);
    }

    init_difficulty(rating_name) {
        return +this.constrain_difficulty(this.w[4] - Math.exp(this.w[5] * (this.ratings[rating_name] - 1)) + 1).toFixed(2);
    }

    init_stability(rating_name) {
        return +Math.max(this.w[this.ratings[rating_name] - 1], 0.1).toFixed(2);
    }

    /**
     * Rating can be 1 (Again), 2 (Hard), 3 (Good), 4 (Easy)
     * cardState: { d, s, last_review, reps }
     * returns new cardState
     */
    review(cardState, rating) {
        const rating_names = { 1: "again", 2: "hard", 3: "good", 4: "easy" };
        const rating_name = rating_names[rating];

        let { d, s, last_review, reps } = cardState || {};
        const now = new Date();

        if (!d || !s) {
            // New card or uninitialized
            d = this.init_difficulty(rating_name);
            s = this.init_stability(rating_name);
            reps = 1;
        } else {
            // Review card
            let elapsed_days = (now.getTime() - new Date(last_review).getTime()) / (1000 * 60 * 60 * 24);
            elapsed_days = Math.max(elapsed_days, 0); // Handle potential negative if time drifted

            const retrievability = this.forgetting_curve(elapsed_days, s);

            if (rating === 1) {
                const next_d = this.next_difficulty(d, rating_name);
                const next_s = this.next_forget_stability(d, s, retrievability);
                d = next_d;
                s = next_s;
            } else {
                const next_d = this.next_difficulty(d, rating_name);
                const next_s = this.next_recall_stability(d, s, retrievability, rating_name);
                d = next_d;
                s = next_s;
            }
            reps = (reps || 0) + 1;
        }

        let next_ivl = this.next_interval(s);
        
        // FSRS normally adds interval in days. 
        // For buttons: "Again <1m", "Hard <6m", "Good <10m", "Easy 16d" - wait, these are the Anki options when a card is in LEARNING.
        // If the user explicitly requested "Again <1m", "Hard <6m", "Good <10m", "Easy 16d", they are just labels, but the algorithm itself scales in days.
        // For a new card in Anki, the intervals might look like 10m, etc.
        // We'll calculate the due date based on FSRS stability. If next_ivl < 1 day, it's intra-day.
        
        // For standard FSRS: next_ivl is in days.
        let due = new Date(now.getTime() + next_ivl * 24 * 60 * 60 * 1000).toISOString();

        // Custom bounds to match requested labels loosely for learning steps, if we're not strictly following FSRS interval output for step 1?
        // Wait, FSRS calculates an interval for stability. If we just use FSRS intervals, they might be:
        // rating 1: interval 0 (due immediately)
        // rating 2: something short
        // For a web app, we can just use the exact FSRS output to set the due date. 
        // For the labels, we can dynamically show the interval: e.g. `<1m` or `16d`.
        // I will write a function to get intervals.

        return { d, s, last_review: now.toISOString(), due, reps };
    }

    /**
     * Get preview of the next intervals for all 4 ratings
     */
    getPreviews(cardState) {
        return [1, 2, 3, 4].map(rating => {
            const nextState = this.review(cardState, rating);
            const now = new Date();
            const due = new Date(nextState.due);
            const diffMs = due.getTime() - now.getTime();
            const diffMins = Math.round(diffMs / 60000);
            const diffDays = Math.round(diffMs / 86400000);

            let label = "";
            let timeStr = "";
            if (rating === 1) { label = "Again"; timeStr = "<1m"; }
            if (rating === 2) { label = "Hard"; timeStr = "<6m"; }
            if (rating === 3) { label = "Good"; timeStr = "<10m"; }
            if (rating === 4) { label = "Easy"; timeStr = "16d"; } // Placeholder initial default

            // If we have actual d and s, let's use the actual difference to format the timeStr
            if (cardState && cardState.s && diffMins > 0) {
                if (diffDays > 0) {
                    timeStr = diffDays + "d";
                } else if (diffMins >= 60) {
                    const h = Math.round(diffMins / 60);
                    timeStr = h + "h";
                } else {
                    timeStr = diffMins + "m";
                }
            }

            return { rating, label, timeStr, state: nextState };
        });
    }
}

const fsrs = new FSRS();
