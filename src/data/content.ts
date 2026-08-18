// ============================================================
// Codename Hi-Five × Kura Homes — Centralized Content Data
// Exact 1:1 parity with SpeedHousing Sanarelli information architecture & data
// ============================================================

export const ASSETS = {
  logos: {
    kuraHomes: '/logos/kura-homes-logo-2.png',
    hiFive: '/logos/hifive-logo.jpeg',
  },
  videos: {
    hero: '/videos/hero-video.mp4',
  },
  images: {
    heroBg: 'https://speedhousing.in/wp-content/uploads/2026/04/new_bird_view_04_night-speed-sanarelli-by-speed-housing-1024x576.jpg',
    aerialNight: 'https://speedhousing.in/wp-content/uploads/2026/04/new_bird_view_04_night-speed-sanarelli-by-speed-housing-1024x576.jpg',
    clubhouse: 'https://speedhousing.in/wp-content/uploads/2026/04/new_bird_view_04_night-speed-sanarelli-by-speed-housing-1024x576.jpg',
    pool: 'https://speedhousing.in/wp-content/uploads/2026/04/new_bird_view_04_night-speed-sanarelli-by-speed-housing-1024x576.jpg',
    livingRoom: 'https://speedhousing.in/wp-content/uploads/2026/04/new_bird_view_04_night-speed-sanarelli-by-speed-housing-1024x576.jpg',
    masterBed: 'https://speedhousing.in/wp-content/uploads/2026/04/new_bird_view_04_night-speed-sanarelli-by-speed-housing-1024x576.jpg',
    masterPlan: 'https://speedhousing.in/wp-content/uploads/2026/04/new_bird_view_04_night-speed-sanarelli-by-speed-housing-1024x576.jpg',
    startingAt: '/images/starting-at.jpg',
    locationView: '/images/back-side-front-view.jpg',
  },
};

export const BRAND = {
  name: 'CODENAME HI FIVE',
  developer: 'Kura Homes',
  tagline: '55 Years of Trust',
  rera: 'P02200002810',
  hmda: 'G1/DM/2237/BP/2021',
  phone: '800 800 8946',
  phoneAlt: '800 800 8972',
  whatsapp: '918008008946',
  email: 'senareddy.kura@speedhousing.in',
  address: 'Adjacent to ORR Exit No. 5, Bowrampet Road, Dundigal, Gandimaisamma, Hyderabad, Telangana 500043',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.968607142475!2d78.3752!3d17.5568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBowrampet!5e0!3m2!1sen!2sin!4v1700000000000',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Why CODENAME HI FIVE', href: '#why' },
  { label: 'Price', href: '#price' },
  { label: 'Location', href: '#location' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Plans', href: '#plans' },
  { label: 'Progress', href: '#progress' },
];

export const HERO = {
  locationBadge: 'ORR Exit-5, Gandimaisamma, Hyderabad',
  projectName: 'CODENAME HI FIVE',
  tagline: 'by Kura Homes',
  headline: 'Looking to own your first home in a high-growth location?',
  subheadline:
    'Once you factor in rental income potential and old-regime tax benefits, the monthly outgo on a CODENAME HI FIVE 2BHK can be far lower than the rent you would pay elsewhere. See the calculator below for your specific numbers.',
  ticker: [
    '₹7,499/sq.ft',
    'Effective Cost from ~₹18K/month*',
    '25,000 sq.ft Clubhouse',
    '40+ Amenities',
    '3 Reserve Forests',
    '500+ Homes Booked',
    '90% Constructed',
    'Possession Soon',
  ],
  stats: [
    { value: '500+', label: 'Homes Booked' },
    { value: '5.3', unit: 'Acres', label: 'Total Area' },
    { value: '40+', label: 'Amenities' },
    { value: '25K', unit: 'sq.ft', label: 'Clubhouse' },
    { value: '70%', label: 'Open Space' },
    { value: '90%', label: 'Constructed' },
  ],
};

