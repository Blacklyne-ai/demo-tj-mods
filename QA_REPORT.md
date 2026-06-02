# TJ Mods - QA Report

Build: Astro 5 (static) · Tailwind v3.4 · @lucide/astro 1.16 · @astrojs/sitemap.
Output: `/dist` (15 HTML pages, **no `_worker.js`**). Verified on the dev preview
(localhost:4356) at desktop/tablet/mobile via screenshots + DOM inspection.

| # | Check | Result |
|---|-------|--------|
| 1 | Visual @ 1920/desktop, 768/tablet, 375/mobile | PASS - hero, sections, nav, footer render; layout reflows cleanly |
| 2 | Floating pill nav · glass-morphism · mobile hamburger · phone + WhatsApp CTAs · Services mega-menu | PASS - 80%-width centred glass pill, backdrop-blur, 7-service mega-menu, hamburger overlay |
| 3 | Animations - 4-slide hero auto-rotate + manual controls, hover, gallery zoom + lightbox, scroll-reveal, reduced-motion | PASS - carousel rotates (6s) + prev/next/dots; fade-in reveals (`is-visible` confirmed); lightbox opens/navigates/closes; `prefers-reduced-motion` honoured |
| 4 | Content - 7 services (verbatim), 5 USPs, 8 brands, 15yr heritage, phone/email/address/hours, social, dual naming, TJ founder | PASS - see JUDGEMENT_CALLS.md |
| 5 | `npm run build` OK · `/dist` HTML, no `_worker.js` · no console errors | PASS - 15 pages, static, no worker file |
| 6 | Unique titles · meta ≤155 · Schema.org valid · sitemap · robots.txt | PASS - all titles unique; **all 15 descriptions ≤155**; JSON-LD AutoRepair+LocalBusiness + per-service Service parses; sitemap-index.xml + sitemap-0.xml; robots.txt points to correct domain |
| 7 | UK English · £ GBP · UK phone · DD/MM/YYYY | PASS - colour, organisation, accredited, customise; 0208 478 7327; "Last updated: 02/06/2026" |
| 8 | Privacy + Cookie + Terms · UK GDPR cookie banner | PASS - all three present (UK GDPR/PECR), consent banner with Accept/Reject + localStorage |
| 9 | Live opening-hours status JS · Mon-Sat pattern · CSS dots (no emoji) | PASS - showed "Closed · Opens Wednesday 9am" (Tue evening); updates every 60s; styled `.status-dot`, no emoji |
| 10 | Light mood inherited · no dark/light toggle | PASS - single light mood, no toggle |
| 11 | Brand colours match logo (charcoal-black + crimson) | PASS - `#0F0F0F` + `#D71E28` sampled from logo |
| 12 | Original TJ Mods logo in header | PASS - real crest artwork (`/logo.png`, 900×722, transparent) |
| 13 | NO EMOJI anywhere | PASS - grep of src + dist = **0 emoji** |
| 14 | Mobile performance (LCP/CLS/INP) | PASS (by construction) - LCP hero re-encoded to 216 KB JPEG, `loading=eager` + `fetchpriority=high`; images carry width/height (low CLS); minimal vanilla JS (low INP) |
| 15 | Accessibility - keyboard, focus rings, WCAG AA | PASS - global `:focus-visible` red ring; all images have alt; carousel/menu are real `<button>`s; mega-menu `focus-within`; AA contrast (charcoal/white, `red-deep` for red text on light) |
| 16 | Reviews source - Google only; 5 old reviews excluded | PASS - placeholder + Place Details API note; old reviews NOT migrated (see JUDGEMENT_CALLS.md) |
| 17 | Gallery filter (8 categories incl. All) + lightbox | PASS - 58 images, filter verified (Car Wrapping → 12), lightbox open/nav/close |
| 18 | 8 brand logos | PASS - 3M, SunTek, LLumar, Premium Shield, Global Window Film, Hexis, Avery Dennison, Orafol |
| 19 | Video embed | SUBSTITUTED - original MP4 unobtainable; cinematic real-photo "featured work" band used (see JUDGEMENT_CALLS.md #8) |
| 20 | QA_REPORT.md + JUDGEMENT_CALLS.md | PASS - this file + JUDGEMENT_CALLS.md |

## Pages (15)
`/` · `/about-us` · `/services` · `/services/window-tinting` · `/services/car-wrapping` ·
`/services/paint-protection-film` · `/services/parking-sensors` ·
`/services/audio-installation` · `/services/led-lighting-upgrade` · `/services/security` ·
`/gallery` · `/contact-us` · `/privacy-policy` · `/cookie-policy` · `/terms`

## Automated verification
- **Broken images:** 0 across home (32 imgs), services, gallery (58 imgs), service detail,
  contact, about - confirmed via DOM `naturalWidth` probe.
- **Horizontal overflow:** none (`scrollWidth == innerWidth` at every breakpoint).
- **Single `<h1>` per page:** confirmed on all 15 pages.
- **Meta descriptions:** all ≤155 chars; titles unique (53-87 chars).

## Notes / recommendations
- Integrate Google **Place Details API** to display live Google reviews (see JUDGEMENT_CALLS.md #1).
- Re-add the original `window-tinting.mp4` if the operator can supply it (#8).
- Confirm Car Wrapping / Security copy and the Hands Free Kit service (#3, #4, #5).
- Run a live Lighthouse pass on the deployed Cloudflare Pages URL for final scores.
