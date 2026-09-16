// Single source of truth for verified business information.
// Every field here is sourced from the live site at budgetexhaust.net.au
// (fetched 2026) or supplied directly by the owner. Do not add anything
// here that isn't verified - components read from this file, so an
// unverified claim added here will surface across the whole site.

export const business = {
  name: 'Budget Exhaust',
  tagline: 'Mufflers & Exhaust Specialists',
  legalName: 'Budget Exhaust Centre Bankstown',
  establishedYear: 1980,
  ownerName: 'Fadi El-Masri',

  address: {
    street: '165 Eldridge Road',
    suburb: 'Bankstown',
    state: 'NSW',
    postcode: '2200',
    country: 'AU',
    // Coordinates as published on the business's own Google Maps listing.
    lat: -33.9303358,
    lng: 151.0099883,
  },

  phones: {
    primary: '(02) 9708 3088',
    primaryHref: 'tel:+61297083088',
    secondary: '(02) 9790 4060',
    secondaryHref: 'tel:+61297904060',
  },

  email: 'info@budgetexhaust.net.au',

  // Sourced from the current site footer. If the owner confirms different
  // hours anywhere else (shopfront signage, Google Business Profile), flag
  // the conflict rather than silently picking one.
  hours: [
    { days: 'Monday - Friday', time: '8:00 AM - 5:00 PM' },
    { days: 'Saturday - Sunday', time: 'Closed (not listed on current site - confirm with owner)' },
  ],

  social: {
    // These profile URLs are linked from the current live site's footer.
    facebook: 'https://www.facebook.com/pages/category/Automotive-Customization-Shop/Budget-Exhaust-119036731466402/',
    youtube: 'https://www.youtube.com/user/MrBudgetexhaust/videos',
    instagram: 'https://www.instagram.com/explore/locations/328247100/budget-exhaust/',
  },

  googleMapsUrl:
    'https://www.google.com/maps/place/Budget+Exhaust/@-33.9303358,151.0099883,17z',

  // Historical facts, preserved exactly as stated on the existing site.
  history: [
    {
      year: '1980',
      title: 'Business established',
      body: 'Budget Exhaust Centre Bankstown opens, originally based in Bankstown next door to the Bankstown Sports Club.',
    },
    {
      year: '2005',
      title: 'Relocated to 165 Eldridge Road',
      body: 'The business moves to larger premises at 165 Eldridge Road, Bankstown - opposite the Trotting Club, on the same street as Bankstown Hospital.',
    },
    {
      year: 'Today',
      title: 'Still serving Sydney vehicle owners',
      body: 'Owner Fadi El-Masri and the team continue to work on car exhausts, standard mufflers, 4WD exhaust, performance exhaust, prestige vehicles, light trucks and dealership work.',
    },
  ],

  // Trust points supported by the existing site content - nothing invented.
  trustPoints: [
    { label: 'Est. 1980', detail: 'Established exhaust specialists' },
    { label: 'All vehicles', detail: 'Standard, performance, 4WD & commercial' },
    { label: 'Safety checks', detail: 'Muffler & exhaust evaluations' },
    { label: 'Bankstown workshop', detail: '165 Eldridge Rd' },
  ],

  services: [
    {
      slug: 'standard-mufflers',
      title: 'Standard Mufflers',
      summary:
        'Replacement mufflers for everyday driving - fitted to restore quiet, compliant performance when a factory system has corroded or failed.',
    },
    {
      slug: 'custom-exhaust-systems',
      title: 'Custom Exhaust Systems',
      summary:
        'Pipework built and bent to suit your vehicle and goals, rather than a generic off-the-shelf fit.',
    },
    {
      slug: 'performance-exhaust',
      title: 'Performance Exhaust',
      summary:
        'Performance mufflers, high-flow systems and sports exhaust setups for drivers who want a different sound and feel from their vehicle.',
    },
    {
      slug: '4wd-light-truck-exhaust',
      title: '4WD & Light Truck Exhaust',
      summary:
        'Exhaust systems suited to 4WDs and small trucks, built to handle the extra demands of towing and off-road use.',
    },
    {
      slug: 'extractors-headers',
      title: 'Extractors & Headers',
      summary:
        'Extractors and headers fitted to suit a wide range of vehicles as part of a performance exhaust upgrade.',
    },
    {
      slug: 'catalytic-converters',
      title: 'Catalytic Converters',
      summary:
        'Standard and high-flow metallic catalytic converters to suit Australian emissions requirements, including Euro 2, 3 and 4.',
    },
    {
      slug: 'exhaust-diagnostics',
      title: 'Exhaust Diagnostics & Safety Checks',
      summary:
        'A full muffler and exhaust safety analysis to identify corrosion, leaks and damage before recommending any work.',
    },
    {
      slug: 'exhaust-repairs',
      title: 'Exhaust Repairs',
      summary:
        'Repairs to pipes, hangers, tailpipes and joints - the everyday wear and tear that comes from age and short trips.',
    },
    {
      slug: 'air-induction',
      title: 'Air Induction Kits',
      summary:
        'Air induction kits fitted as part of a broader exhaust and performance setup.',
    },
    {
      slug: 'exhaust-tips-accessories',
      title: 'Exhaust Tips & Accessories',
      summary:
        'Chrome exhaust tips and finishing accessories to complete a muffler or exhaust upgrade.',
    },
  ],

  // Brands referenced on the existing site. Do not claim authorised dealer
  // status for any brand unless explicitly confirmed - see the xforce entry.
  brands: [
    { name: 'XForce', note: 'Authorised dealer (stated on existing site)' },
    { name: 'MagnaFlow', note: '' },
    { name: 'Redback', note: '' },
    { name: 'Hi-Tech Headers', note: '' },
    { name: 'Wildcat Headers', note: '' },
    { name: 'Pacemaker', note: '' },
    { name: 'Genie', note: '' },
    { name: 'Advance', note: '' },
    { name: 'Hurricane', note: '' },
    { name: 'Capristo', note: '' },
    { name: 'Borla', note: '' },
    { name: 'Kooks', note: '' },
    { name: 'Flowmaster', note: '' },
    { name: 'Dynomax', note: '' },
    { name: 'Fabspeed', note: '' },
    { name: 'Flo Pro', note: '' },
    { name: 'Extreme Turbo Systems', note: '' },
    { name: 'HMS Performance', note: '' },
    { name: 'HushPower', note: '' },
    { name: 'IMCO', note: '' },
    { name: 'Cargraphic', note: '' },
    { name: 'Berklee', note: '' },
    { name: 'CATCO', note: '' },
  ],
} as const

export type Business = typeof business