export const WHY_SECTION = {
  eyebrow: 'Why CODENAME HI FIVE',
  headline: 'Everything you need,',
  headlineHighlight: 'exactly where you need it.',
  cards: [
    {
      title: 'Prime ORR 5 Advantage',
      subtitle: "One of Hyderabad's Best-Connected Corridors",
      points: [
        '1 min from ORR Exit 5',
        '10–15 mins to IT & Pharma hubs',
        'Surrounded by 25+ top schools',
        'Near Medical Devices Park',
      ],
      icon: 'MapPin',
    },
    {
      title: 'Balanced Lifestyle',
      subtitle: 'Nature Around Your Home',
      points: [
        '3 Reserve Forests nearby',
        '70% open spaces',
        'Cleaner, greener environment',
        'Cooler microclimate year-round',
      ],
      icon: 'Trees',
    },
    {
      title: 'Premium Living',
      subtitle: 'A Club-Level Community',
      points: [
        '25,000 sq.ft Clubhouse',
        '40+ lifestyle amenities',
        'Children-focused zones',
        'Sports courts & jogging track',
      ],
      icon: 'Building2',
    },
    {
      title: 'Accessible Pricing',
      subtitle: 'Among the Most Accessibly Priced on the Ring Road',
      points: [
        'ORR 3 corridor: ₹9–10K/sq.ft',
        'ORR 6 corridor: ₹8–9K/sq.ft',
        'ORR 5 · CODENAME HI FIVE: ₹7,499/sq.ft',
        'Pricing as of May 2026 · Source: market listings',
      ],
      icon: 'TrendingUp',
    },
  ],
};

export const PRICE_CONTEXT = {
  eyebrow: 'ORR 5 Price Context',
  headline: 'ORR 5 — in an',
  headlineHighlight: 'earlier growth phase.',
  description:
    'Over the last five years, ORR 3 corridor prices have grown from around ₹4,500/sq.ft to ₹9,000–10,000/sq.ft. ORR 5 is currently in an earlier phase of that corridor\'s growth pattern. Past corridor trends are observational and do not guarantee future appreciation.',
  corridors: [
    { name: 'ORR 3 Corridor', price: '₹9,000–10,000/sq.ft', highlight: false },
    { name: 'ORR 6 Corridor', price: '₹8,000–9,000/sq.ft', highlight: false },
    {
      name: 'ORR 5 · CODENAME HI FIVE',
      price: '₹7,499/sq.ft ✦',
      highlight: true,
      subtext: 'ORR 5 is in an earlier phase of corridor growth',
    },
  ],
  footer: 'Pricing data as of May 2026, sourced from market listings. Not investment advice.',
};

export const STARTING_PRICE = {
  startingLabel: 'Starting at',
  configurations: [
    { bhk: '2 BHK', price: '₹75L', note: 'Smart Luxe Configurations' },
    { bhk: 'Duplex 3 BHK', price: '₹1.2 Cr', note: 'Penthouse & Duplex' },
  ],
  benefits: [
    'Just ₹18,000 to begin your ownership journey',
    'Comfortable EMI with multiple bank options',
    'Possession Soon / 90% Constructed',
    'Approved by HMDA & TG RERA',
    '50% appreciation in 3 years · ₹7,499/sq.ft today',
  ],
};

export const NET_OUTGO_CALCULATOR = {
  title: 'Your ₹75L Home',
  headline: 'Own a home for less',
  headlineHighlight: 'than most local rents.',
  description:
    'Once you factor in rental income potential and old-regime tax benefits, the monthly outgo on a CODENAME HI FIVE 2BHK can be far lower than the rent you\'d pay elsewhere — see the two scenarios below.',
  scenarioBHighlight: {
    label: 'Scenario B — Rent-out net outgo',
    amount: '₹18,384',
    subtext: 'EMI − ₹20K–25K rental income − ₹12K old-regime Section 24(b) benefit. Assumes opt-in to old tax regime.',
  },
  formulaBreakdown: [
    { sign: '=', label: 'Property Value', value: '₹75,00,000' },
    { sign: '→', label: 'Home Loan', value: '₹65,00,000' },
    { sign: '=', label: 'Monthly EMI', value: '₹55,384' },
    { sign: '−', label: 'Rental Income (Scenario B)', value: '₹25,000' },
    { sign: '−', label: 'Old Regime Section 24(b)', value: '₹12,000' },
    { sign: '✦', label: 'Net Outgo / Month (Scenario B)', value: '₹18,384', isTotal: true },
  ],
  defaults: {
    propertyValue: 7500000,
    loanAmount: 6500000,
    rate: 8.25,
    tenure: 20,
    rentalIncome: 25000,
    taxBenefit: 12000,
    localRent: 22000,
  },
  disclaimer:
    '* EMI at 8.25% / 20 yrs / ₹65L ≈ ₹55,384. Rental income ₹20,000–25,000/month is indicative, based on current 2BHK market in Dundigal–Gandimaisamma corridor. Old-regime Section 24(b) deduction is not available under the new (default) tax regime — opt-in required; consult a CA. Not investment advice. T&C Apply.',
  faq: {
    q: 'Why is rental income shown?',
    a: 'CODENAME HI FIVE\'s location near IT hubs & medical parks means your 2BHK can earn ₹20,000–25,000/month in rental income (indicative; based on current 2BHK market, Dundigal–Gandimaisamma corridor) while you live elsewhere — or when you upgrade to a larger home. Rental income is not guaranteed.',
  },
};

