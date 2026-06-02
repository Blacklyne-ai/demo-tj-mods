// ─────────────────────────────────────────────────────────────
// TJ Mods — REVIEWS POLICY (see JUDGEMENT_CALLS.md)
//
// Per Blacklyne policy, customer reviews are sourced ONLY from
// Google Reviews via the Google Place Details API.
//
// The existing tjmods.co.uk homepage shows 5 testimonials
// (Milan Patel, chrissie lacey, AD Joha Hilaly, raymond klarnett,
// W4LS). These were CORRECTLY NOT migrated. Nothing is fabricated.
//
// At static-build time there is no Place Details API key available,
// so the homepage renders an honest trust panel + a "read / leave a
// Google review" CTA and the integration note below. Once the
// operator wires the Place Details API (business name "Proper Mods
// Ltd"), populate `googleReviews` and set mode to 'live'.
// ─────────────────────────────────────────────────────────────

export interface GoogleReview {
  author: string; // first name + initial (anonymised), e.g. "Milan P."
  rating: number; // 1–5
  text: string;
  relativeTime?: string;
}

export const reviews = {
  mode: 'placeholder' as 'placeholder' | 'live',

  // Populated only when the Place Details API is integrated. Empty by design.
  googleReviews: [] as GoogleReview[],

  // Shown when mode === 'placeholder'
  placeholderNote:
    '15+ years of customer trust - real Google Reviews to be displayed via Place Details API integration.',

  // Aggregate is intentionally not asserted until the API supplies it.
  aggregate: {
    available: false,
    value: '',
    count: 0,
  },
};
