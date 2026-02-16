const FLASHCARD_DATA = [
  {
    "name": "Coastal Landscapes",
    "emoji": "🌊",
    "color": "#3b82f6",
    "cards": [
      {
        "term": "Aggradation",
        "definition": "the disposition of sediment in a river channel which results in a rise in the bed elevation."
      },
      {
        "term": "Alluvial fan",
        "definition": "a cone of sediment deposited by a river where it leaves a steep upland course and enters a lowland area."
      },
      {
        "term": "Appropriate technology",
        "definition": "technology which is ‘appropriate’ in its context of use. It is small scale, can be managed locally and often uses skills available in the local community."
      },
      {
        "term": "Attrition",
        "definition": "the erosion of sediment transported by rivers, glaciers, waves and wind."
      },
      {
        "term": "Backwash",
        "definition": "flow of water down a beach after a wave has broken."
      },
      {
        "term": "Barrage",
        "definition": "a dam built across an estuary or bay so that the rise and/or fall in the tides can be used to generate energy by the turning of turbines."
      },
      {
        "term": "Beach recharge",
        "definition": "the addition of sediment to a beach by humans to increase its size and volume."
      },
      {
        "term": "Bio-prospecting",
        "definition": "the discovery and commercial exploitation of biological resources, e.g. genetic material in organisms."
      },
      {
        "term": "Biodegrade",
        "definition": "the breakdown of a substance through biochemical reactions or the actions of organisms such as bacteria into different compounds."
      },
      {
        "term": "Biological weathering",
        "definition": "the breakdown of rocks through the chemical and physical action of living organisms, e.g. burrowing, tree roots etc."
      },
      {
        "term": "Chelation",
        "definition": "a type of chemical weathering caused by acids derived from rainwater and dead organic material."
      },
      {
        "term": "Chemical weathering",
        "definition": "the in situ breakdown of rocks by chemical processes such as oxidation, solution and hydrolysis."
      },
      {
        "term": "Coastal squeeze",
        "definition": "the erosion of mudflats, sand flats and beaches, trapped between rising sea level and hard coastal defence structures (e.g. sea walls)."
      },
      {
        "term": "Commodity",
        "definition": "a good or material (not a service) interchangeable through trade or commerce such as a raw material."
      },
      {
        "term": "Concordant",
        "definition": "a coastline with bands of different geologies lying parallel to the shore."
      },
      {
        "term": "Containerisation",
        "definition": "the shipping of goods (by road, rail and sea) in standard-sized metal boxes. It allows efficient, mechanised handling of large volumes of goods and lowers transport costs."
      },
      {
        "term": "Continental shelf",
        "definition": "the gently sloping offshore extension of a continent extending into the ocean as far as the continental slope."
      },
      {
        "term": "Corrasion",
        "definition": "the scouring and erosion of rock surfaces by sediments transported by rivers, glaciers, waves and wind (also known as abrasion)."
      },
      {
        "term": "Crevasse splays",
        "definition": "low-lying areas of deposited sediment between levées."
      },
      {
        "term": "Cusps",
        "definition": "a pointed and regular arc pattern of sediment on a beach."
      },
      {
        "term": "De-industrialisation",
        "definition": "the absolute or relative decline in the importance of manufacturing in the economy of a country or region."
      },
      {
        "term": "Denudation",
        "definition": "the wearing away of the Earth’s surface by weathering and erosion."
      },
      {
        "term": "Dependent variable",
        "definition": "a variable affected by change in a related (independent) variable, e.g. rainfall affected by altitude."
      },
      {
        "term": "Deposition",
        "definition": "the laying down of sediment transported by rivers, waves, glaciers and wind, as energy levels decline."
      },
      {
        "term": "Discordant",
        "definition": "a coastline with bands of different geologies lying perpendicular to the shore."
      },
      {
        "term": "Endemic disease",
        "definition": "a disease that exits permanently in a geographical area or human group."
      },
      {
        "term": "Enhanced weathering",
        "definition": "artificial crushing of rocks to increase surface areas and absorption of atmospheric CO2 by silicates to form carbonate minerals."
      },
      {
        "term": "Entitlements",
        "definition": "the purchasing and bargaining power that gives people access to food and other basic needs."
      },
      {
        "term": "Erosion",
        "definition": "the wearing away and/or removal of rock and other material by a moving force."
      },
      {
        "term": "Eustatic",
        "definition": "worldwide change in sea level."
      },
      {
        "term": "Fault scarp",
        "definition": "a cliff or escarpment formed directly by rocks being displaced either side of a fault."
      },
      {
        "term": "Fetch",
        "definition": "the distance of open water in one direction from a coastline, over which the wind can blow."
      },
      {
        "term": "Hard engineering",
        "definition": "the controlled disruption of natural processes by using man-made structures, e.g. sea wall, levées."
      },
      {
        "term": "Histogram",
        "definition": "a type of bar chart where the frequency of values is represented in classes or categories."
      },
      {
        "term": "Independent variable",
        "definition": "a variable causing change in another (dependent) variable, e.g. rainfall influencing river flow."
      },
      {
        "term": "Input",
        "definition": "an addition of energy and/or materials to a system."
      },
      {
        "term": "Insolation weathering",
        "definition": "the in situ breakdown of rocks in tropical and subtropical deserts caused by extreme diurnal changes in surface temperature."
      },
      {
        "term": "Leaching",
        "definition": "soluble materials draining away in soil."
      },
      {
        "term": "Liquefaction",
        "definition": "the process by which sediments and soils lose their mechanical strength from a sudden loss of cohesion. The material is temporarily transformed into a fluid as the result of being violently shaken during an earthquake."
      },
      {
        "term": "Lithification",
        "definition": "the transformation of sediments into rock."
      },
      {
        "term": "Longshore drift",
        "definition": "the movement of sediment by waves and currents along a coastline."
      },
      {
        "term": "Mass movement",
        "definition": "the downslope transportation of material under gravity."
      },
      {
        "term": "Methane hydrate",
        "definition": "a structure of ice that contains methane between ice crystals and is found in ocean floor sediments."
      },
      {
        "term": "Nearshore zone",
        "definition": "the area of coastal environment between mean high tide and mean low tide."
      },
      {
        "term": "Orthogonals",
        "definition": "imaginary lines, perpendicular to wave fronts, representing the transfer of energy as a wave moves towards the coast."
      },
      {
        "term": "Output",
        "definition": "the transfer of energy and/or materials out of a system."
      },
      {
        "term": "Palaeomagnetism",
        "definition": "traces of changes in the Earth’s magnetic field in the alignment of magnetic minerals in sedimentary and igneous rocks."
      },
      {
        "term": "Primary data",
        "definition": "information that is unprocessed and often collected by research."
      },
      {
        "term": "Primary producer",
        "definition": "green plants (both terrestrial and marine) that convert sunlight, CO2 and mineral nutrients in photosynthesis, into organic matter (chemical energy)."
      },
      {
        "term": "Rip currents",
        "definition": "strong and relatively narrow currents of water that flow seaward against breaking waves."
      },
      {
        "term": "Rock groynes",
        "definition": "low walls made of resistant pieces of rock and built out from the coast into the sea."
      },
      {
        "term": "Salt weathering",
        "definition": "the breakdown of permeable rocks by the internal growth of salt crystals precipitated out of solution."
      },
      {
        "term": "Sand sea",
        "definition": "a vast area of sand dunes, completely covering the solid rock surfaces at depth."
      },
      {
        "term": "Secondary sector",
        "definition": "economic activities involving manufacturing industries, e.g. processing raw materials, making semi-finished and finished goods."
      },
      {
        "term": "Sediment budget",
        "definition": "the balance of the sediment volume entering and exiting a particular section of coast."
      },
      {
        "term": "Sediment cell",
        "definition": "a stretch of coastline and its associated nearshore area within which the movement of coarse sediment, sand and shingle is largely self-contained."
      },
      {
        "term": "Soft engineering",
        "definition": "the deployment of natural, sustainable processes to protect the environment from erosion, flooding etc., rather than hard engineering structures, e.g. beaches and salt marshes rather than sea walls."
      },
      {
        "term": "Solution",
        "definition": "the chemical weathering process by which rock minerals are dissolved."
      },
      {
        "term": "Statistical population",
        "definition": "the entire pool from which a statistical sample is drawn (e.g. all the pebbles on a shingle beach)."
      },
      {
        "term": "Storm wave",
        "definition": "a wave generated locally by high wind energy."
      },
      {
        "term": "Strata",
        "definition": "the layers or beds found in sedimentary rock."
      },
      {
        "term": "Sub-aerial process",
        "definition": "a collective term for weathering and mass movement processes."
      },
      {
        "term": "Swash",
        "definition": "the movement of water up a beach after a wave has broken."
      },
      {
        "term": "Swell wave",
        "definition": "a relatively smooth ocean wave that travels some distance from the area of its generation."
      },
      {
        "term": "Talus",
        "definition": "a steep, concave debris slope at the foot of a cliff or free-face, comprising angular rock particles (also known as a scree slope)."
      },
      {
        "term": "Threshold (coastal)",
        "definition": "the relatively shallow part of a ria or fjord at its seaward end."
      },
      {
        "term": "Troposphere",
        "definition": "the lowest layer of the atmosphere, which contains virtually all of the planet’s weather."
      },
      {
        "term": "Turbid",
        "definition": "cloudy or muddy conditions owing to sediments held in suspension."
      },
      {
        "term": "Wave period",
        "definition": "the time interval between successive wave crests arriving at a given point."
      },
      {
        "term": "Wave refraction",
        "definition": "the reorientation of wave fronts as they enter shallow water so that they approach parallel (or roughly parallel) to the shoreline."
      },
      {
        "term": "Weathering",
        "definition": "the in situ breakdown of rocks exposed at, or near, the land surface by physical, chemical and biological processes."
      }
    ]
  },
  {
    "name": "Glaciated Landscapes",
    "emoji": "⛰️",
    "color": "#06b6d4",
    "cards": [
      {
        "term": "Ablation",
        "definition": "the loss of ice and snow, especially from a glacier, through melting, evaporation and sublimation."
      },
      {
        "term": "Accumulation",
        "definition": "the addition or gain of snow and ice to a glacier over time."
      },
      {
        "term": "Active layer",
        "definition": "the near surface layer in a periglacial environment which seasonally freezes and thaws."
      },
      {
        "term": "Alases",
        "definition": "flat-floored, steep-side depressions in periglacial environments."
      },
      {
        "term": "Arête",
        "definition": "a narrow, ‘knife-edged’ ridge between two corries."
      },
      {
        "term": "Cirrus cloud",
        "definition": "a high altitude, feather-like cloud made of ice crystals."
      },
      {
        "term": "Compressing flow",
        "definition": "the movement of glacial ice down a gentle gradient, during which it thickens."
      },
      {
        "term": "Continental drift",
        "definition": "the theory that the continents are mobile and have moved across the Earth’s surface through geological time."
      },
      {
        "term": "Cryoturbation",
        "definition": "frost churning of layers of regolith in periglacial environments."
      },
      {
        "term": "Diagenesis",
        "definition": "the process by which snow becomes ice due to compression."
      },
      {
        "term": "Drift",
        "definition": "the collective term for all glacial deposits, including till and outwash."
      },
      {
        "term": "Drumlins",
        "definition": "streamlined mounds of glacial drift."
      },
      {
        "term": "Ecosystem service",
        "definition": "the processes by which the environment produces resources used by humans such as oxygen, water, food and materials."
      },
      {
        "term": "Esker",
        "definition": "a long, sinuous ridge composed of stratified sand and gravel."
      },
      {
        "term": "Extending flow",
        "definition": "the movement of glacial ice down a steep gradient, during which it thins."
      },
      {
        "term": "Freeze-thaw",
        "definition": "a mechanical weathering process caused by water, confined in rock joints, expanding as it freezes, and as a result breaking rocks into smaller particles."
      },
      {
        "term": "Frost heave",
        "definition": "the downslope displacement of soil particles that results from cycles of freeze-thaw."
      },
      {
        "term": "Gelifluction",
        "definition": "the slow, downslope mass flow of saturated regolith resting on a layer of permafrost."
      },
      {
        "term": "Glacial",
        "definition": "a prolonged cold climatic phase lasting for tens of thousands of years and causing continental glaciation in middle and high latitudes."
      },
      {
        "term": "Glacier mass balance",
        "definition": "the difference between the amount of snow and ice accumulation and the amount of ablation occurring in a glacier over one year."
      },
      {
        "term": "Glacio-fluvial",
        "definition": "relating to meltwater from a glacier."
      },
      {
        "term": "Hydrostatic pressure",
        "definition": "the pressure exerted by a confined fluid, such as water under or in a glacier."
      },
      {
        "term": "Ice shelf",
        "definition": "a floating sheet of ice permanently attached to a land mass."
      },
      {
        "term": "Ice wedge cast",
        "definition": "a downward tapering body of sediment differentiated from surrounding regolith by texture and/or colour. Casts are evidence of former ice wedges which developed during past periglacial conditions."
      },
      {
        "term": "Ice-contact drift",
        "definition": "sediment deposited under or against ice."
      },
      {
        "term": "Inter-glacial",
        "definition": "a period of climatic warming (lasting c.10,000 years) between glacials."
      },
      {
        "term": "Jökulhaulps",
        "definition": "extreme glacial meltwater outbursts caused by geothermal or volcanic activity beneath glaciers."
      },
      {
        "term": "Lateral moraine",
        "definition": "a ridge of till running along the edge of a glacial valley."
      },
      {
        "term": "Merchandise",
        "definition": "commodities or products (not services) available for sale."
      },
      {
        "term": "Multiplier effect",
        "definition": "the process by which a new or expanding economic activity in an area creates additional employment as its employees have money to spend on goods and services. As the wealth of an area increases it stimulates more economic activity."
      },
      {
        "term": "Nivation hollow",
        "definition": "a depression formed by freeze-thaw and meltwater transport of weathered rock particles beneath a permanent snow patch."
      },
      {
        "term": "Ognip",
        "definition": "the remains of a collapsed pingo, forming a depression surrounded by circular earth ramparts."
      },
      {
        "term": "Outwash plain",
        "definition": "a flat expanse of glacio-fluvial sediment located beyond an existing or former glacier or ice sheet front."
      },
      {
        "term": "Outwash",
        "definition": "material deposited by glacial meltwater."
      },
      {
        "term": "Permafrost",
        "definition": "permanently frozen soil and regolith."
      },
      {
        "term": "Pingo",
        "definition": "a conical ice-cored hill in periglacial environments."
      },
      {
        "term": "Precipitation",
        "definition": "moisture (rain, snow, hail) falling from clouds towards the ground."
      },
      {
        "term": "Pressure melting point",
        "definition": "the temperature at which ice melts when under pressure."
      },
      {
        "term": "Price shocks",
        "definition": "an unexpected and unpredictable change in prices. It can be positive or negative."
      },
      {
        "term": "Proglacial lakes",
        "definition": "a body of water impounded in front of a glacier."
      },
      {
        "term": "Pyramidal peak",
        "definition": "an angular, sharply pointed mountain peak which results from corrie erosion."
      },
      {
        "term": "Recessional moraines",
        "definition": "a series of ridges running transversely across a glacial trough."
      },
      {
        "term": "Rock flour",
        "definition": "fine material derived from abrasion by a glacier."
      },
      {
        "term": "Rock glacier",
        "definition": "coarse rock particles forming linear accumulations and moving slowly downslope due to the formation and melting of interstitial ice."
      },
      {
        "term": "Services",
        "definition": "tradeable activities providing expertise which relies on workforce skills, experience and knowledge rather than processing or production of physical materials. Producer services include legal and financial services for other firms. Consumer services include education and health care for local communities."
      },
      {
        "term": "Solifluction",
        "definition": "the slow flow of fine, water-saturated regolith from higher to lower ground."
      },
      {
        "term": "Stadial",
        "definition": "a sudden and brief period of glacial conditions lasting several hundred years."
      },
      {
        "term": "Stone garlands",
        "definition": "elongated accumulations of stones on a slope."
      },
      {
        "term": "Striations",
        "definition": "scratches or grooves on rock surfaces formed by glacial abrasion."
      },
      {
        "term": "Sublimation",
        "definition": "the phase change of water from ice to vapour."
      },
      {
        "term": "Terminal moraine",
        "definition": "a ridge of till extending across a glacial trough."
      },
      {
        "term": "Threshold",
        "definition": "the minimum number of people or spending required to support a good or service."
      },
      {
        "term": "Till",
        "definition": "unsorted material deposited directly by glacial ice."
      },
      {
        "term": "Zero tillage",
        "definition": "a type of arable cultivation designed to minimise moisture loss from the soil. Its main feature is the absence of ploughing."
      }
    ]
  },
  {
    "name": "Dryland Landscapes",
    "emoji": "🏜️",
    "color": "#f59e0b",
    "cards": [
      {
        "term": "Aeolian",
        "definition": "erosional, transportational and depositional processes by the wind."
      },
      {
        "term": "Bajada",
        "definition": "a series of alluvial fans that merge to form a continuous apron of sediment along a mountain front in dryland regions."
      },
      {
        "term": "Barchan",
        "definition": "a discrete, crescent-shaped sand dune, with horns pointing downwind."
      },
      {
        "term": "Biodiversity hotspot",
        "definition": "a region that is rich in biodiversity and where species and habitats are threatened with destruction."
      },
      {
        "term": "Butte",
        "definition": "an isolated, steep-sided, flat-topped rock outcrop."
      },
      {
        "term": "Core region",
        "definition": "an area where economic activity is concentrated and living standards are relatively high."
      },
      {
        "term": "Deflation",
        "definition": "erosion of clay and silt-sized particles by wind action in drylands."
      },
      {
        "term": "Desert pavement",
        "definition": "an almost continuous surface of rocky particles in drylands, resulting from the removal of finer particles by wind action."
      },
      {
        "term": "Desertification",
        "definition": "the reduction in agricultural capacity due to overexploitation of resources and natural processes such as drought. Only in extreme cases does it result in desert-like conditions."
      },
      {
        "term": "Emerging and developing countries",
        "definition": "countries that do not share all the economic development characteristics required to be advanced, and also are not eligible for the Poverty Reduction and Growth Trust, identified by the IMF."
      },
      {
        "term": "Energy security",
        "definition": "the uninterrupted availability of energy sources at an affordable price."
      },
      {
        "term": "Erg",
        "definition": "a sand desert."
      },
      {
        "term": "Exfoliation",
        "definition": "the peeling away of outer rock layers of boulders and rock outcrops by weathering in drylands."
      },
      {
        "term": "Flash flood",
        "definition": "a sudden and violent flood event caused by intense rainfall and rapid run-off."
      },
      {
        "term": "Flocculation",
        "definition": "a process by which salt causes the aggregation of minute clay particles into larger masses that are too heavy to remain suspended in water."
      },
      {
        "term": "Flocs",
        "definition": "a mass formed in a fluid by the aggregation of suspended particles."
      },
      {
        "term": "Flood basalt",
        "definition": "a large area of basaltic lava erupted over a long period (thousands of years) from multiple vents, e.g. the Deccan Plateau."
      },
      {
        "term": "Informal sector",
        "definition": "those parts of the economy outside official recognition and record. People do not need formal qualifications to be employed in it, neither is there regulation of it."
      },
      {
        "term": "Inselberg",
        "definition": "an isolated, steep-sided mountain, often surrounded by extensive plains."
      },
      {
        "term": "Inter-regional trade",
        "definition": "the flow of international trade among major world regions such as Europe, North America and Asia."
      },
      {
        "term": "Inter-tropical convergence zone",
        "definition": "area of permanent low pressure around the Equator which forms the rising limb of the Hadley cell. It is associated with instability, convection and thunderstorms."
      },
      {
        "term": "Intra-regional trade",
        "definition": "the flow of international trade within one or other of the major world regions such as Europe or Asia."
      },
      {
        "term": "Kinetic energy",
        "definition": "the capacity to do work as a result of motion."
      },
      {
        "term": "Lag deposit",
        "definition": "extensive, coarse, rocky particles in deserts, too large to be transported by wind action."
      },
      {
        "term": "Linear dune",
        "definition": "narrow, ridge-like dunes, often tens of kilometres in length and aligned in the direction of the prevailing wind."
      },
      {
        "term": "Loess",
        "definition": "a wind-blown deposit of fine particles and dust that weathers to form fertile but easily eroded soils."
      },
      {
        "term": "Mesa",
        "definition": "an extensive, steep-sided, flat-topped upland."
      },
      {
        "term": "Overgrazing",
        "definition": "excessive grazing of land by livestock which destroys or degrades pasture and is not sustainable."
      },
      {
        "term": "Pediment",
        "definition": "an extensive, gently sloping rock platform extending from the foot of a plateau-like feature in dryland environments."
      },
      {
        "term": "Playa",
        "definition": "a basin-like area of inland drainage in a dryland region. After heavy rain it may contain a shallow, temporary lake."
      },
      {
        "term": "Potential energy",
        "definition": "the capacity to do work that a body possesses by virtue of its position and that is potentially transformable into another form of energy."
      },
      {
        "term": "Protozoa",
        "definition": "single-celled micro-organisms that get their energy from the surrounding environment."
      },
      {
        "term": "Reg",
        "definition": "a stony, rocky desert."
      },
      {
        "term": "Regeneration",
        "definition": "the investment of capital and ideas into an area to revitalise and renew its socio-economic and environmental status."
      },
      {
        "term": "Regolith",
        "definition": "a loose layer of rocky material overlying bedrock."
      },
      {
        "term": "Saltpans",
        "definition": "flat areas of ground covered with salt deposited by the evaporation of saline water."
      },
      {
        "term": "Star dune",
        "definition": "a pyramid-shaped sand dune which develops where there is no dominant wind direction."
      },
      {
        "term": "Systematic sampling",
        "definition": "a sample drawn at regular intervals from a population (e.g. every 10 m, every nth person)."
      },
      {
        "term": "Thermal energy",
        "definition": "the capacity to do work as a result of heat."
      },
      {
        "term": "Trade winds",
        "definition": "prevailing winds that blow southeast and northeast towards the Equator from the sub-tropics."
      },
      {
        "term": "Transportation",
        "definition": "The movement of material by the kinetic energy of a medium such as water, wind or ice."
      },
      {
        "term": "Trophic level",
        "definition": "the level at which energy in the form of food is transferred from one organism to another as part of a food chain."
      },
      {
        "term": "Zeugen",
        "definition": "tabular-shaped rock outcrops in hot deserts, attributed to wind erosion."
      }
    ]
  },
  {
    "name": "Earth’s Life Support Systems",
    "emoji": "📚",
    "color": "#10b981",
    "cards": [
      {
        "term": "Absolute humidity",
        "definition": "the mass of water vapour in a given volume of air."
      },
      {
        "term": "Abstraction",
        "definition": "the extraction of water from rivers and boreholes for public water supply, agriculture etc."
      },
      {
        "term": "Acidification",
        "definition": "decreasing pH, e.g. of the oceans due to an increase in the uptake of CO2 from the atmosphere."
      },
      {
        "term": "Algal bloom",
        "definition": "a rapid increase in algae in a water system."
      },
      {
        "term": "Aquifer",
        "definition": "a water-bearing band of porous or permeable rock."
      },
      {
        "term": "Artesian aquifer",
        "definition": "a confined aquifer containing groundwater that when tapped will rise to the surface under its own pressure."
      },
      {
        "term": "Artesian pressure",
        "definition": "the hydrostatic pressure exerted on groundwater in a confined aquifer occupying a synclinal structure."
      },
      {
        "term": "Atmosphere",
        "definition": "the thin envelope of gases (mainly nitrogen and oxygen) that surrounds the Earth."
      },
      {
        "term": "Biomass",
        "definition": "weight of living matter per unit area (usually b/m2 )."
      },
      {
        "term": "Biosphere",
        "definition": "the space at the Earth’s surface and within the atmosphere occupied by living organisms."
      },
      {
        "term": "Blue water navy",
        "definition": "a navy capable of operating away from its home bases and across the deep oceans."
      },
      {
        "term": "Carbon capture and storage",
        "definition": "the removal of CO2 from emissions by thermal power stations and its storage in disused oil and gas wells underground."
      },
      {
        "term": "Carbon fertilisation",
        "definition": "rising CO2 levels in the atmosphere which increase photosynthesis and stimulate plant growth."
      },
      {
        "term": "Carbon offset",
        "definition": "market-based approach to limiting carbon emissions. Businesses receive annual carbon quotas (credits). These can be sold/bought on international carbon markets."
      },
      {
        "term": "Carbon sink",
        "definition": "a long-term store of carbon in ocean sediments, carbonate rocks, forests etc."
      },
      {
        "term": "Carbon source",
        "definition": "inputs of carbon to the atmosphere by respiration, combustion and decomposition."
      },
      {
        "term": "Carbonaceous rock",
        "definition": "rocks mainly comprising the fossilised remains of plants, e.g. coal, lignite."
      },
      {
        "term": "Carbonate rock",
        "definition": "rocks comprising carbonate minerals (e.g. CaCO3 ) such as limestone and chalk."
      },
      {
        "term": "Catchment",
        "definition": "the area drained by a river and its tributaries i.e. a drainage basin."
      },
      {
        "term": "Closed system",
        "definition": "a system with inputs and outputs of energy, but without any movement of materials across system boundaries."
      },
      {
        "term": "Condensation",
        "definition": "the phase change of water vapour (gas) to water (liquid)."
      },
      {
        "term": "Decarbonation",
        "definition": "the reduction or removal of carbon emissions from energy sources."
      },
      {
        "term": "Enhanced greenhouse effect",
        "definition": "increasing levels of CO2 and other greenhouse gases in the atmosphere amplifying the natural greenhouse effect."
      },
      {
        "term": "Eutrophication",
        "definition": "the process whereby nutrient enrichment in water (streams, rivers, lakes) leads to a fall in oxygen levels and the subsequent death of species which are O2 dependent."
      },
      {
        "term": "Evaporation",
        "definition": "the process by which liquid water is converted into a gaseous state."
      },
      {
        "term": "Evapotranspiration",
        "definition": "combined loss of water at the surface through evaporation and transpiration by plants."
      },
      {
        "term": "Flux",
        "definition": "the rate of energy transfer per unit area."
      },
      {
        "term": "Groundwater flow",
        "definition": "the horizontal movement of water within aquifers."
      },
      {
        "term": "Groundwater",
        "definition": "water stored underground in permeable and porous rocks known as aquifers."
      },
      {
        "term": "Hydration",
        "definition": "the breakdown of rocks by cycles of wetting (expansion) and drying (contraction)."
      },
      {
        "term": "Hydrocarbons",
        "definition": "the main chemical compounds making up fossil fuels."
      },
      {
        "term": "Hydrothermal vent",
        "definition": "very hot water springs, rich in dissolved minerals, flowing from the ocean floor at mid-ocean ridges or hot spots."
      },
      {
        "term": "Infiltration capacity",
        "definition": "the maximum rate at which water, under the pull of gravity, soaks into the soil."
      },
      {
        "term": "Infiltration",
        "definition": "the vertical movement of rainwater through the soil."
      },
      {
        "term": "Interception loss",
        "definition": "rainwater stored temporarily on the leaves, stems and branches of vegetation which is evaporated and does not reach the ground surface."
      },
      {
        "term": "Lag time",
        "definition": "the difference in time between maximum rainfall and peak river discharge."
      },
      {
        "term": "Life cycle",
        "definition": "the progress of a person through various stages based on age and family unit, from infancy to old age."
      },
      {
        "term": "Myrdal’s model of circular and cumulative causation",
        "definition": "initial advantages to economic development in a core region, such as natural resources or accessibility, trigger a series of virtuous growth cycles through positive feedback, leading to further economic growth and the acquired advantages of agglomeration."
      },
      {
        "term": "Negative feedback",
        "definition": "an automatic response to change in a system that restores equilibrium."
      },
      {
        "term": "Net primary productivity (NPP)",
        "definition": "the rate at which plants accumulate energy in the form of organic matter taking into account the energy used in respiration."
      },
      {
        "term": "Open system",
        "definition": "a type of system whose boundaries are open to both inputs and outputs of energy and matter."
      },
      {
        "term": "Overland flow",
        "definition": "rainfall that runs off the ground surface either because the soil is saturated or the intensity of rainfall exceeds the soil’s infiltration capacity."
      },
      {
        "term": "Oxidation",
        "definition": "a chemical process that weathers certain types of rock and involves the absorption of oxygen from either the atmosphere or water by rock minerals."
      },
      {
        "term": "Peak discharge",
        "definition": "the maximum flow (in cumecs) of a river in response to a rainfall event."
      },
      {
        "term": "Percolation",
        "definition": "the movement of surface and soil water into underlying permeable rocks."
      },
      {
        "term": "Permeability",
        "definition": "the ability of a rock to absorb water through rock joints, pores etc."
      },
      {
        "term": "Permeable rock",
        "definition": "a type of rock that is penetrated by water, either through mineral pores (air spaces) or along joints, faults and fissures."
      },
      {
        "term": "Photic zone",
        "definition": "shallow layer of water in the ocean that light penetrates, on average to about 50 m."
      },
      {
        "term": "Photosynthesis",
        "definition": "process by which green plants convert water and CO2 into starch and sugar in the presence of sunlight."
      },
      {
        "term": "Porosity",
        "definition": "the ability of a rock, like chalk, to absorb water through tiny air spaces (or pores) between mineral particles."
      },
      {
        "term": "Porous rock",
        "definition": "rocks which contain pores or air spaces between mineral particles, where water is stored."
      },
      {
        "term": "Positive feedback",
        "definition": "an automatic response to change in a system which generates further change."
      },
      {
        "term": "Potential evapotranspiration",
        "definition": "the amount of moisture that could in theory be evaporated and transpired from a surface, assuming that moisture is freely available all year round."
      },
      {
        "term": "Potentiometric surface",
        "definition": "an imaginary surface that defines the theoretical level to which water would rise in a confined aquifer."
      },
      {
        "term": "Producer organisms",
        "definition": "organisms that capture energy from the Sun in the process of photosynthesis and store this energy as organic matter."
      },
      {
        "term": "Recharge",
        "definition": "net input of water into an aquifer causing a rise in the water table."
      },
      {
        "term": "Relative humidity",
        "definition": "the mass of water vapour in a given volume of air as a ratio of the mass needed to saturate it."
      },
      {
        "term": "Residence time",
        "definition": "the length of time that a molecule of water or carbon dioxide etc. remains in natural storage (e.g. in the atmosphere or oceans)."
      },
      {
        "term": "Respiration",
        "definition": "the process in living organisms where the intake of oxygen oxidises organic substances to produce energy and release carbon dioxide."
      },
      {
        "term": "River discharge",
        "definition": "the volume of water flowing in a river channel, measured in cubic metres per second (cumecs)."
      },
      {
        "term": "Run-off",
        "definition": "the movement of water across the land surface."
      },
      {
        "term": "Saturated overland flow",
        "definition": "the movement of water across the ground –"
      },
      {
        "term": "Stemflow",
        "definition": "the flow of water along the branches and stems of trees and other plants to the ground."
      },
      {
        "term": "Surface wash",
        "definition": "rainwater that runs-off the ground surface but is not confined within a channel."
      },
      {
        "term": "Thermal expansion of water",
        "definition": "increase in volume of water due to its rise in temperature."
      },
      {
        "term": "Thermocline",
        "definition": "the depth in the ocean where there is a rapid change in water temperature."
      },
      {
        "term": "Throughflow",
        "definition": "water flowing horizontally through the soil to stream and river channels."
      },
      {
        "term": "Tidal range",
        "definition": "the vertical difference in height between consecutive high and low waters over a tidal cycle."
      },
      {
        "term": "Transpiration",
        "definition": "the evaporation of moisture from pores on the leaf surfaces of plants."
      },
      {
        "term": "Virtual water",
        "definition": "the volume of freshwater needed to make a product, measured at the place where the product was manufactured."
      },
      {
        "term": "Water balance",
        "definition": "the relationship between precipitation, streamflow, evapotranspiration, and soil moisture and groundwater storage in a drainage basin over a year."
      },
      {
        "term": "Water cycle budget",
        "definition": "the annual volume of movement of water by precipitation, evapotranspiration, run-off etc. between stores such as oceans, permeable rocks, ice sheets, vegetation, soil etc."
      },
      {
        "term": "Water table",
        "definition": "the upper surface of the zone of saturation in permeable rocks and the soil."
      },
      {
        "term": "Xerophyte",
        "definition": "a plant with adaptations that enable it to survive in an environment with little water."
      }
    ]
  },
  {
    "name": "Changing Spaces, Making Places",
    "emoji": "🏘️",
    "color": "#8b5cf6",
    "cards": [
      {
        "term": "Capitalist",
        "definition": "the socio-economic system in which production of goods and services takes place to generate profit. A key driving force in the system is people’s desire for gain and self-interest."
      },
      {
        "term": "Carrying capacity",
        "definition": "the maximum number of a species that can be supported in a given area in a sustainable way."
      },
      {
        "term": "Conurbation",
        "definition": "large urban area in population and areal terms, made up of the merging together of previously separate towns and cities."
      },
      {
        "term": "Degradation (of land)",
        "definition": "a process leading to a significant reduction in the production capacity of land."
      },
      {
        "term": "Deprivation",
        "definition": "when a person’s well-being falls below a generally regarded minimum. A range of factors are usually included to measure this such as employment, housing, health and education."
      },
      {
        "term": "Disposable income",
        "definition": "the proportion of a person’s income that is left after essentials such as housing, food, clothing, heating and taxes have been paid."
      },
      {
        "term": "Economic restructuring",
        "definition": "the change in proportions of people working in various economic sectors, e.g. the change in ACs from secondary to tertiary employment."
      },
      {
        "term": "Ecosystem",
        "definition": "a community of living organisms and their relationships with each other and the environment."
      },
      {
        "term": "Edge city",
        "definition": "substantial urban development on the fringe of an existing conurbation. They are often formally planned and are relatively selfsufficient."
      },
      {
        "term": "Gentrification",
        "definition": "process by which former low-income inner city housing districts in ACs are invaded by higher-income groups and refurbished."
      },
      {
        "term": "Ghetto",
        "definition": "concentration of people with similar socio-economic, cultural or ethnic background within a well-defined small part of an urban area."
      },
      {
        "term": "Green belt",
        "definition": "zone of predominantly rural land use on the periphery of an urban area where strict controls on development apply."
      },
      {
        "term": "Housing tenure",
        "definition": "the system under which housing is occupied, e.g. owneroccupiers or tenants renting from a landlord."
      },
      {
        "term": "Icon",
        "definition": "something that has meaning as being representative of a place, culture or religion. In the urban landscape a building can become an icon, e.g. Buckingham Palace."
      },
      {
        "term": "Key settlement",
        "definition": "rural settlement where services (e.g. schools, doctors’ surgeries, shops) are concentrated to meet thresholds that will ensure their economic viability."
      },
      {
        "term": "Knowledge economy",
        "definition": "wealth creating activities that gather, store and analyse knowledge, e.g. high-tech manufacturing, finance, telecommunications, business services, design, education and health."
      },
      {
        "term": "Militarisation",
        "definition": "a significant increase in military activity in a place."
      },
      {
        "term": "Plant succession",
        "definition": "the sequence of changes within a plant community as it develops through time."
      },
      {
        "term": "Player",
        "definition": "individual or organisation with an interest and or influence in actions, decisions or operations. Also known as a stakeholder."
      },
      {
        "term": "Post-industrial",
        "definition": "a society and economy no longer dominated by the secondary sector but one where the great majority of people are involved in tertiary activities."
      },
      {
        "term": "Qualitative data",
        "definition": "information focused on how people view, experience, construct and represent places."
      },
      {
        "term": "Quaternary sector",
        "definition": "economic activities that provide services to other economic activities, e.g. finance, research and development, advertising and consultancy."
      },
      {
        "term": "Rebranding",
        "definition": "developments aimed at changing negative perceptions of a place, making it more attractive to investment."
      },
      {
        "term": "Reimaging",
        "definition": "developments associated with rebranding and usually involving cultural, artistic or sporting elements."
      },
      {
        "term": "Settling velocity",
        "definition": "the speed required for suspended particles of a given size, transported by rivers, the wind and tidal currents, to be deposited."
      },
      {
        "term": "Spatial inequality",
        "definition": "the unequal distribution of factors such as income, education or health across geographic space at any scale."
      },
      {
        "term": "Stability",
        "definition": "the atmospheric condition where an air parcel displaced from its original level returns to the same level (i.e. because it is heavier/denser than the surrounding air)."
      },
      {
        "term": "Stakeholder",
        "definition": "see player."
      },
      {
        "term": "Tertiary sector",
        "definition": "economic activities providing services, e.g. education and health, legal, financial, insurance, government."
      },
      {
        "term": "Time-space compression",
        "definition": "a set of processes leading to a ‘shrinking world’ caused by reductions in the relative distance between places, e.g. travel time."
      },
      {
        "term": "Urban heat island",
        "definition": "a town or city that is significantly warmer than its surrounding rural areas due to human activities."
      }
    ]
  },
  {
    "name": "Trade in the Contemporary World",
    "emoji": "📦",
    "color": "#ef4444",
    "cards": [
      {
        "term": "Block disintegration",
        "definition": "physical weathering of massively jointed rocks which results in boulder-sized rock debris."
      },
      {
        "term": "Blockfield",
        "definition": "a large expanse of boulders strewn across a level surface, often in mountain environments."
      },
      {
        "term": "Comparative advantage",
        "definition": "the principle that countries or regions benefit from specialising in an economic activity in which they are relatively more efficient or skilled."
      },
      {
        "term": "Comprehensive redevelopment",
        "definition": "the planning and rebuilding of a substantial part of an urban area involving the demolition of nearly all of the previous buildings and infrastructure."
      },
      {
        "term": "Corporate social responsibility",
        "definition": "commitment and initiative of a corporation to assess and take responsibility for its social and environmental impact. This includes its ethical behaviour towards the quality of life of its work force, their families and local communities, and its contribution to economic development and the natural environment."
      },
      {
        "term": "Development gap",
        "definition": "difference in prosperity and well-being between rich and poor countries. This could be measured, for example, by GDP per capita and HDI."
      },
      {
        "term": "Economies of scale",
        "definition": "internal economies of scale are savings in unit costs that arise from large-scale production, derived from within a plant; external economies of scale are savings made by a firm that arise from outside the firm itself, such as benefits of proximity to other firms or infrastructure."
      },
      {
        "term": "Escarpment",
        "definition": "a tilt block forming an extensive upland area, with a short, steep (scarp) slope and a long, gentle (dip) slope."
      },
      {
        "term": "Food supply chain",
        "definition": "the process whereby food moves from producer to consumer. It involves production, processing, distribution, storage, consumption and disposal."
      },
      {
        "term": "Foreign Direct Investment (FDI)",
        "definition": "inward investment by a foreign company (usually a large TNC) in a country."
      },
      {
        "term": "Global Positioning System",
        "definition": "a navigation system using satellites to provide location, velocity and time for the device possessing GPS."
      },
      {
        "term": "Global commons",
        "definition": "the Earth’s shared natural resources, e.g. the oceans and the atmosphere."
      },
      {
        "term": "Global dimming",
        "definition": "release of aerosols to the atmosphere by burning fossil fuels. The aerosols reflect insolation and lower global temperatures."
      },
      {
        "term": "Global governance",
        "definition": "intervention by the global community, attempting to regulate issues, such as human rights, sovereignty and territorial integrity."
      },
      {
        "term": "Global shift",
        "definition": "the locational movement of manufacturing production in particular from ACs to EDCs and LIDCs from the 1970s onwards."
      },
      {
        "term": "Global supply chains",
        "definition": "flows of materials, products, information, services and finance in a network of suppliers, manufacturers, distributors and customers around the world."
      },
      {
        "term": "Global value chains",
        "definition": "formed when the different stages of production are located across different countries. Companies attempt to optimise their operations by locating various stages of production across different locations."
      },
      {
        "term": "Globalisation",
        "definition": "the growing integration and interdependence of people’s lives in a complex process with economic, social (cultural), political and environmental components."
      },
      {
        "term": "Greenfield site",
        "definition": "land not previously built on and on which new developments are proposed or constructed."
      },
      {
        "term": "Import substitution",
        "definition": "promotion and development of industries within a country aimed at reducing manufacturing imports."
      },
      {
        "term": "Interdependence",
        "definition": "interrelationships between ACs, EDCs and LIDCs through trade, FDI, foreign aid and migration."
      },
      {
        "term": "Millennium Development Goals",
        "definition": "targets set by the UN in 2000 to improve people’s lives in areas such as child mortality, gender equality, poverty and hunger."
      },
      {
        "term": "New International Division of Labour",
        "definition": "reorganisation of production at the global scale, as a result of deindustrialisation in advanced countries and the global spread of MNCs. This has produced an overall pattern of higher-paid managerial jobs in ACs and lower-paid labouring jobs in LIDCs."
      },
      {
        "term": "Outsourcing",
        "definition": "cost saving strategy where a company that has comparative advantage provides goods or services for another company even though they could be produced in-house."
      },
      {
        "term": "Quota sampling",
        "definition": "a type of sampling method that pre-selects a numerical target of samples based on criteria such as age, residence, economic status etc. of respondents."
      },
      {
        "term": "Single market",
        "definition": "an economic union of countries trading with each other without any internal borders or tariffs."
      },
      {
        "term": "Terms of trade",
        "definition": "value of a country’s exports relative to that of its imports. This is measured as: average price of exports ÷ average price of imports × 100. If export prices rise relative to import prices, there is improvement in a country’s terms of trade"
      },
      {
        "term": "Trade liberalisation",
        "definition": "the process of making international trade free from barriers such as taxes on imports. The WTO has been instrumental in promoting free trade between member countries and has therefore played an important role in economic globalisation and the expansion of world trade."
      }
    ]
  },
  {
    "name": "Global Migration",
    "emoji": "✈️",
    "color": "#ec4899",
    "cards": [
      {
        "term": "Asylum seeker",
        "definition": "a person who seeks entry to another country by claiming to be a refugee."
      },
      {
        "term": "Balance of payments",
        "definition": "difference between a country’s inflows and outflows of money, including all transactions with the rest of the world for goods and services, flows of FDI and migrant remittances, over a period of time."
      },
      {
        "term": "Diaspora",
        "definition": "the spread of an ethnic or national group from their homeland, e.g. Jews from Israel or Kurds from Kurdistan."
      },
      {
        "term": "Economic migrant",
        "definition": "a person who moves from another country, region or place, involving a permanent or semi-permanent change of residence, to improve their standard of living or job opportunities."
      },
      {
        "term": "Emigration",
        "definition": "out-migration of people from a country, which involves permanent change of residence."
      },
      {
        "term": "Granular disintegration",
        "definition": "the breakdown of rocks by weathering into coarse, granular particles."
      },
      {
        "term": "Immigration",
        "definition": "in-migration of people into a country, which involves a permanent change of residence."
      },
      {
        "term": "Indigenous",
        "definition": "something that originates naturally from a particular location."
      },
      {
        "term": "International migrant stock",
        "definition": "the number of people born in a country other than that in which they live. This also includes refugees."
      },
      {
        "term": "Intervening obstacles",
        "definition": "physical, economic, social and political factors which may disrupt or terminate a migration at any point between origin and destination."
      },
      {
        "term": "Migrant remittances",
        "definition": "money transferred from one country to another, sent home by migrants to their family, friends and community."
      },
      {
        "term": "Net migration",
        "definition": "difference between the number of people moving permanently into an area and out of that area."
      },
      {
        "term": "Pull factors",
        "definition": "positive attributes of a place or destination which attract migrants."
      },
      {
        "term": "Push factors",
        "definition": "negative attributes of a migrant’s place of origin which force a migrant to leave."
      },
      {
        "term": "Refugee",
        "definition": "a person who has moved outside the country of his/her nationality or usual domicile because of genuine fear of persecution or death."
      }
    ]
  },
  {
    "name": "Human Rights",
    "emoji": "⚖️",
    "color": "#6366f1",
    "cards": [
      {
        "term": "Advanced countries (ACs)",
        "definition": "countries that share a number of important economic characteristics, including well-developed financial markets, high degrees of financial intermediation and diversified economic structures with rapidly growing service sectors."
      },
      {
        "term": "Alkaloid",
        "definition": "a naturally occurring chemical compound. The active ingredient in many medicinal drugs, e.g. morphine."
      },
      {
        "term": "Biodiversity",
        "definition": "the number of different plant, animal, fungi etc. species in a given area."
      },
      {
        "term": "Civil society",
        "definition": "NGOs and other organisations that are independent of governments, working voluntarily, either individually or collectively, in support of citizens and communities throughout the world."
      },
      {
        "term": "Cumuliform cloud",
        "definition": "a cloud formed by convection with a rounded-top, lumpy appearance and flat base."
      },
      {
        "term": "Dew",
        "definition": "deposits of moisture on the ground and vegetation due to condensation caused by radiative cooling, most often at night."
      },
      {
        "term": "Dispersion",
        "definition": "the distribution of values in a data set around a central value."
      },
      {
        "term": "Dyke",
        "definition": "a vertical or near vertical minor intrusion of magma through surrounding older rocks."
      },
      {
        "term": "Dynamic equilibrium",
        "definition": "a system displaying unrepeated average states through time."
      },
      {
        "term": "Equinox",
        "definition": "the dates when the Sun is overhead at the Equator (21 March and 21 September) and when the length of day and night are the same everywhere on the planet."
      },
      {
        "term": "Fog",
        "definition": "cloud at ground level caused by radiative cooling and advection."
      },
      {
        "term": "Glycosides",
        "definition": "a compound formed from sugar and another compound. Many medicinal drugs are glycosides derived from plants."
      },
      {
        "term": "Human rights norms",
        "definition": "established customary behaviour based on moral principles and ways of living inculcated into the culture of a country or area over a long period of time."
      },
      {
        "term": "Human rights",
        "definition": "basic rights and freedoms inherent to all human beings, to which all people are entitled without discrimination."
      },
      {
        "term": "Humanitarian intervention",
        "definition": "action taken (often by a third-party country or multilateral agency like the UN) in a sovereign state to protect people at risk from war, famine, flood, genocide etc."
      },
      {
        "term": "International community",
        "definition": "all countries whose identity and sovereignty are recognised under the auspices of the UN, plus other international organisations that choose to participate in global discussions and decision-making and which act collectively to resolve humanitarian issues."
      },
      {
        "term": "Intervention",
        "definition": "actions of a state, group of states or international organisations in a foreign territory to end gross violations of human rights. This includes military force, economic sanctions and the assistance of NGOs."
      },
      {
        "term": "Levées",
        "definition": "ridges of coarse deposits found alongside stream channels and elevated above the floodplain."
      },
      {
        "term": "Low-income developing countries",
        "definition": "countries that are eligible for financial support from the IMF through the Poverty Reduction and Growth Trust."
      },
      {
        "term": "Malnutrition",
        "definition": "shortages of proteins and essential vitamins caused by an unbalanced diet."
      },
      {
        "term": "Normal frequency curve",
        "definition": "a symmetrical, bell-shaped frequency curve where most values cluster around the mean."
      },
      {
        "term": "Norms",
        "definition": "moral principles, customs and ways of living that are universally accepted as standard behaviour."
      },
      {
        "term": "Photoperiod",
        "definition": "length of day, i.e. from sunrise to sunset."
      },
      {
        "term": "Quadrat sampling",
        "definition": "a type of spatial sampling employing squares as sampling units. In fieldwork quadrats are often metre-square frames."
      },
      {
        "term": "Responsibility to Protect",
        "definition": "individual states have the primary responsibility to protect their populations from genocide, war crimes, crimes against humanity and ethnic cleansing."
      },
      {
        "term": "Sill",
        "definition": "a minor, approximately horizontal, intrusion of magma into surrounding older rocks."
      },
      {
        "term": "Social inequality",
        "definition": "the unequal distribution of factors such as income, education or health across a population."
      },
      {
        "term": "Talik",
        "definition": "unfrozen ground."
      },
      {
        "term": "Throughfall",
        "definition": "rainfall, initially intercepted by vegetation, which drips to the ground."
      },
      {
        "term": "Treaty",
        "definition": "formally concluded and ratified agreement between states."
      },
      {
        "term": "Tundra",
        "definition": "treeless region in the sub-Arctic and in high mountains which has a short growing season and severe winter temperatures."
      },
      {
        "term": "UN Global Compact",
        "definition": "initiative that invites companies to align their strategies and operations according to universal principles on human rights, labour, environment and anti-corruption, and to take actions that advance societal goals."
      },
      {
        "term": "Undernutrition",
        "definition": "too little food intake to maintain body weight."
      }
    ]
  },
  {
    "name": "Power and Borders",
    "emoji": "🏛️",
    "color": "#14b8a6",
    "cards": [
      {
        "term": "Cyber conflict",
        "definition": "use of the internet, cellular technologies and space-based communications for malevolent and/or destructive purposes in order to change or modify political, military and economic interactions between entities such as states, corporations and individuals."
      },
      {
        "term": "Geopolitics",
        "definition": "term used in the early twentieth century in the ‘Heartland’ work of Sir Halford Mackinder, referring to ways in which geographical factors were central in shaping international politics."
      },
      {
        "term": "Hypothesis",
        "definition": "a statement whose validity can be tested using scientific methodology."
      },
      {
        "term": "Independence",
        "definition": "a situation in which the people of a country exercise selfgovernment and sovereignty over their state territory having gained political freedom from outside control."
      },
      {
        "term": "International border",
        "definition": "geographical boundary of a sovereign state, defined and recognised by international law, and identified on the political map of the world."
      },
      {
        "term": "International law",
        "definition": "body of law that governs international relations between states or nations. This provides the framework for the obligations of states to be maintained."
      },
      {
        "term": "International treaties",
        "definition": "international agreements concluded between states, in written form and governed by international law."
      },
      {
        "term": "Multinational corporation",
        "definition": "a firm with the power to co-ordinate and control operations in several countries."
      },
      {
        "term": "Nation building",
        "definition": "processes by which a state government promotes nationality, for example through its education system or the media."
      },
      {
        "term": "Nation",
        "definition": "large group of people with strong bonds of identity, united by shared descent, history, traditions, culture and language."
      },
      {
        "term": "Nation-state",
        "definition": "a nation which has its own independent state; the boundaries of the state coincide with the area inhabited by the nation."
      },
      {
        "term": "Secession",
        "definition": "transfer of part of a state’s area and population to another state."
      },
      {
        "term": "Self-determination",
        "definition": "right of a group with a distinctive territorial identity to freely determine its political status and freely pursue its economic, social and cultural development."
      },
      {
        "term": "Separatism",
        "definition": "claims for, or practice of, separation of a group of people from a larger state on the basis of their ethnicity or unified national culture, traditions, religion and language."
      },
      {
        "term": "Sovereignty",
        "definition": "the absolute authority that independent states exercise in the government of the land and peoples in their territory."
      },
      {
        "term": "State apparatus",
        "definition": "set of state institutions and organisations through which state power is exercised; these include legal mechanisms, administrative organisations, police and armed forces, and health, education and welfare services."
      },
      {
        "term": "State",
        "definition": "area of land, of an independent country, with well-defined boundaries, within which there is a politically organised body of people under a single government."
      },
      {
        "term": "Superpower",
        "definition": "states with a dominant position in the international system capable of exerting their power (economic, cultural, political) globally."
      },
      {
        "term": "Territorial integrity",
        "definition": "principle that the defined territory of a state, over which it has exclusive and legitimate control, is inviolable. This is enshrined in the Charter of the UN and an important part of international law."
      },
      {
        "term": "Territory",
        "definition": "extent of land under the jurisdiction of a sovereign state."
      },
      {
        "term": "Transnational corporation",
        "definition": "very large company with factories and offices in more than one country, which markets products and services worldwide."
      },
      {
        "term": "Westphalian model",
        "definition": "The Peace of Westphalia (1648) marked the formal recognition of states as sovereign and independent political entities; it established the principle of sovereign equality of states, forming the basis of international law that governs the global political system today."
      }
    ]
  },
  {
    "name": "Climate Change",
    "emoji": "🌡️",
    "color": "#f97316",
    "cards": [
      {
        "term": "Adiabatic expansion",
        "definition": "the expansion of a parcel of air due to a decrease in pressure. Expansion causes cooling."
      },
      {
        "term": "Advection",
        "definition": "the horizontal movement of an air mass which often results in either heating or cooling."
      },
      {
        "term": "Albedo",
        "definition": "proportion of sunlight reflected from a surface."
      },
      {
        "term": "Cap and trade",
        "definition": "an internal scheme to control carbon emissions. A marketbased solution to climate change where polluters either cut their emissions or incur extra costs by buying tradable carbon credits."
      },
      {
        "term": "Carbon credits",
        "definition": "allowances that permit given levels of CO2 emissions by businesses. Excess emissions must by covered by trading carbon credits."
      },
      {
        "term": "Cold seeps",
        "definition": "low temperature mineral-rich springs flowing from the ocean floor."
      },
      {
        "term": "Convection",
        "definition": "the motion of a gas or liquid which when warmed rises until eventually it cools and sinks in a continuous circulation."
      },
      {
        "term": "Dew point",
        "definition": "the critical temperature at which condensation occurs."
      },
      {
        "term": "Greenhouse gas",
        "definition": "gases in the atmosphere such as CO2 , CH4 and water vapour which absorb long-wave terrestrial radiation."
      },
      {
        "term": "Heat balance",
        "definition": "the difference between inputs of solar energy to the Earth– atmosphere system and energy outputs from terrestrial radiation and gases in the atmosphere. Currently inputs exceed outputs and the global climate responds by warming."
      },
      {
        "term": "Heat island",
        "definition": "elevated temperatures found in large urban areas caused by emissions of heat, low albedo of urban surfaces, air pollution etc."
      },
      {
        "term": "IPCC",
        "definition": "Intergovernmental Panel on Climate Change is a body made up of hundreds of scientists from around the world who research and regularly report on climate change."
      },
      {
        "term": "Interval scale",
        "definition": "a numerical scale in which zero is arbitrary (e.g. temperature)."
      },
      {
        "term": "Island arc",
        "definition": "chain of volcanic islands formed along a subduction zone."
      },
      {
        "term": "Microclimate",
        "definition": "local climates whose main characteristics are determined by topography and land use."
      },
      {
        "term": "Non-renewable resources",
        "definition": "resources that are finite on human timescales. Once used they cannot be replaced, e.g. fossil fuels and minerals."
      },
      {
        "term": "Renewable resource",
        "definition": "a resource capable of regeneration on human timescales, such as most forests and fish stocks."
      },
      {
        "term": "Solar output",
        "definition": "the amount of radiant energy emitted by the Sun and intercepted by the Earth. Most solar output is short-wave."
      },
      {
        "term": "Temperature inversion",
        "definition": "an increase in temperature with height, i.e. the reverse of the normal temperature profile."
      },
      {
        "term": "Tipping point",
        "definition": "the critical point or threshold which if passed leads to irreversible change, e.g. the moment when summer sea ice in the Arctic disappears, which would alter the Atlantic thermohaline circulation."
      }
    ]
  },
  {
    "name": "Disease Dilemmas",
    "emoji": "🦠",
    "color": "#a855f7",
    "cards": [
      {
        "term": "Communicable disease",
        "definition": "an infectious disease that spreads from host to host."
      },
      {
        "term": "Contagious diffusion",
        "definition": "the process by which a disease spreads through direct contact with a carrier."
      },
      {
        "term": "Contagious disease",
        "definition": "a disease spread by contact or indirect contact between people, e.g. Ebola."
      },
      {
        "term": "Diffusion",
        "definition": "the process by which a disease spreads outwards from its geographical source."
      },
      {
        "term": "Epidemic",
        "definition": "a disease outbreak that spreads quickly through the population of a geographical area."
      },
      {
        "term": "Epidemiology",
        "definition": "the study of how and why diseases occur in different groups of people."
      },
      {
        "term": "Expansion diffusion",
        "definition": "the process by which a disease spreads outwards into a new area while carriers in the source area remain infected."
      },
      {
        "term": "Hierarchical diffusion",
        "definition": "the process by which a disease spreads through a structured order of places, e.g. from major cities to towns and villages."
      },
      {
        "term": "Host",
        "definition": "an animal that sustains a reservoir for pathogens such as bacteria and viruses, e.g. bats and rabies."
      },
      {
        "term": "Infant mortality rate",
        "definition": "annual number of deaths of infants under one year old per 1000 live births."
      },
      {
        "term": "Infectious disease",
        "definition": "a disease spread by parasites, bacteria, viruses, fungi etc."
      },
      {
        "term": "Maternal mortality rate",
        "definition": "annual number of deaths of women while pregnant, or within 42 days of termination of pregnancy, from any cause related to or aggravated by the pregnancy or its management. Measured per 100,000 live births."
      },
      {
        "term": "Non-communicable disease",
        "definition": "a disease that cannot be spread between people, e.g. diabetes."
      },
      {
        "term": "Non-infectious disease",
        "definition": "a non-communicable disease due to age, genetic defects, e.g. cancer."
      },
      {
        "term": "Nutrition spectrum",
        "definition": "a scale of diet and nutrition that marks critical thresholds in human health, e.g. starvation and obesity."
      },
      {
        "term": "Pandemic",
        "definition": "an epidemic which spreads worldwide, e.g. Spanish flu"
      },
      {
        "term": "Relocation diffusion",
        "definition": "the process by which a disease spreads into a new area and evacuates its area of origin."
      },
      {
        "term": "Vector",
        "definition": "a carrier, e.g. mosquitoes, that transmits an infectious disease, e.g. malaria."
      }
    ]
  },
  {
    "name": "Exploring Oceans",
    "emoji": "🐋",
    "color": "#0ea5e9",
    "cards": [
      {
        "term": "Abyssal plain",
        "definition": "the deepest part of the ocean covering vast areas of ocean floor. Submarine mountain chains and trenches interrupt the relatively flat plain."
      },
      {
        "term": "Agro-ecosystems",
        "definition": "an ecosystem that is managed to produce food."
      },
      {
        "term": "Anthropocene",
        "definition": "the current geological period where humankind is the main driver of environmental change."
      },
      {
        "term": "Biopiracy",
        "definition": "the exploitation of medicinal drugs from wild environments by pharmaceutical companies with little or no benefit to indigenous people."
      },
      {
        "term": "Continental rise",
        "definition": "gently sloping ocean floor between the continental slope and the abyssal plain."
      },
      {
        "term": "Continental slope",
        "definition": "where the continental shelf becomes steeper as it descends to the deep ocean."
      },
      {
        "term": "Coral bleaching",
        "definition": "the loss of algae (which give coral its colours) from coral due to an increase in water temperature."
      },
      {
        "term": "Downwelling",
        "definition": "the sinking of dense, salty (or cold) water in the oceans."
      },
      {
        "term": "Flow resources",
        "definition": "renewable natural resources that can be used and are replenished at the same time, e.g. solar, wind and tidal energy."
      },
      {
        "term": "Guyot",
        "definition": "flat-topped seamount with its summit well below the ocean surface. Many appear to have volcanic origin, having formed at midocean ridges."
      },
      {
        "term": "Gyre",
        "definition": "a very large circulation of surface water between 20° and 30° N and S in the oceans."
      },
      {
        "term": "Halocline",
        "definition": "the depth in the ocean where there is a rapid change in salinity of sea water."
      },
      {
        "term": "Krill",
        "definition": "small, shrimp-like crustacea that feed on plankton and are then themselves a major source of food for other organisms"
      },
      {
        "term": "Marine snow",
        "definition": "the remains of organisms living in the ocean’s upper layer which falls to deeper water. It represents an important transfer of energy from the photic zone to the ocean depths."
      },
      {
        "term": "Mid-ocean ridge",
        "definition": "the boundary between two diverging oceanic plates. It consists of two parallel chains of submarine mountains separated by a graben, and offset in places by transform faults."
      },
      {
        "term": "Natural capital",
        "definition": "natural resources with a value to humans."
      },
      {
        "term": "Natural income",
        "definition": "annual yield from natural resources such as timber, fish, plants and mineral ores."
      },
      {
        "term": "Non-point source pollution",
        "definition": "release of pollutants from numerous, dispersed sources, e.g. gases from vehicles or ships or chemical run-off from agriculture."
      },
      {
        "term": "Ocean conveyor belt",
        "definition": "see thermohaline circulation."
      },
      {
        "term": "Ocean currents",
        "definition": "the large scale horizontal flow of ocean water (at the surface and at depth) driven by planetary winds and contrasts in water temperature and salinity."
      },
      {
        "term": "Ocean trench",
        "definition": "narrow deep depression on the ocean floor adjacent to a subduction zone."
      },
      {
        "term": "Pelagic",
        "definition": "the environment of the open ocean but not including the ocean floor."
      },
      {
        "term": "Phytoplankton",
        "definition": "tiny photosynthesising marine organisms in the surface waters of the oceans."
      },
      {
        "term": "Point source pollution",
        "definition": "release of pollutants from a single clearly identifiable source, e.g. a factory chimney or sewage pipe."
      },
      {
        "term": "Pollution",
        "definition": "the process by which human activity contaminates the environment, with adverse effects on the quality of air, water etc. and the health of people and other organisms."
      },
      {
        "term": "Salinity",
        "definition": "level of concentration of dissolved salts in water expressed as parts per thousand."
      },
      {
        "term": "Sea-floor spreading",
        "definition": "lateral movement of new oceanic crust away from a mid-ocean ridge (constructive plate boundary). A key process in the theory of continental drift."
      },
      {
        "term": "Seamount",
        "definition": "a volcanic peak rising steeply from the ocean floor. Some are isolated while others occur in chains extending away from a mid-ocean ridge or hot spot."
      },
      {
        "term": "Sink",
        "definition": "anything that absorbs more of a particular substance than it releases, e.g. the oceans act as a sink for CO2 ."
      },
      {
        "term": "Thermohaline circulation",
        "definition": "the global pattern of ocean currents (surface and sub-surface) driven primarily by differences in temperature and salinity."
      },
      {
        "term": "Tragedy of the commons",
        "definition": "a metaphor illustrating how individuals can overexploit a resource in common ownership (e.g. the atmosphere, fish in the deep ocean), leading to its depletion or degradation."
      },
      {
        "term": "Trench",
        "definition": "a narrow, deep depression on the ocean floor, adjacent to a subduction zone."
      }
    ]
  },
  {
    "name": "Future of Food",
    "emoji": "🌾",
    "color": "#84cc16",
    "cards": [
      {
        "term": "Agribusiness",
        "definition": "a large scale farming practice run on business lines."
      },
      {
        "term": "Farmers’ markets",
        "definition": "a market where local farmers sell their produce directly to the consumer."
      },
      {
        "term": "Food chain",
        "definition": "a series of organisms through which food energy moves before it is completely expended."
      },
      {
        "term": "Food miles",
        "definition": "the distance food items travel from farmer to consumer."
      },
      {
        "term": "Food security",
        "definition": "when there is access to sufficient food for individuals to lead a healthy life."
      },
      {
        "term": "Food web",
        "definition": "a series of food chains linked together across different trophic levels within an ecosystem."
      },
      {
        "term": "Genetically modified crops",
        "definition": "genetic engineering applied to food crops to increase production, quality, and resistance to disease or drought."
      },
      {
        "term": "Land degradation",
        "definition": "the deterioration of land suitability for agriculture by soil erosion, desertification and salinisation."
      },
      {
        "term": "Land grabbing",
        "definition": "a process whereby rich countries acquire land in poorer countries."
      },
      {
        "term": "Loam",
        "definition": "soil with a balanced textural composition of sand, silt and clay."
      },
      {
        "term": "Monoculture",
        "definition": "the cultivation of a single crop."
      },
      {
        "term": "Overcultivation",
        "definition": "cultivation which, given environmental resources, is not sustainable in the long term and is evidenced by declining yields, soil exhaustion and soil erosion."
      },
      {
        "term": "Overnutrition",
        "definition": "prolonged excessive food intake, which increases body weight."
      },
      {
        "term": "Permaculture",
        "definition": "sustainable, high yielding and intensive agriculture based on natural processes."
      },
      {
        "term": "Polyculture",
        "definition": "the cultivation of several different crops, often simultaneously in the same field."
      },
      {
        "term": "Primary sector",
        "definition": "economic activities that produce food, fuel and raw materials, e.g. agriculture, forestry, fishing, mining, quarrying and water supplies."
      },
      {
        "term": "Salinisation",
        "definition": "the accumulation of salts in soil."
      },
      {
        "term": "Shifting cultivation",
        "definition": "a traditional method of cultivation in tropical forests which involves rotation of land rather than rotation of crops."
      },
      {
        "term": "often as a thin film",
        "definition": "when the soil is saturated."
      }
    ]
  },
  {
    "name": "Hazardous Earth",
    "emoji": "🌋",
    "color": "#e11d48",
    "cards": [
      {
        "term": "Asthenosphere",
        "definition": "the layer in the Earth’s mantle below the lithosphere. The high temperatures cause the rocks to soften and become viscous meaning that they can easily deform."
      },
      {
        "term": "Benioff zone",
        "definition": "boundary between a subducting ocean plate and the overriding continental plate at a destructive boundary."
      },
      {
        "term": "Black smoker",
        "definition": "hydrothermal vent on the ocean floor at constructive or destructive plate boundaries. The water carries high amounts of metal sulphides."
      },
      {
        "term": "Caldera",
        "definition": "large-scale volcanic crater formed as a result of an explosive eruption which emptied the magma chamber causing the volcano sides to subside."
      },
      {
        "term": "Caprock",
        "definition": "a resistant layer of rock often on a plateau-like surface, which protects older weaker rocks from denudation."
      },
      {
        "term": "Composite cone volcano",
        "definition": "see strato-volcano."
      },
      {
        "term": "Cryptobiotic crust",
        "definition": "communities of cyanobacteria, fungi, lichens and mosses which form a fragile surface layer in drylands."
      },
      {
        "term": "Disaster",
        "definition": "natural hazards (e.g. earthquakes, floods) that result in major loss of life, injury and economic damage."
      },
      {
        "term": "Earthquake focus",
        "definition": "point in the crust where rocks fracture, releasing energy."
      },
      {
        "term": "Effusive eruption",
        "definition": "a gentle free-flowing basic eruption of lava, e.g. basalt."
      },
      {
        "term": "Epicentre",
        "definition": "point at the surface directly above an earthquake focus."
      },
      {
        "term": "Explosive eruption",
        "definition": "a violent eruption owing to the build-up of pressure within a volcano, due to viscous magma (e.g. andesite) preventing the escape of gases (especially steam)."
      },
      {
        "term": "Friedmann’s core-periphery model",
        "definition": "four-stage model of spatial economic development where development is initially concentrated in the economic core and eventually diffuses to the periphery."
      },
      {
        "term": "Graben",
        "definition": "the downfaulted section of a rift valley."
      },
      {
        "term": "Hot spot",
        "definition": "an area of intense volcanic activity where a mantle plume reaches the Earth’s surface causing eruptions. Located away from plate boundaries, e.g. Hawaii."
      },
      {
        "term": "Isostatic changes",
        "definition": "changes in the absolute level of the land. They are localised and result from either tectonic activity or the addition or removal of weight from the land."
      },
      {
        "term": "Isostatic",
        "definition": "relating to vertical movements of the Earth’s crust."
      },
      {
        "term": "Lithosphere",
        "definition": "layer in the Earth’s mantle above the asthenosphere together with the crust which is divided into a series of tectonic plates. The lithosphere is rigid and is moved by the flows of semi-molten rock in the asthenosphere."
      },
      {
        "term": "Median",
        "definition": "the middle value in a data set where values are ranked in order of magnitude."
      },
      {
        "term": "Modified Mercalli scale",
        "definition": "a subjective measure of earthquake intensity using factors such as what was felt by people and the type and scale of damage to buildings and infrastructure."
      },
      {
        "term": "Moho",
        "definition": "short for Mohoroviĉić discontinuity, the boundary between the crust and mantle. It lies at c 35 km beneath the continents and 10–15 km beneath the ocean floor."
      },
      {
        "term": "Moment Magnitude Scale (Mw)",
        "definition": "a measure of earthquake strength using the amount of physical movement caused by a quake."
      },
      {
        "term": "Phreatic",
        "definition": "an eruption of steam from a volcano caused when groundwater meets magma."
      },
      {
        "term": "Pillow lava",
        "definition": "rounded mounds of lava erupted along mid-oceanic ridges, which cool rapidly on contact with sea water."
      },
      {
        "term": "Pluton",
        "definition": "mass of igneous rock injected into overlying rock deep in the crust."
      },
      {
        "term": "Quartile",
        "definition": "a quarter part of a data set ranked in order of size or magnitude."
      },
      {
        "term": "Resilience",
        "definition": "the degree to which an area can recover from the impacts of a hazard. The level of vulnerability affects a community’s resilience."
      },
      {
        "term": "Richter scale",
        "definition": "system measuring the magnitude of an earthquake by using the energy released when overstrained rocks suddenly fracture. Uses a logarithmic scale, with just over 9.0 being the largest quake measured to date."
      },
      {
        "term": "Rift valley",
        "definition": "a valley formed by downfaulting between parallel faults. Examples are found on land (East African Rift Valley) and along midoceanic ridges."
      },
      {
        "term": "Seismic",
        "definition": "relates to earthquakes or other movements of the Earth and its crust."
      },
      {
        "term": "Shield volcano",
        "definition": "a volcano with a broad base and gently sloping sides. It forms from the effusive eruption of fluid basalt lava."
      },
      {
        "term": "Storm surge",
        "definition": "elevated sea surface near the coast most often caused by extreme storms (e.g. hurricanes) and tsunamis."
      },
      {
        "term": "Strato-volcano",
        "definition": "a steep-sided volcano made up of layers of lava and ash emitted during explosive eruptions. Also known as a composite cone."
      },
      {
        "term": "Subduction",
        "definition": "the tectonic process found at convergent plate margins where an oceanic plate descends into the Earth’s mantle and is destroyed."
      },
      {
        "term": "Super-volcano",
        "definition": "a volcano that erupts more than 1000 km3 of material in a single eruption event."
      },
      {
        "term": "Tectonic plate",
        "definition": "a large slab of the Earth’s lithosphere and crust."
      },
      {
        "term": "Transform faults",
        "definition": "large-scale faults in the crust at right angles to a midocean ridge, which range from a few tens of kilometres to several hundred. Earthquakes occur along their lengths as they slip."
      },
      {
        "term": "Upper mantle",
        "definition": "the layer of the Earth’s interior extending 75–200 km below the surface (also known as the asthenosphere). The upper mantle is able to flow under pressure."
      },
      {
        "term": "Venture capital",
        "definition": "investment in small or medium sized enterprises involving relatively high levels of risk but with the potential for significant gains. The enterprises are those not yet secure enough to raise their own finance."
      },
      {
        "term": "Viscosity",
        "definition": "an indication of how well a substance flows. Acid lavas have high viscosity as they are sticky and do not flow far from a vent."
      },
      {
        "term": "Volcanic Explosivity Index (VEI)",
        "definition": "combines magnitude and intensity of an eruption on a logarithmic scale, 0 = least explosive, 8 = most explosive."
      },
      {
        "term": "Vulnerability",
        "definition": "measure of the level of risk an area faces from the impacts of a hazard. Levels of vulnerability are influenced by physical, social, economic and political factors."
      }
    ]
  },
  {
    "name": "Geographical Skills / General",
    "emoji": "📐",
    "color": "#64748b",
    "cards": [
      {
        "term": "Archipelago",
        "definition": "a closely grouped cluster of islands."
      },
      {
        "term": "Aspect",
        "definition": "the direction a slope faces."
      },
      {
        "term": "Bioluminescence",
        "definition": "the ability of some organisms to generate light from their bodies."
      },
      {
        "term": "Canopy",
        "definition": "the uppermost layer of treetops and branches in a forest or woodland ecosystem."
      },
      {
        "term": "Capital intensive",
        "definition": "high levels of investment in manufacturing in plant and machinery per employee."
      },
      {
        "term": "Capital",
        "definition": "accumulated wealth of any kind used in producing more wealth; this may include tangibles such as machinery, buildings, land, and intangibles such as money, investment finance, company stocks."
      },
      {
        "term": "Central tendency",
        "definition": "the middle value in a data set, e.g. mean, median, mode."
      },
      {
        "term": "Cumulative frequency curve",
        "definition": "a frequency curve that shows the proportion of data above (or below) a specific threshold (e.g. zero)."
      },
      {
        "term": "Debris flow",
        "definition": "mass movements of coarse boulders, mud, timber etc. in channels following periods of torrential rainfall."
      },
      {
        "term": "Distributaries",
        "definition": "small branching stream channels that flow away from a main stream or river."
      },
      {
        "term": "Equilibrium",
        "definition": "a long-term balance between inputs and outputs in a system."
      },
      {
        "term": "Ferrous minerals",
        "definition": "minerals with a significant iron content, e.g. iron ores."
      },
      {
        "term": "Flow map",
        "definition": "a numerical map that represents the movement of people, goods or information by lines where widths are proportional to flows."
      },
      {
        "term": "Forced labour",
        "definition": "when people are coerced to work through use of violence or intimidation, or by more subtle means of detention such as retention of identity papers."
      },
      {
        "term": "Frequency distribution curve",
        "definition": "a type of line graph showing the distribution of values in a data set by classes or categories."
      },
      {
        "term": "Geographic Information Systems (GIS)",
        "definition": "integrated computer tools for gathering, storing, processing and analysing geographical data that can be plotted on maps."
      },
      {
        "term": "Geomorphic",
        "definition": "relating to the formation and shaping of landforms and landscapes by natural processes."
      },
      {
        "term": "Gini coefficient",
        "definition": "a statistical measure of the degree of similarity between two sets of percentage data."
      },
      {
        "term": "Globesity",
        "definition": "the widespread increase in excess average weight due to poor diet and lack of exercise."
      },
      {
        "term": "Household",
        "definition": "one person living alone, or a group of people (not necessarily related) living at the same address."
      },
      {
        "term": "Interpolation",
        "definition": "the insertion of isolines (e.g. contours) to a point pattern which assumes that the gradient of change between fixed points is constant."
      },
      {
        "term": "Landscape",
        "definition": "the visible features (landforms) of an area of the Earth’s surface."
      },
      {
        "term": "Lithology",
        "definition": "the chemical and physical characteristics of rock types."
      },
      {
        "term": "Mode",
        "definition": "the class of values that occurs most frequently in a data set."
      },
      {
        "term": "Nominal",
        "definition": "when data is classified into categories."
      },
      {
        "term": "Non-ferrous minerals",
        "definition": "minerals that do not contain iron, e.g. manganese and copper."
      },
      {
        "term": "Ordinal scale",
        "definition": "a numerical scale where values are represented by their rank order in a data set."
      },
      {
        "term": "Pinch points",
        "definition": "a point where congestion is likely to occur."
      },
      {
        "term": "Pluvial",
        "definition": "a climatic period associated with higher rainfall and more humid conditions in the recent geological past."
      },
      {
        "term": "Quantitative data",
        "definition": "information that can be measured in terms of numbers and/or frequencies."
      },
      {
        "term": "Rain shadow",
        "definition": "an area of below average precipitation situated in the lee of an upland."
      },
      {
        "term": "Random sampling",
        "definition": "a type of sampling that uses random numbers and where every individual in a population has an equal chance of inclusion in the sample."
      },
      {
        "term": "Ratio scale",
        "definition": "a numerical scale that has a meaningful zero value."
      },
      {
        "term": "Secondary data",
        "definition": "data which have been processed/and or published, e.g. books, articles, blogs etc."
      },
      {
        "term": "Skewness",
        "definition": "the extent to which a frequency curve deviates from a normal, symmetrical pattern."
      },
      {
        "term": "Standard deviation",
        "definition": "the most mathematical measurement of dispersion in a data set (i.e. the root mean square deviation)."
      },
      {
        "term": "Standard error of the mean",
        "definition": "the standard deviation of a sampling distribution."
      },
      {
        "term": "Statistical significance",
        "definition": "the likelihood that the outcome from a sample survey is not due to chance. It is normally set at 95% probability."
      },
      {
        "term": "Stratified sampling",
        "definition": "a sample drawn from a heterogeneous statistical population divided into groups."
      },
      {
        "term": "Stratiform clouds",
        "definition": "clouds lying in a level sheet."
      },
      {
        "term": "Structure",
        "definition": "the physical characteristics of rocks, including their jointing, bedding, faulting, angle of dip etc."
      },
      {
        "term": "Symbiosis",
        "definition": "the close association between two or more organisms of different species, often but not necessarily benefiting each member."
      },
      {
        "term": "Syncline",
        "definition": "a downfolded, basin-like geological structure."
      },
      {
        "term": "System",
        "definition": "a group of objects and the relationships between them."
      },
      {
        "term": "Tree line",
        "definition": "The latitudinal and altitudinal limit of tree growth."
      },
      {
        "term": "Turbidity",
        "definition": "the cloudiness of a fluid caused by large numbers of individual particles in suspension."
      },
      {
        "term": "‘Just in time’ (JIT)",
        "definition": "a system companies use to increase efficiency and decrease storage costs and waste. Products are delivered immediately (just) as they are required."
      }
    ]
  }
];