export const LOCATION_PAGE_DATA = {
  eyebrow: 'In the Spotlight — Location',
  headline: 'Where the city',
  headlineHighlight: 'breathes easy.',
  subheadline:
    'CODENAME HI FIVE is at the precise intersection of urban convenience and natural calm — a rare address where your commute is short, your schools are close, and your lungs get fresh air.',
  quickStats: [
    { value: '1 min', label: 'ORR Exit 5' },
    { value: '25+', label: 'Schools Nearby' },
    { value: '3', label: 'Reserve Forests' },
    { value: '15 min', label: 'IT Hubs' },
    { value: '50 min', label: 'Int. Airport' },
  ],
  pillars: [
    '1 min from ORR Exit 5',
    'In the heart of school zones',
    'Surrounded by 3 reserve forests',
    'Near Medical Devices Park & Pharma hubs',
  ],
  categories: [
    {
      name: 'IT & Pharma Hubs',
      items: [
        { name: 'Aurobindo', time: '10 min' },
        { name: 'Tech Mahindra Campus', time: '10 min' },
        { name: 'Jeedimetla Industries', time: '10 min' },
        { name: 'Medical Cluster Park', time: '15 min' },
        { name: 'Hetero Pharma', time: '18 min' },
        { name: 'Kandlakoya IT Park', time: '18 min' },
      ],
    },
    {
      name: 'Hospitals',
      items: [
        { name: 'Subhakara Hospital', time: '10 min' },
        { name: 'Mallareddy Hospital', time: '15 min' },
        { name: 'Usha Mullapudi', time: '20 min' },
        { name: 'Reach Hospital', time: '20 min' },
        { name: 'SLG Hospital', time: '25 min' },
        { name: 'Kims Hospital', time: '35 min' },
      ],
    },
    {
      name: 'Entertainment',
      items: [
        { name: 'Kukatpally Shopping Street', time: '20 min' },
        { name: 'Manjeera Mall', time: '25 min' },
        { name: 'Forum Mall', time: '25 min' },
        { name: 'GSM Mall', time: '25 min' },
        { name: 'In-orbit Mall', time: '30 min' },
        { name: 'IKEA', time: '35 min' },
      ],
    },
    {
      name: 'Transportation',
      items: [
        { name: 'ORR Exit-5', time: '01 min' },
        { name: 'Metro (JNTU)', time: '25 min' },
        { name: 'ORR Exit-1', time: '30 min' },
        { name: 'RGIA Int. Airport', time: '50 min' },
      ],
    },
    {
      name: 'Nature & Recreation',
      items: [
        { name: 'Ameenpur Reserve Forest', time: 'Nearby' },
        { name: 'Patancheru Reserve Forest', time: 'Nearby' },
        { name: 'Toopran Reserve Forest', time: 'Nearby' },
        { name: '70% Open Green Space', time: 'On-site' },
      ],
    },
    {
      name: 'Daily Convenience',
      items: [
        { name: 'Supermarket', time: 'On-site' },
        { name: 'ATM / Banks', time: '2 min' },
        { name: 'Petrol Station', time: '2 min' },
        { name: 'Medical / Pharmacy', time: '5 min' },
        { name: 'Police Station', time: '5 min' },
      ],
    },
  ],
  education: {
    headline: '25+ schools & colleges within your reach.',
    subheadline:
      'Your children grow up surrounded by some of Hyderabad\'s best institutions — from international schools to premier engineering colleges.',
    schools: [
      { name: 'IARE', time: '2 min' },
      { name: 'Ryan International School', time: '2 min' },
      { name: 'Sriveda School', time: '2 min' },
      { name: 'Laurus School', time: '5 min' },
      { name: 'Pragathi Model School', time: '5 min' },
      { name: 'Sri Chaitanya Academy', time: '5 min' },
      { name: 'Creek Planet School', time: '7 min' },
      { name: 'Vitalis School', time: '7 min' },
      { name: 'Oakridge International', time: '8 min' },
      { name: 'Edgemont School', time: '9 min' },
      { name: 'Sri Sloka', time: '10 min' },
      { name: 'Slate School', time: '10 min' },
      { name: 'Delhi Public School', time: '11 min' },
      { name: 'Unicent School', time: '14 min' },
      { name: 'Shantiniketan Int. School', time: '15 min' },
      { name: 'Silver Oaks Int. School', time: '15 min' },
      { name: 'Kennedy High The Global School', time: '19 min' },
      { name: 'Pallavi International School', time: 'Nearby' },
    ],
  },
};

