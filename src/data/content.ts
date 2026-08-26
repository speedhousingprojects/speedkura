// ============================================================
// THIS PROJECT by Kura Homes — Centralized Content Data
// Verified facts strictly aligned with live source
// ============================================================

export const ASSETS = {
  logos: {
    kuraHomes: '/logos/kura-homes-logo-2.png',
    hiFive: '/logos/hifive-logo.jpeg',
  },
  videos: {
    hero: '/videos/hero-video.mp4',
    construction: '/videos/sanarelli_progress_web.mp4',
  },
  images: {
    heroBg: '/images/starting-at.jpg',
    aerialNight: '/images/back-side-front-view.jpg',
    clubhouse: '/images/starting-at.jpg',
    pool: '/images/starting-at.jpg',
    livingRoom: '/images/starting-at.jpg',
    masterBed: '/images/starting-at.jpg',
    masterPlan: '/images/back-side-front-view.jpg',
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
  { label: 'Home', href: '/#hero' },
  { label: 'Why This Project', href: '/#why' },
  { label: 'Price', href: '/#price' },
  { label: 'Location', href: '/#location' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'Plans', href: '/#plans' },
  { label: 'Progress', href: '/#progress' },
];

export const HERO = {
  locationBadge: 'ORR Exit-5, Gandimaisamma, Hyderabad',
  projectName: 'CODENAME HI FIVE',
  tagline: 'by Kura Homes',
  headline: 'Looking to own your first home in a high-growth location?',
  subheadline:
    'A 5.3-acre gated community of 2 BHK & Duplex luxury residences with 70% open space, 25,000 sq.ft clubhouse, and 40+ amenities right next to ORR Exit 5.',
  ticker: [
    '₹4,999/sq.ft',
    '7.95% Default Interest Rate',
    'Starting @ ₹59 Lakhs',
    '35 min to Financial District',
    '10 min to Bachupally',
    '30 min to Kukatpally',
    '25,000 sq.ft Clubhouse',
    '40+ Amenities',
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
  eyebrow: 'Why This Project',
  headline: 'Everything you need,',
  headlineHighlight: 'exactly where you need it.',
  cards: [
    {
      title: 'Prime ORR 5 Advantage',
      subtitle: "One of Hyderabad's Best-Connected Corridors",
      points: [
        '1 min from ORR Exit 5',
        '35 min to Financial District',
        '10 min to Bachupally',
        '30 min to Kukatpally',
      ],
      icon: 'MapPin',
    },
    {
      title: 'Balanced Lifestyle',
      subtitle: 'Nature Around Your Home',
      points: [
        '70% open spaces',
        'Landscaped central greens',
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
        'ORR 5 · This Project: ₹4,999/sq.ft',
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
      name: 'ORR 5 · This Project',
      price: '₹4,999/sq.ft ✦',
      highlight: true,
      subtext: 'ORR 5 is in an earlier phase of corridor growth',
    },
  ],
  footer: 'Pricing data as of May 2026, sourced from market listings. Not investment advice.',
};

export const STARTING_PRICE = {
  startingLabel: 'Starting at',
  configurations: [
    { bhk: '2 BHK', price: '₹59L', note: 'Smart Luxe (1,100–1,285 sq.ft)' },
    { bhk: 'Duplex', price: '₹95L', note: 'Penthouse & Duplex (2,200 sq.ft)' },
  ],
  benefits: [
    'Just ₹4,999/sq.ft today · Most accessible price on ORR',
    'Comfortable EMI with 7.95% default interest rate options',
    'Possession Soon / 90% Constructed',
    'Approved by HMDA & TG RERA',
    '500+ homes booked · 55 Years of trust by Kura Homes',
  ],
};

export const NET_OUTGO_CALCULATOR = {
  title: 'Home Loan Calculator',
  headline: 'Calculate your',
  headlineHighlight: 'monthly EMI.',
  description:
    'Adjust the loan parameters below to calculate your estimated monthly home loan EMI.',
  scenarioBHighlight: {
    label: 'Estimated Monthly Home Loan EMI',
    amount: '₹39,311',
    subtext: 'Based on 7.95% interest rate p.a. for a 20-year loan tenure.',
  },
  formulaBreakdown: [
    { sign: '=', label: 'Property Value (2 BHK)', value: '₹59,00,000' },
    { sign: '→', label: 'Home Loan Amount (80%)', value: '₹47,20,000' },
    { sign: '=', label: 'Estimated Monthly EMI (7.95% / 20 yrs)', value: '₹39,311', isTotal: true },
  ],
  defaults: {
    propertyValue: 5900000,
    loanAmount: 4720000,
    rate: 7.95,
    tenure: 20,
    rentalIncome: 0,
    taxBenefit: 0,
    localRent: 0,
  },
  disclaimer:
    '* EMI calculated at 7.95% default interest rate p.a. for 20 yrs on ₹47.2L loan (80% of ₹59L home value). Actual interest rates and loan terms vary by bank and applicant eligibility profile. Not financial or investment advice. T&C Apply.',
  faq: {
    q: 'What is the default home loan interest rate applied?',
    a: 'The default interest rate applied across calculations is 7.95% per annum for a 20-year tenure on an 80% loan amount. Final bank loan terms depend on your financial profile and chosen bank.',
  },
};

export const LOCATION_PAGE_DATA = {
  headline: 'Where the city breathes easy.',
  subheadline:
    'This project brings urban convenience and natural calm together — with ORR, schools, Bachupally, Kukatpally, and Financial District all within easy reach.',
  quickStats: [
    { value: '1 min', label: 'ORR EXIT 5' },
    { value: '10 min', label: 'BACHUPALLY' },
    { value: '30 min', label: 'KUKATPALLY' },
    { value: '35 min', label: 'FINANCIAL DISTRICT' },
    { value: '25+', label: 'SCHOOLS NEARBY' },
  ],
  pillars: [
    '1 min from ORR Exit 5',
    '10 min to Bachupally & 30 min to Kukatpally',
    '35 min to Financial District',
    'In the heart of top school zones',
  ],
  categories: [
    {
      name: 'Key Townships & Hubs',
      items: [
        { name: 'Bachupally Junction', time: '10 min' },
        { name: 'Tech Mahindra Campus', time: '10 min' },
        { name: 'Aurobindo Pharma', time: '10 min' },
        { name: 'Kukatpally', time: '30 min' },
        { name: 'Financial District', time: '35 min' },
        { name: 'HITEC City & Gachibowli', time: '25–30 min' },
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
        { name: 'Kukatpally Shopping Street', time: '30 min' },
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
        { name: 'Bachupally Junction', time: '10 min' },
        { name: 'Metro (JNTU)', time: '25 min' },
        { name: 'Kukatpally', time: '30 min' },
        { name: 'Financial District', time: '35 min' },
      ],
    },
    {
      name: 'Nature & Recreation',
      items: [
        { name: '70% Open Landscaped Greens', time: 'On-site' },
        { name: 'Central Green Courtyards', time: 'On-site' },
        { name: 'Walking & Cycling Tracks', time: 'On-site' },
        { name: 'Reflexology & Elderly Seating', time: 'On-site' },
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
    category: 'Investment',
    title: 'Corridor Growth History',
    video: '/videos/investment.mp4',
  },
  {
    num: '02',
    category: 'Design',
    title: 'Vastu Compliant Design',
    video: '/videos/Design.mp4',
  },
];

export const FLOOR_PLANS_DATA = {
  eyebrow: 'Floor Plans',
  headline: 'Find your',
  headlineHighlight: 'perfect layout.',
  subheadline: '2 BHK & Duplex Homes · 1,100 – 2,200 sq.ft · ORR Exit-5, Hyderabad',
  stats: [
    { value: '2 BHK & Duplex', label: 'Options' },
    { value: '756', label: 'Total Units' },
    { value: '5', label: 'Blocks A–E' },
    { value: '₹4,999', label: 'per sq.ft' },
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
      bhk: 'Duplex',
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
  subheadline: '756 units across 5 blocks (A–E). 70% open space & landscaped greens. Click to zoom in.',
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
    'By submitting your number, you consent to Kura Homes and its authorised partners contacting you about this project via call, SMS, WhatsApp, and email. We will only use your details for this purpose.',
};

export const FOOTER_DATA = {
  callout: '500+ homes booked in this project. It\'s your turn now.',
  address: 'Adjacent to ORR Exit No. 5, Bowrampet Road, Dundigal, Gandimaisamma, Hyderabad, Telangana 500043 · A Kura Homes Project',
  hmda: 'G1/DM/2237/BP/2021',
  rera: 'P02200002810',
  disclaimer:
    'Important disclaimer: Computed costs and loan EMIs on this page are indicative and provided for illustration only. They are not financial or investment advice and do not constitute a guarantee. Actual loan terms vary by bank and applicant profile. All construction-related claims (% complete, possession date) are subject to TG RERA filings: P02200002810.',
};
