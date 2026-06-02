// ─────────────────────────────────────────────────────────────
// TJ Mods (legal: Proper Mods Ltd) — central site configuration.
// Every business fact is taken verbatim from the existing site
// (tjmods.co.uk). Nothing invented. UK English throughout.
// Currency £ GBP. Phone UK format. Dates DD/MM/YYYY.
//
// DUAL BRAND NAMING (see JUDGEMENT_CALLS.md):
//   · Display / brand name : "TJ Mods"      (logo, domain, headers)
//   · Legal / trading name : "Proper Mods Ltd" (Companies House, footer)
//   · Founder              : "TJ" (named in customer reviews)
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'TJ Mods',
  legalName: 'Proper Mods Ltd',
  founder: 'TJ',
  shortName: 'TJ Mods',
  tagline: 'Professional Car Modification Company in East London',
  logoTagline: 'Car Modification Specialists · Est. 2010',
  // Concise verbatim-led value line
  motto: 'Make your car look like new.',
  description:
    "East London's car modification specialists - 15+ years of window tinting, wrapping, PPF, audio, lighting & security. Call TJ Mods on 0208 478 7327.",
  url: 'https://demo-tj-mods.pages.dev',

  // ── Phone (single line, UK format) ──
  phoneDisplay: '0208 478 7327',
  phoneIntl: '+442084787327',
  phoneDigits: '442084787327', // also WhatsApp
  phoneDial: '00442084787327', // for callers outside the UK

  email: 'info@propermods.com',

  // Pre-filled WhatsApp enquiry (service placeholder swapped per CTA)
  whatsappMessage: "Hi, I'd like to book my car in for a modification please",

  // ── Single location — East London (Ilford) ──
  address: {
    street: '225 Green Lane',
    area: 'Ilford',
    city: 'London',
    region: 'Greater London',
    postcode: 'IG1 1XR',
    country: 'United Kingdom',
    countryCode: 'GB',
    lat: 51.5598495,
    lng: 0.09264499999999999,
    // Google business name is "Proper Mods Ltd"; query carries both names + full address.
    mapsQuery: 'Proper+Mods+Ltd,+225+Green+Lane,+Ilford+IG1+1XR',
    mapsEmbed:
      'https://www.google.com/maps?q=225+Green+Lane,+Ilford+IG1+1XR&z=15&output=embed',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Proper+Mods+Ltd+225+Green+Lane+Ilford+IG1+1XR',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=225+Green+Lane+Ilford+IG1+1XR',
  },

  // ── Opening hours: Mon–Sat 9am–5pm, Sunday closed ──
  hours: {
    open: '09:00',
    close: '17:00',
    openDays: [1, 2, 3, 4, 5, 6], // Mon–Sat (0 = Sun)
    value: '9:00am – 5:00pm',
    days: 'Monday – Saturday',
  },
  hoursSummary: [
    { label: 'Monday – Friday', value: '9:00am – 5:00pm' },
    { label: 'Saturday', value: '9:00am – 5:00pm' },
    { label: 'Sunday', value: 'Closed' },
  ],

  // ── Social (active accounts, handle: propermods / propermodsessex) ──
  social: {
    facebook: 'https://www.facebook.com/propermodsessex',
    instagram: 'https://www.instagram.com/propermods/',
    twitter: 'https://twitter.com/propermods',
  },
  instagramHandle: '@propermods',

  // Google business profile (review CTA target — reviews shown via Place Details API)
  googleProfileUrl:
    'https://www.google.com/maps/search/?api=1&query=Proper+Mods+Ltd+225+Green+Lane+Ilford+IG1+1XR',

  // Verifiable figures
  stats: {
    yearsExperience: 15,
    sinceYear: 2010,
    services: 7,
    brandPartners: 8,
  },

  // Client range — verbatim positioning from existing copy
  clientRange: 'Mercedes Benz through to an Aston Martin',
};

// ── Link helpers ──────────────────────────────────────────────
export const telLink = `tel:${site.phoneIntl}`;
export const mailLink = `mailto:${site.email}`;
export const whatsappLink = `https://wa.me/${site.phoneDigits}?text=${encodeURIComponent(site.whatsappMessage)}`;

export function whatsappFor(service: string) {
  const msg = `Hi, I'd like to book my car in for ${service}`;
  return `https://wa.me/${site.phoneDigits}?text=${encodeURIComponent(msg)}`;
}
export function mailFor(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

// ── Navigation ────────────────────────────────────────────────
export interface NavItem {
  href: string;
  label: string;
  mega?: 'services';
  children?: { href: string; label: string }[];
}

export const nav: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/services', label: 'Services', mega: 'services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact-us', label: 'Contact us' },
];

export const legalNav = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/terms', label: 'Terms of Service' },
];