export const GALLERY_ITEMS = [
  { title: 'Front View', category: 'Exterior', src: ASSETS.images.heroBg },
  { title: 'Night Aerial', category: 'Exterior', src: ASSETS.images.aerialNight },
  { title: 'Drone View', category: 'Exterior', src: ASSETS.images.heroBg },
  { title: 'Water Body', category: 'Exterior', src: ASSETS.images.pool },
  { title: 'Club View', category: 'Exterior', src: ASSETS.images.clubhouse },
  { title: 'Street View', category: 'Exterior', src: ASSETS.images.heroBg },
  { title: 'Side View', category: 'Exterior', src: ASSETS.images.heroBg },
  { title: 'Swimming Pool', category: 'Exterior', src: ASSETS.images.pool },
  { title: 'Basketball Court', category: 'Exterior', src: ASSETS.images.heroBg },
  { title: 'Children\'s Play Area', category: 'Exterior', src: ASSETS.images.heroBg },
  { title: 'Community View', category: 'Exterior', src: ASSETS.images.heroBg },
  { title: 'Bird\'s Eye View', category: 'Exterior', src: ASSETS.images.aerialNight },
  { title: 'Living Room', category: 'Interior', src: ASSETS.images.livingRoom },
  { title: 'Drawing Room', category: 'Interior', src: ASSETS.images.livingRoom },
  { title: 'Master Bedroom', category: 'Interior', src: ASSETS.images.masterBed },
  { title: 'Bedroom Detail', category: 'Interior', src: ASSETS.images.masterBed },
  { title: 'Bedroom 1', category: 'Interior', src: ASSETS.images.masterBed },
  { title: 'Bedroom 2', category: 'Interior', src: ASSETS.images.masterBed },
  { title: 'Dining Area', category: 'Interior', src: ASSETS.images.livingRoom },
  { title: 'Kitchen', category: 'Interior', src: ASSETS.images.livingRoom },
];

export const WATCH_AND_DECIDE = [
  {
    num: '01',
    category: 'Location',
    title: 'Why This Location?',
    video: '/videos/why-this-location.mp4',
  },
  {
    num: '02',
    category: 'Investment',
    title: 'Corridor Growth History',
    video: '/videos/investment.mp4',
  },
  {
    num: '03',
    category: 'Design',
    title: 'Vastu Compliant Design',
    video: '/videos/Design.mp4',
  },
];

