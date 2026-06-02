// ─────────────────────────────────────────────────────────────
// TJ Mods — the 7 core services.  Short descriptions are VERBATIM
// from the existing tjmods.co.uk services grid / hero slides.
// Detail-page copy expands on the verbatim source without inventing
// new services.  See JUDGEMENT_CALLS.md for the two flagged items
// (Car Wrapping & Security original grid copy was duplicated/placeholder).
// ─────────────────────────────────────────────────────────────

export interface Service {
  slug: string;
  name: string;
  navLabel: string;
  icon: string; // Lucide icon name
  // VERBATIM short description (homepage grid + services overview)
  short: string;
  // Detail page
  heroEyebrow: string;
  heroTitle: string;
  heroLead: string; // verbatim-derived lead
  intro: string[]; // body paragraphs
  includes: { title: string; body: string }[];
  benefits: string[];
  brandSlugs: string[]; // → brands.ts
  galleryKey: string; // → gallery.ts category
  feature: string; // feature image used on grid + detail hero
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: 'window-tinting',
    name: 'Window Tinting',
    navLabel: 'Window Tinting',
    icon: 'Sun',
    short:
      "Proper Mods is London's premier Window Tinting Service. We use the leading industry suppliers and are fully accredited. We offer a variety of films to fit any budget.",
    heroEyebrow: 'Our lead service · 15+ years',
    heroTitle: "London's premier window tinting service",
    heroLead:
      "Proper Mods is London's premier Window Tinting Service. We use the leading industry suppliers and are fully accredited. We offer a variety of films to fit any budget.",
    intro: [
      "Window tinting is the service TJ Mods is built on - we've been tinting cars in our area for over 15 years. Whether you're after privacy, heat rejection or a sharper, more finished look, we fit professional-grade film to every glass on the vehicle.",
      "We work with leading industry suppliers including 3M, SunTek and LLumar, and we're fully accredited. With a variety of films to suit any budget, there's an option for every driver - from subtle factory-match shades to deep limo tints.",
    ],
    includes: [
      { title: 'Full window tints', body: 'Every side and rear window tinted to your chosen shade for a uniform, factory-finished look.' },
      { title: 'Limo & privacy tints', body: 'The darkest legal rear-glass shades for maximum privacy and a striking finish.' },
      { title: 'Partial & front tints', body: 'Road-legal front-window films and partial tints fitted precisely to UK regulations.' },
      { title: 'UV & heat-rejection film', body: 'High-performance film that blocks UV and rejects heat to keep the cabin cooler.' },
    ],
    benefits: ['Privacy & security', 'UV protection', 'Heat reduction', 'Reduced glare', 'Sharper aesthetics', 'Fully accredited fit'],
    brandSlugs: ['3m', 'suntek', 'llumar', 'global'],
    galleryKey: 'Window Tinting',
    feature: '/images/gallery/window-tinting/wt-1.jpg',
    metaTitle: 'Window Tinting Ilford & East London | TJ Mods | 3M · SunTek · LLumar',
    metaDescription:
      "London's premier window tinting service. Fully accredited, 15+ years, films for any budget. 3M, SunTek & LLumar. Call TJ Mods on 0208 478 7327.",
  },
  {
    slug: 'car-wrapping',
    name: 'Car Wrapping',
    navLabel: 'Car Wrapping',
    icon: 'Paintbrush2',
    short:
      'Matte, Gloss, Colour Changing, you name it we can do it. Come to our garage and see our range of colours.',
    heroEyebrow: 'Car & van wrapping',
    heroTitle: 'Matte, gloss, colour-changing - you name it',
    heroLead:
      'Matte, Gloss, Colour Changing, you name it we can do it. Come to our garage and see our range of colours.',
    intro: [
      'A full or partial wrap completely transforms your vehicle - and protects the original paint underneath. Come to our garage and see our range of colours and finishes in person before you decide.',
      'From matte black and gloss colour changes to chrome deletes, roof wraps and bold commercial liveries, we wrap cars and vans of every size using premium films from Avery Dennison, Hexis, Orafol and 3M.',
    ],
    includes: [
      { title: 'Full vehicle wrap', body: 'Complete colour change in matte, gloss, satin or specialist finishes, fully reversible.' },
      { title: 'Partial wrap', body: 'Roofs, bonnets, mirrors and accents wrapped to add contrast and style.' },
      { title: 'Chrome delete', body: 'Blacked-out trim and badges for a clean, modern finish.' },
      { title: 'Commercial & van wrapping', body: 'Sign-written liveries and fleet branding that turn your van into advertising.' },
    ],
    benefits: ['Huge range of colours', 'Protects original paint', 'Matte / gloss / satin', 'Chrome delete', 'Fully reversible', 'Commercial liveries'],
    brandSlugs: ['avery', 'hexis', 'orafol', '3m'],
    galleryKey: 'Car Wrapping',
    feature: '/images/wrapping/matt-porsche.png',
    metaTitle: 'Car & Van Wrapping East London | TJ Mods | Avery · Hexis · Orafol',
    metaDescription:
      'Matte, gloss & colour-changing car wraps in Ilford, East London. Premium Avery Dennison, Hexis & Orafol film. Visit our garage. Call 0208 478 7327.',
  },
  {
    slug: 'paint-protection-film',
    name: 'Paint Protection Film',
    navLabel: 'Paint Protection Film',
    icon: 'ShieldCheck',
    short:
      "Paint protection film keeps your cars paint looking fresh. Simply warming up the paint protection can bring it back to it's original state. Don't lose resale value on your vehicle keep the paintwork as if brand new.",
    heroEyebrow: 'PPF · Paint protection film',
    heroTitle: 'Keep your paintwork as if brand new',
    heroLead:
      "Paint protection film keeps your cars paint looking fresh. Simply warming up the paint protection can bring it back to it's original state. Don't lose resale value on your vehicle keep the paintwork as if brand new.",
    intro: [
      "Paint protection film is a clear, ultra-tough layer applied over your paintwork to guard against stone chips, scratches and road debris. Many films are self-healing - simply warming up the paint protection can bring light marks back to their original state.",
      "It's the smart way to preserve your investment: keep the paintwork as if brand new and don't lose resale value on your vehicle. We fit premium film from SunTek, Premium Shield and 3M to the panels most exposed to wear, or the full vehicle.",
    ],
    includes: [
      { title: 'Full-front protection', body: 'Bonnet, bumper, wings and mirrors - the panels that take the most stone-chip damage.' },
      { title: 'Full-body PPF', body: 'Every painted panel wrapped in clear film for total, invisible protection.' },
      { title: 'High-wear areas', body: 'Sills, door edges, arches and load areas shielded against scuffs.' },
      { title: 'Self-healing film', body: 'Light swirls and marks vanish with heat, keeping the finish flawless.' },
    ],
    benefits: ['Stone-chip protection', 'Self-healing finish', 'Preserves resale value', 'Invisible clear film', 'Guards against scratches', 'Easy to maintain'],
    brandSlugs: ['suntek', 'premium-shield', '3m'],
    galleryKey: 'PPF',
    feature: '/images/gallery/ppf/ppf-img-2.jpg',
    metaTitle: 'Paint Protection Film (PPF) East London | TJ Mods | SunTek · 3M',
    metaDescription:
      "Self-healing paint protection film in Ilford. Guard against stone chips & scratches and preserve resale value. Call TJ Mods on 0208 478 7327.",
  },
  {
    slug: 'parking-sensors',
    name: 'Parking Sensors',
    navLabel: 'Parking Sensors',
    icon: 'Radar',
    short:
      "Never dink your car again with our colour coded parking sensors. They're cheaper than the alternative.",
    heroEyebrow: 'Front & rear parking sensors',
    heroTitle: 'Never dink your car again',
    heroLead:
      "Never dink your car again with our colour coded parking sensors. They're cheaper than the alternative.",
    intro: [
      "Tight London parking spaces are unforgiving. Our front and rear parking sensors take the guesswork out of every manoeuvre, sounding a clear warning as you approach an obstacle - so you never dink your car again.",
      'Each sensor is colour-coded to match your vehicle for a clean, factory-fitted finish, and the whole system is cheaper than the alternative of repairing bumper scuffs and dents down the line.',
    ],
    includes: [
      { title: 'Rear parking sensors', body: 'Discreet rear-bumper sensors with an audible distance warning.' },
      { title: 'Front parking sensors', body: 'Front coverage for tight bays, walls and kerbs.' },
      { title: 'Colour-coded finish', body: 'Sensors sprayed to match your paint for an OEM look.' },
      { title: 'Clean OEM-style install', body: 'Wiring hidden and integrated for a factory-fitted result.' },
    ],
    benefits: ['Front & rear coverage', 'Colour-coded to your car', 'OEM-look finish', 'Audible warnings', 'Cheaper than repairs', 'Protects bumpers'],
    brandSlugs: [],
    galleryKey: 'Parking Sensor',
    feature: '/images/gallery/parking/reverse-sensors.png',
    metaTitle: 'Parking Sensors Fitted East London | TJ Mods | Colour-Coded',
    metaDescription:
      'Front & rear colour-coded parking sensors fitted in Ilford. OEM-look finish, cheaper than bumper repairs. Call TJ Mods on 0208 478 7327.',
  },
  {
    slug: 'audio-installation',
    name: 'Audio Installation',
    navLabel: 'Audio Installation',
    icon: 'Volume2',
    short:
      'Screens, speakers, head face units, internal lighting systems, you name it, we can do it.',
    heroEyebrow: 'Visual & audio installation',
    heroTitle: 'Screens, speakers, head units - you name it',
    heroLead:
      'Screens, speakers, head face units, internal lighting systems, you name it, we can do it.',
    intro: [
      'Upgrade the way your car sounds and feels. From crisp head units and touchscreens to full speaker, subwoofer and amplifier builds, our installers wire everything cleanly and tune it to your taste.',
      'Screens, speakers, head face units, internal lighting systems - you name it, we can do it. Every install is finished to a professional standard with hidden wiring and a factory-tidy result.',
    ],
    includes: [
      { title: 'Head units & screens', body: 'Modern touchscreen head units with Apple CarPlay & Android Auto.' },
      { title: 'Speakers & subwoofers', body: 'Component speaker upgrades and boot-built subwoofer installs.' },
      { title: 'Amplifiers', body: 'Clean amplifier installs wired and tuned for the best sound.' },
      { title: 'Internal lighting systems', body: 'Ambient and footwell lighting integrated throughout the cabin.' },
    ],
    benefits: ['Touchscreen head units', 'Speaker & sub upgrades', 'Amplifier installs', 'Ambient lighting', 'Hidden, tidy wiring', 'Tuned to your taste'],
    brandSlugs: [],
    galleryKey: 'Audio Installation',
    feature: '/images/gallery/audio/audio-1.png',
    metaTitle: 'Car Audio Installation East London | TJ Mods | Screens · Speakers',
    metaDescription:
      'Car audio & visual installation in Ilford - head units, screens, speakers, subs, amps & ambient lighting. Call TJ Mods on 0208 478 7327.',
  },
  {
    slug: 'led-lighting-upgrade',
    name: 'LED Lighting Upgrade',
    navLabel: 'LED Lighting',
    icon: 'Lightbulb',
    short:
      'HID and LED lights help you to see where you are going and look great. Modernise your car today with these ultra bright, entirely road legal lights.',
    heroEyebrow: 'HID & LED lighting',
    heroTitle: 'Ultra-bright, entirely road-legal lighting',
    heroLead:
      'HID and LED lights help you to see where you are going and look great. Modernise your car today with these ultra bright, entirely road legal lights.',
    intro: [
      'HID and LED lights help you to see where you are going and look great doing it. Modernise your car today with these ultra-bright, entirely road-legal lights - a simple upgrade that transforms both safety and style.',
      'We fit exterior headlight and bulb upgrades as well as interior and ambient lighting, all installed to the correct standard so they stay road-legal and glare-free for other drivers.',
    ],
    includes: [
      { title: 'HID & LED headlights', body: 'Ultra-bright, road-legal headlight upgrades for clearer night vision.' },
      { title: 'Exterior bulb upgrades', body: 'Sidelights, indicators and rear bulbs upgraded to crisp LED.' },
      { title: 'Interior & ambient lighting', body: 'Footwell, dash and cabin ambient lighting in your choice of colour.' },
      { title: 'Road-legal fitment', body: 'Every upgrade set up correctly to stay within UK road regulations.' },
    ],
    benefits: ['Ultra-bright output', 'Entirely road-legal', 'Better night vision', 'Modern look', 'Interior & exterior', 'Long LED lifespan'],
    brandSlugs: [],
    galleryKey: 'Lighting Installation',
    feature: '/images/gallery/hid/hid-1.png',
    metaTitle: 'HID & LED Lighting Upgrade East London | TJ Mods | Road-Legal',
    metaDescription:
      'Ultra-bright, road-legal HID & LED lighting upgrades in Ilford - headlights, bulbs & ambient interior lighting. Call TJ Mods on 0208 478 7327.',
  },
  {
    slug: 'security',
    name: 'Security',
    navLabel: 'Security',
    icon: 'Lock',
    // NOTE: original site grid copy duplicated the PPF description (template error).
    // Replaced with accurate copy derived from the existing site's own security
    // imagery (ghost-alarm / immobiliser / trackers). Flagged in JUDGEMENT_CALLS.md.
    short:
      'Protect your investment with professional vehicle security - Ghost immobilisers, trackers and alarm systems that keep your car exactly where you left it.',
    heroEyebrow: 'Vehicle security',
    heroTitle: 'Keep your car exactly where you left it',
    heroLead:
      'Protect your investment with professional vehicle security - immobilisers, tracking devices and alarm systems fitted by experienced technicians.',
    intro: [
      'Vehicle theft is on the rise, and modern keyless cars are a prime target. We fit proven security solutions - from Ghost-style immobilisers that stop the engine starting without your unique code, to discreet GPS trackers and alarm systems.',
      'Whether you want to deter, immobilise or recover, we tailor a security package to your vehicle and budget so you can park with confidence anywhere in London.',
    ],
    includes: [
      { title: 'Immobilisers', body: 'CAN-bus immobilisers that block the engine starting without your secret code sequence.' },
      { title: 'GPS trackers', body: 'Discreet tracking devices for real-time location and recovery.' },
      { title: 'Alarm systems', body: 'Modern alarm upgrades with movement and tilt sensing.' },
      { title: 'Anti-theft hardware', body: 'Additional deterrents to keep keyless and high-value cars safe.' },
    ],
    benefits: ['Ghost-style immobilisers', 'GPS tracking & recovery', 'Alarm systems', 'Keyless-theft defence', 'Discreet fitment', 'Park with confidence'],
    brandSlugs: [],
    galleryKey: 'Security',
    feature: '/images/security/ghost-alarm.png',
    metaTitle: 'Car Security Ilford | TJ Mods | Immobilisers · Trackers · Alarms',
    metaDescription:
      'Professional car security in Ilford - Ghost-style immobilisers, GPS trackers & alarm systems. Call TJ Mods on 0208 478 7327.',
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

// 5 key USPs — VERBATIM (typo "Satisfication" corrected to "Satisfaction",
// see JUDGEMENT_CALLS.md). Lucide icons per the brief.
export const usps = [
  { title: 'Quick Service', icon: 'Zap', body: 'Most modifications turned around fast, with minimal time off the road.' },
  { title: 'Secured Service', icon: 'ShieldCheck', body: 'Your vehicle is in safe, insured hands from drop-off to collection.' },
  { title: 'Expert Employees', icon: 'Award', body: 'Skilled installers with 15+ years of hands-on modification experience.' },
  { title: '100% Satisfaction', icon: 'CheckCircle', body: 'We finish to a standard we are proud to put our name to - every time.' },
  { title: '24/7 Fast Support', icon: 'Phone', body: 'Questions before or after your visit? We are quick to respond.' },
];
