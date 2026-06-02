# TJ Mods (Proper Mods Ltd) - Judgement Calls & Operator Review Items

A complete 2027 redesign of the existing Joomla/Gantry 5 site at **tjmods.co.uk**.
Design is entirely new; **content and business information are preserved exactly** from
the existing site. This document records every assumption, correction and item that
needs operator confirmation.

---

## 1. Customer reviews - NOT migrated (Google-Reviews-only policy)

The existing homepage shows **5 testimonials**:

> Milan Patel · chrissie lacey · AD Joha Hilaly · raymond klarnett · W4LS

Per Blacklyne policy these were **correctly NOT migrated**. Nothing was fabricated.
The homepage "Why people love our team?" section instead renders an **honest trust
panel** (15+ years, 8 brand partners, Mercedes-to-Aston range) plus a Google logo and a
"Read & leave a Google review" CTA, with the note:

> "15+ years of customer trust - real Google Reviews to be displayed via Place Details API integration."

**Operator action:** Wire up the Google **Place Details API** (business name **"Proper
Mods Ltd"**, 225 Green Lane, Ilford IG1 1XR) and populate `src/data/reviews.ts`
(`googleReviews` array + set `mode: 'live'`); the homepage will then render the top 5
real Google reviews with star icons automatically. If Google returns too few reviews,
encourage existing reviewers to also post on Google.

## 2. "100% Satisfication" typo corrected → "100% Satisfaction"

The existing site lists the USP as **"100% Satisfication"** (misspelt). Corrected to
**"100% Satisfaction"** on the new site (`src/data/services.ts` → `usps`).

## 3. Car Wrapping service copy

The original **services grid** duplicated the Window Tinting description on the Car
Wrapping card (copy-paste error on the old site). We used the **genuine Car Wrapping
copy** that appears verbatim in the old site's hero slider instead:

> "Matte, Gloss, Colour Changing, you name it we can do it. Come to our garage and see our range of colours."

No new claims invented. **Operator may supply richer Car Wrapping copy** if desired.

## 4. Security service copy (was duplicated from PPF)

The original Security service card **duplicated the PPF description** (template error).
We replaced it with accurate copy **derived from the existing site's own Security
imagery** - the old site ships `ghost-alarm.png`, `immobiliser.png` and `trackers.png`,
which confirm the real offering. New copy describes **Ghost-style immobilisers, GPS
trackers and alarm systems**. Nothing outside what the site's own assets evidence was
invented. **Operator should confirm/expand** the exact security products offered.

## 5. "Hands Free Kit" - flagged, not built as a separate service

The old homepage slider mentions a **Hands Free Kit** (with a placeholder Window Tinting
description). It is **not** one of the 7 core services and was **not** built as a
separate page (no such page was requested). **Operator to confirm** whether Hands Free
Kit is a standalone service or part of **Audio Installation** (where it most likely
belongs).

## 6. Dual brand naming - TJ Mods + Proper Mods Ltd

The business uses two names. Handled throughout:
- **TJ Mods** - primary display/brand name (logo, header, page titles, headlines).
- **Proper Mods Ltd** - legal/trading name, shown in the **footer**, **legal pages**
  (Privacy/Cookie/Terms), and **Schema.org** (`legalName`). Footer copyright reads
  "© 2026 Proper Mods Ltd (trading as TJ Mods)".
- **Founder "TJ"** is referenced as "TJ and the team" (as named by customers in the old
  reviews). Full ownership/team biography was **not invented** - heritage claims are
  limited to the safe, supported set (15+ years, since ~2010, Ilford, fully accredited,
  brand-partner, Mercedes-to-Aston range). **Operator to confirm** team/ownership detail.

## 7. Logo - original artwork preserved (rasterised)

The original `tj-mods-logo.svg` was **not retrievable** (origin blocked from the build
environment; not archived in the Wayback Machine). We rasterised the **live SVG** via an
image proxy into a crisp **900×722 transparent PNG** (`/public/logo.png`) - this is the
**real logo artwork**, used as-is in the header and footer. A matching `TJ` monogram
`favicon.svg` was created in brand colours. **No logo redesign was performed.**

## 8. Hero video (`window-tinting.mp4`) - unobtainable, substituted

The original homepage video `/images/video/window-tinting.mp4` was **unreachable**
(origin blocked; not in the Wayback Machine). Per the brief's Level-4 fallback we
replaced it with a **cinematic "real work" featured band** on the homepage using a real
high-resolution **window-tinting photo** from the site (`wt-5`, Ken-Burns/overlay
treatment) and the "From a Mercedes Benz through to an Aston Martin" message. **Operator
can drop the original MP4 into `/public/images/hero/` and swap it back in** if available.

## 9. Colour palette - taken from the logo (logo-authority rule)

The logo is a charcoal-black shield with a **crimson-red** "TJ" and a sports-car
silhouette. The palette is sampled from it: **charcoal-black `#0F0F0F`** + **brand
crimson `#D71E28`** (with `#E63946` as the brighter hover tint per the brief), chrome-
silver and amber accents. This is faithful to the existing brand, not invented.

## 10. Contact form - no backend (privacy-first), tiles-first

Per the brief (subject dropdown, GDPR consent) **and** Blacklyne's "contact tiles, no
backend" preference, the contact page **leads with Call / WhatsApp / Email / Visit
tiles**, and the enquiry form is **backend-free**: on submit it composes the message and
opens the visitor's **own email client or WhatsApp** (nothing is stored on the site).
Subject dropdown pre-fills General Enquiry + each of the 7 services + Quote Request.

## 11. Hero imagery optimised for performance

Hero/featured images were re-encoded to ~1600px JPEGs (216-512 KB) from the heavy source
PNGs for fast LCP. The Parking Sensors hero uses a premium-car backdrop because the
original `reverse-sensors.png` (575px) was too small for a full-bleed hero; the topical
parking-sensor image is still used on the Parking Sensors service page and in the gallery.

## 12. Legal pages made indexable

Privacy/Cookie/Terms are standard, indexable pages (no `noindex`) so the Lighthouse SEO
audit stays at 100 and they appear consistently in the sitemap.

---

### Preserved exactly (no changes)
7 services · 8 brand partners (3M, SunTek, LLumar, Premium Shield, Global Window Film,
Hexis, Avery Dennison, Orafol) · 4 verbatim hero slides · 5 USPs · 7 gallery categories ·
15-year heritage + badge · phone **0208 478 7327** · email **info@propermods.com** ·
**225 Green Lane, Ilford IG1 1XR** · Mon-Sat 9am-5pm, Sun closed · Facebook
(propermodsessex) · Instagram (@propermods) · Twitter (@propermods) · "Make your car look
like new" · "Professional Car Modification Company in East London".
