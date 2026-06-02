// ─────────────────────────────────────────────────────────────
// TJ Mods — 8 premium brand partnerships ("We Use Best Brands
// Around The World"). Logos scraped from the existing site.
// These are MAJOR trust signals — featured prominently.
// ─────────────────────────────────────────────────────────────

export interface Brand {
  slug: string;
  name: string;
  logo: string;
  blurb: string;
  services: string[]; // which service areas this brand supplies
}

export const brands: Brand[] = [
  {
    slug: '3m',
    name: '3M',
    logo: '/images/brands/3m.png',
    blurb: 'Global leader in window film and vinyl wrap.',
    services: ['Window Tinting', 'Car Wrapping', 'Paint Protection Film'],
  },
  {
    slug: 'suntek',
    name: 'SunTek',
    logo: '/images/brands/suntek.png',
    blurb: 'Premium paint protection film and window film.',
    services: ['Paint Protection Film', 'Window Tinting'],
  },
  {
    slug: 'llumar',
    name: 'LLumar',
    logo: '/images/brands/llumar.png',
    blurb: 'High-end automotive window film.',
    services: ['Window Tinting'],
  },
  {
    slug: 'premium-shield',
    name: 'Premium Shield',
    logo: '/images/brands/premium-shield.png',
    blurb: 'Specialist paint protection film.',
    services: ['Paint Protection Film'],
  },
  {
    slug: 'global',
    name: 'Global Window Film',
    logo: '/images/brands/global.png',
    blurb: 'Trusted window film manufacturer.',
    services: ['Window Tinting'],
  },
  {
    slug: 'hexis',
    name: 'Hexis',
    logo: '/images/brands/hexis.png',
    blurb: 'Premium wrap film and vehicle vinyl.',
    services: ['Car Wrapping'],
  },
  {
    slug: 'avery',
    name: 'Avery Dennison',
    logo: '/images/brands/avery.png',
    blurb: 'World-class premium vinyl wrap film.',
    services: ['Car Wrapping'],
  },
  {
    slug: 'orafol',
    name: 'Orafol',
    logo: '/images/brands/orafol.png',
    blurb: 'Automotive wrap and graphics film.',
    services: ['Car Wrapping'],
  },
];

export const brandBySlug = (slug: string) => brands.find((b) => b.slug === slug);
