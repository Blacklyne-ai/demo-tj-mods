// ─────────────────────────────────────────────────────────────
// TJ Mods — portfolio gallery. Images scraped from the existing
// site, organised into the 7 service categories used by the
// original gallery filter (plus "All").
// ─────────────────────────────────────────────────────────────

export interface GalleryImage {
  src: string;
  category: string;
  alt: string;
}

// Filter order matches the existing site (All first).
export const galleryCategories = [
  'All',
  'Audio Installation',
  'Car Wrapping',
  'Lighting Installation',
  'PPF',
  'Parking Sensor',
  'Security',
  'Window Tinting',
];

export const galleryImages: GalleryImage[] = [
  // ── Window Tinting ──
  { src: '/images/gallery/window-tinting/wt-1.jpg', category: 'Window Tinting', alt: 'Professionally tinted car windows by TJ Mods' },
  { src: '/images/gallery/window-tinting/wt-2.jpg', category: 'Window Tinting', alt: 'Window tinting on a parked vehicle' },
  { src: '/images/gallery/window-tinting/wt-3.jpg', category: 'Window Tinting', alt: 'Tinted rear windows close-up' },
  { src: '/images/gallery/window-tinting/wt-4.jpg', category: 'Window Tinting', alt: 'Car with freshly tinted windows' },
  { src: '/images/gallery/window-tinting/wt-5.jpg', category: 'Window Tinting', alt: 'Premium vehicle with window tint' },
  { src: '/images/gallery/window-tinting/wt-6.jpg', category: 'Window Tinting', alt: 'Side window tinting detail' },
  { src: '/images/gallery/window-tinting/wt-7.jpg', category: 'Window Tinting', alt: 'Finished window tinting work' },
  { src: '/images/window-tinting/mercedes.png', category: 'Window Tinting', alt: 'Mercedes window tinting by TJ Mods' },
  { src: '/images/window-tinting/mercedes-a-class.png', category: 'Window Tinting', alt: 'Mercedes A-Class window tinting' },
  { src: '/images/window-tinting/audi-a4.png', category: 'Window Tinting', alt: 'Audi A4 window tinting' },
  { src: '/images/window-tinting/chameleon.png', category: 'Window Tinting', alt: 'Chameleon front window tint' },

  // ── Car Wrapping ──
  { src: '/images/gallery/wrapping/wrap-1.png', category: 'Car Wrapping', alt: 'Custom car wrap by TJ Mods' },
  { src: '/images/gallery/wrapping/wrap-3.png', category: 'Car Wrapping', alt: 'Vehicle wrap finish' },
  { src: '/images/gallery/wrapping/wrap-4.png', category: 'Car Wrapping', alt: 'Full car wrap project' },
  { src: '/images/gallery/wrapping/wrap-6.png', category: 'Car Wrapping', alt: 'Colour-change car wrap' },
  { src: '/images/gallery/wrapping/wrap-8.png', category: 'Car Wrapping', alt: 'Premium vehicle wrap' },
  { src: '/images/wrapping/matt-porsche.png', category: 'Car Wrapping', alt: 'Matte black wrapped Porsche' },
  { src: '/images/wrapping/rose-gold-bmw.png', category: 'Car Wrapping', alt: 'Rose gold chrome wrapped BMW X5' },
  { src: '/images/wrapping/gold-finish.png', category: 'Car Wrapping', alt: 'Gold finish vehicle wrap' },
  { src: '/images/wrapping/green-van.png', category: 'Car Wrapping', alt: 'Bright green wrapped van' },
  { src: '/images/wrapping/london-mep.png', category: 'Car Wrapping', alt: 'London commercial vehicle wrap' },
  { src: '/images/wrapping/jeep.png', category: 'Car Wrapping', alt: 'Sponsorship liveried Jeep wrap' },
  { src: '/images/wrapping/colour-change.png', category: 'Car Wrapping', alt: 'Colour change wrap in progress' },

  // ── Paint Protection Film ──
  { src: '/images/gallery/ppf/ppf-img-2.jpg', category: 'PPF', alt: 'Paint protection film application' },
  { src: '/images/gallery/ppf/ppf-img-4.jpg', category: 'PPF', alt: 'PPF fitted to a vehicle panel' },
  { src: '/images/gallery/ppf/ppf-img-5.jpg', category: 'PPF', alt: 'Clear paint protection film detail' },
  { src: '/images/gallery/ppf/ppf-slider-4.png', category: 'PPF', alt: 'Paint protection film on bonnet' },
  { src: '/images/gallery/ppf/ppf-slider-6.png', category: 'PPF', alt: 'PPF installation' },
  { src: '/images/gallery/ppf/ppf-slider-7.png', category: 'PPF', alt: 'Paint protection film finish' },
  { src: '/images/gallery/ppf/ppf-5.jpg', category: 'PPF', alt: 'PPF protected paintwork' },
  { src: '/images/gallery/ppf/ppf.png', category: 'PPF', alt: 'Paint protection film by TJ Mods' },

  // ── Parking Sensor ──
  { src: '/images/gallery/parking/reverse-sensors.png', category: 'Parking Sensor', alt: 'Colour-coded reverse parking sensors' },
  { src: '/images/parking/offering-1.png', category: 'Parking Sensor', alt: 'Parking sensor fitment' },
  { src: '/images/parking/offering-2.png', category: 'Parking Sensor', alt: 'Rear parking sensor installation' },

  // ── Audio Installation ──
  { src: '/images/gallery/audio/audio-1.png', category: 'Audio Installation', alt: 'Car audio installation by TJ Mods' },
  { src: '/images/gallery/audio/audio-2.png', category: 'Audio Installation', alt: 'In-car screen and head unit' },
  { src: '/images/gallery/audio/audio-3.png', category: 'Audio Installation', alt: 'Speaker installation detail' },
  { src: '/images/gallery/audio/audio-4.png', category: 'Audio Installation', alt: 'Boot-built subwoofer install' },
  { src: '/images/gallery/audio/audio-6.png', category: 'Audio Installation', alt: 'Custom audio build' },

  // ── Lighting Installation (HID / LED) ──
  { src: '/images/gallery/hid/hid-1.png', category: 'Lighting Installation', alt: 'HID lighting upgrade' },
  { src: '/images/gallery/hid/hid-2.png', category: 'Lighting Installation', alt: 'LED headlight upgrade' },
  { src: '/images/gallery/hid/hid-3.png', category: 'Lighting Installation', alt: 'Road-legal LED lights' },
  { src: '/images/gallery/hid/hid-4.png', category: 'Lighting Installation', alt: 'Bright HID headlights' },
  { src: '/images/gallery/hid/hid-5.png', category: 'Lighting Installation', alt: 'LED lighting installation' },
  { src: '/images/gallery/hid/hid-6.png', category: 'Lighting Installation', alt: 'Upgraded car lighting' },
  { src: '/images/gallery/hid/hid-7.png', category: 'Lighting Installation', alt: 'LED light fitting' },
  { src: '/images/gallery/hid/hid-8.png', category: 'Lighting Installation', alt: 'Modern LED lighting upgrade' },
  { src: '/images/led/ambient.png', category: 'Lighting Installation', alt: 'Interior ambient lighting' },
  { src: '/images/led/lighting-5.jpg', category: 'Lighting Installation', alt: 'Exterior lighting upgrade' },

  // ── Security ──
  { src: '/images/security/ghost-alarm.png', category: 'Security', alt: 'Ghost immobiliser and alarm system' },
  { src: '/images/security/immobiliser.png', category: 'Security', alt: 'Vehicle immobiliser installation' },
  { src: '/images/security/trackers.png', category: 'Security', alt: 'GPS tracker fitment' },
  { src: '/images/gallery/security/sec-1.png', category: 'Security', alt: 'Car security installation' },
  { src: '/images/gallery/security/sec-2.png', category: 'Security', alt: 'Security system fitting' },
  { src: '/images/gallery/security/sec-3.png', category: 'Security', alt: 'Vehicle security work' },
  { src: '/images/gallery/security/sec-4.png', category: 'Security', alt: 'Security device installation' },
  { src: '/images/gallery/security/sec-5.png', category: 'Security', alt: 'Alarm system fitment' },
  { src: '/images/gallery/security/sec-8.png', category: 'Security', alt: 'Professional car security' },
];

// Preview set for the homepage gallery section (balanced across categories).
export const galleryPreview: GalleryImage[] = [
  galleryImages.find((g) => g.src.includes('wrap-4'))!,
  galleryImages.find((g) => g.src.includes('window-tinting/wt-7'))!,
  galleryImages.find((g) => g.src.includes('ppf-img-2'))!,
  galleryImages.find((g) => g.src.includes('rose-gold-bmw'))!,
  galleryImages.find((g) => g.src.includes('hid-7'))!,
  galleryImages.find((g) => g.src.includes('audio-1'))!,
  galleryImages.find((g) => g.src.includes('matt-porsche'))!,
  galleryImages.find((g) => g.src.includes('reverse-sensors'))!,
].filter(Boolean);