export const FLOOR_PLANS_DATA = {
  eyebrow: 'Floor Plans',
  headline: 'Find your',
  headlineHighlight: 'perfect layout.',
  subheadline: '2 BHK · 3 BHK · Duplex · 1100–2200 sq.ft · ORR Exit-5, Hyderabad',
  stats: [
    { value: '2 & 3', label: 'BHK Options' },
    { value: '756', label: 'Total Units' },
    { value: '5', label: 'Blocks A–E' },
    { value: '₹5,499', label: 'per sq.ft' },
  ],
  plans: [
    {
      id: 'p1',
      bhk: '2 BHK',
      facing: 'East',
      sqft: '1,100',
      flat: 'Flat B203',
      description: 'Landscape view on ground floor',
      features: ['100% Vaastu compliant layout', 'Efficient space with no wastage', 'Good cross ventilation & daylight', 'HMDA & RERA approved plans'],
    },
    {
      id: 'p2',
      bhk: '2 BHK',
      facing: 'West',
      sqft: '1,100',
      flat: 'Flat B204',
      description: 'Landscape view, west-facing',
      features: ['100% Vaastu compliant layout', 'Efficient space with no wastage', 'Good cross ventilation & daylight', 'HMDA & RERA approved plans'],
    },
    {
      id: 'p3',
      bhk: '2 BHK',
      facing: 'East',
      sqft: '1,175',
      flat: 'Flat B201',
      description: 'Larger 2BHK, generous rooms',
      features: ['100% Vaastu compliant layout', 'Efficient space with no wastage', 'Good cross ventilation & daylight', 'HMDA & RERA approved plans'],
    },
    {
      id: 'p4',
      bhk: '2 BHK',
      facing: 'West',
      sqft: '1,280',
      flat: 'Flat B202',
      description: 'Spacious West facing 2BHK',
      features: ['100% Vaastu compliant layout', 'Efficient space with no wastage', 'Good cross ventilation & daylight', 'HMDA & RERA approved plans'],
    },
    {
      id: 'p5',
      bhk: '3 BHK Duplex',
      facing: 'East',
      sqft: '2,200',
      flat: 'Penthouse',
      description: 'Spacious east-facing duplex',
      features: ['100% Vaastu compliant layout', 'Efficient space with no wastage', 'Good cross ventilation & daylight', 'HMDA & RERA approved plans'],
    },
  ],
};

export const MASTER_PLAN_DATA = {
  headline: 'Master Plan & Block Overview',
  subheadline: '756 units across 5 blocks (A–E). 70% open space, 3 reserve forests nearby. Click to zoom in.',
  legend: [
    '01 Entry & Exit Gate',
    '02 Banquet Hall',
    '03 Guest Rooms',
    '04 Reception & Lobby',
    '05 Transformer Yard',
    '06 Mother\'s Socializing Area',
    '07 Basketball Court',
    '08 Kids Socializing Area',
    '09 STP & Garbage Area',
    '10 Landscape Garden',
    '11 Block — E',
    '12 Block — D',
    '13 Drive Way',
    '14 Block — C',
    '15 Jogging / Walking Track',
    '16 Block — B',
    '17 Block — A',
    '18 Elders Park',
    '19 Kids Play Area',
  ],
};

export const CONSTRUCTION_DATA = {
  headline: '90% complete.',
  headlineHighlight: 'Possession Soon.',
  description: 'Real progress, captured on-site. No surprises at possession.',
  updateTag: 'Progress updated: May 2026 · Cross-referenced with TG RERA quarterly filing P02200002810',
};

export const ENQUIRY_SECTION = {
  headline: 'Ready to make',
  headlineHighlight: 'this your address?',
  subheadline: 'Speak with a Kura Homes advisor today. No pressure, no obligations — just answers.',
  trustPoints: [
    { title: 'Response within 2 hours', desc: 'A dedicated advisor will call you back personally' },
    { title: 'Free site visit', desc: 'Visit the project, see the progress, meet the team' },
    { title: 'Complete transparency', desc: 'RERA registered, HMDA approved, all docs ready' },
  ],
  consentText:
    'By submitting your number, you consent to Kura Homes and its authorised partners contacting you about CODENAME HI FIVE via call, SMS, WhatsApp, and email. We will only use your details for this purpose.',
};

export const FOOTER_DATA = {
  callout: '500+ homes booked at CODENAME HI FIVE. It\'s your turn now.',
  address: 'Adjacent to ORR Exit No. 5, Bowrampet Road, Dundigal, Gandimaisamma, Hyderabad, Telangana 500043 · A Kura Homes Project',
  hmda: 'G1/DM/2237/BP/2021',
  rera: 'P02200002810',
  disclaimer:
    'Important disclaimer: Computed costs, EMIs, rental projections, and corridor comparisons on this page are indicative and provided for illustration only. They are not financial or investment advice and do not constitute a guarantee of return, appreciation, or rentability. Actual loan terms vary by bank and applicant profile. Tax benefits depend on your chosen tax regime and personal circumstances — consult a qualified CA. All construction-related claims (% complete, possession date) are subject to TG RERA filings: P02200002810. Past corridor price trends are observational and do not guarantee future appreciation. *Effective cost estimate assumes Scenario B (rent-out), old-regime tax opt-in, and indicative rental of ₹25,000/month — individual results will vary.',
};
