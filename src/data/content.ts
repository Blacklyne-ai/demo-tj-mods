// ─────────────────────────────────────────────────────────────
// TJ Mods — homepage & shared editorial content.
// Hero slide copy is VERBATIM from the existing site's 4 rotating
// slides. Why-choose copy is verbatim. Nothing invented.
// ─────────────────────────────────────────────────────────────

export interface HeroSlide {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
  serviceSlug: string;
}

// 4 rotating hero slides — VERBATIM headlines & descriptors.
export const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'Make your car look like new',
    title: 'Window tinting cars in our area for over 15 years',
    lead: "London's premier window tinting service - fully accredited, with a variety of films to fit any budget.",
    image: '/images/hero/slide-1.jpg',
    ctaLabel: 'Book your visit Now',
    ctaHref: '/contact-us',
    serviceSlug: 'window-tinting',
  },
  {
    eyebrow: 'Make your car look like new',
    title: 'Car & van wrapping',
    lead: 'Matte, Gloss, Colour Changing, you name it we can do it. Come to our garage and see our range of colours.',
    image: '/images/hero/slide-2.jpg',
    ctaLabel: 'Book your visit Now',
    ctaHref: '/contact-us',
    serviceSlug: 'car-wrapping',
  },
  {
    eyebrow: 'Make your car look like new',
    title: 'Front & back parking sensors',
    lead: "Never dink your car again with our colour coded parking sensors. They're cheaper than the alternative.",
    image: '/images/hero/slide-3.jpg',
    ctaLabel: 'Book your visit Now',
    ctaHref: '/contact-us',
    serviceSlug: 'parking-sensors',
  },
  {
    eyebrow: 'Make your car look like new',
    title: 'Visual & audio installation',
    lead: 'Screens, speakers, head face units, internal lighting systems, you name it, we can do it.',
    image: '/images/hero/slide-4.jpg',
    ctaLabel: 'Book your visit Now',
    ctaHref: '/contact-us',
    serviceSlug: 'audio-installation',
  },
];

// "Why should you choose TJ Mods?" — VERBATIM body.
export const whyChoose = {
  eyebrow: 'Why should you choose TJ Mods?',
  heading: 'Professional Car Modification Company in East London',
  body: 'We work with a variety of top class suppliers as well as some cheaper alternatives so we can service any budget. You can see on our Facebook and Instagram pages that we have worked on a wide variety of cars from a Mercedes Benz through to an Aston Martin.',
};

// Headline trust figures (all verifiable from the brief).
export const stats = [
  { value: '15', suffix: '+', label: 'Years experience' },
  { value: '7', suffix: '', label: 'Services under one roof' },
  { value: '8', suffix: '', label: 'Premium brand partners' },
  { value: '6', suffix: '-day', label: 'Open Monday to Saturday' },
];

// Homepage hero trust chips.
export const trustSignals = [
  '15+ Years Experience',
  'Fully Accredited',
  '8 Premium Brand Partners',
  'East London · Ilford',
];

// Simple, premium 4-step journey (used on homepage + service pages).
export const process = [
  { step: '01', title: 'Get in touch', body: 'Call, WhatsApp or pop into our Ilford garage for a no-obligation quote.' },
  { step: '02', title: 'Choose your spec', body: 'See our range of films, finishes and options in person and pick what suits you and your budget.' },
  { step: '03', title: 'We modify', body: 'Our experienced installers carry out the work to a professional, accredited standard.' },
  { step: '04', title: 'Drive away', body: 'Collect your car looking like new - with aftercare advice to keep it that way.' },
];
