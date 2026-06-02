# TJ Mods - Car Modification Specialists, East London

A premium, 2027-grade redesign of [tjmods.co.uk](https://tjmods.co.uk) for **TJ Mods**
(legal name **Proper Mods Ltd**) - a car-modification studio in Ilford, East London with
15+ years' experience across window tinting, car wrapping, paint protection film, parking
sensors, audio, LED lighting and security.

Design is brand-new; all business content is preserved from the existing site.
See **[JUDGEMENT_CALLS.md](./JUDGEMENT_CALLS.md)** and **[QA_REPORT.md](./QA_REPORT.md)**.

## Tech stack
- **Astro 5** - static output (no SSR, no adapter, no `_worker.js`)
- **Tailwind CSS v3.4** via `@astrojs/tailwind` (v4 is avoided - it breaks Cloudflare Pages builds)
- **@lucide/astro 1.16** for icons (brand/social logos are inline SVG - Lucide has none)
- **@astrojs/sitemap**
- Fonts: Archivo (display) · Inter (body) · JetBrains Mono (numerals) via Google Fonts

## Develop
```bash
npm install
npm run dev      # http://localhost:4321 (or: npm run dev -- --port 4356)
npm run build    # outputs static HTML to /dist
npm run preview
```

## Deploy - Cloudflare **Pages** (not Workers)
- Framework preset: **Astro**
- Build command: **`npm run build`**
- Build output directory: **`dist`**
- No adapter / no SSR - plain static HTML.

## Project structure
```
src/
  components/   Header, Footer, Hero (4-slide carousel), ServiceCard, ServiceDetail,
                BrandStrip, ReviewsSection, MapBlock, OpeningHours, ContactMethods,
                QuoteForm, Faqs, CtaBand, PageHero, SectionHeading, SchemaOrg, Icon,
                FloatingCTA, CookieBanner
  data/         site.ts · services.ts · brands.ts · gallery.ts · reviews.ts · content.ts
  layouts/      Layout.astro
  pages/        index, about-us, services/(index + 7 services), gallery, contact-us,
                privacy-policy, cookie-policy, terms
  styles/       global.css (design system - single source of palette via :root)
public/
  logo.png · favicon.svg · robots.txt · images/ (scraped from the existing site)
```

## Design system
Charcoal-black `#0F0F0F` + brand crimson `#D71E28` (sampled from the TJ Mods logo), with
chrome-silver and amber accents. All colours live as RGB triplets in `:root`
(`src/styles/global.css`) so the whole palette can be retuned from one place. Light mood
only, no dark/light toggle. Zero emojis - icons are Lucide or inline SVG.

## Business details (verbatim)
**TJ Mods** (Proper Mods Ltd) · 225 Green Lane, Ilford IG1 1XR · 0208 478 7327 ·
info@propermods.com · Mon-Sat 9am-5pm, Sun closed ·
[Facebook](https://www.facebook.com/propermodsessex) ·
[Instagram](https://www.instagram.com/propermods/) ·
[Twitter](https://twitter.com/propermods)
