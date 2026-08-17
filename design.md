# Codename Hi-Five × Kura Homes — Landing Page Design System

Source: Kura Brand Guidelines (R3, 13-01-26), **Kura Homes vertical only** — Kura Luxe (Persian Plum) and Kura Banquets (Rifle Green) are explicitly excluded from this project.

---

## 1. Brand Essence

Kura Homes — "55 Years of Trust." Warm, grounded, timeless. The brand mark is a hand-drawn swirl motif (abstract roof/cloud line-art) sitting above the wordmark "KURA HOMES," underscored by a thin rule. This swirl motif is the one recurring graphic device available to us for dividers, section markers, and loading/empty states — use it sparingly, never as a background texture behind text.

Tone for Hi-Five copy: confident, transparent, numbers-forward (matches the Speed Housing reference's factual, ROI-driven voice) but delivered in Kura's warmer, more established, "55 years of trust" register — less "growth-corridor hustle," more "established builder you can trust."

---

## 2. Colour System

### Core palette (Kura Homes only)

| Token | Hex | Role |
|---|---|---|
| `--color-primary` (Dark Sienna) | `#3A1C11` | Primary brand color. Headlines, wordmark, primary buttons, dark section backgrounds, footer. |
| `--color-secondary` (Alabaster) | `#F5F3E6` | Secondary/base. Main page background, light section backgrounds, reversed text on dark. |
| `--color-accent` (Caramel) | `#CE793A` | Accent only. CTA highlights, active states, stat numbers, hover states, badges, form focus rings. Use at ≤10% of any screen — it's a spark, not a base. |
| `--color-neutral-light` (White Chocolate) | `#EEE8DE` | Card backgrounds, alternating section bands, input backgrounds. |
| `--color-ink` (Noir Black) | `#1B1717` | High-contrast body copy on light backgrounds where Dark Sienna is too warm (fine print, legal text, dense data tables). |

### Tint/shade ramp (Dark Sienna family — for depth, gradients, hover/pressed states)

| Hex | Use |
|---|---|
| `#5E2B1B` | Lighter tint — secondary buttons, icon strokes on dark, hover state of primary button |
| `#3A1C11` | Base primary |
| `#28120C` | Darker shade — pressed/active states, deepest gradient stop, video overlay scrim |

### Application rules
- **Default page background:** Alabaster `#F5F3E6`. Never pure white.
- **Dark sections** (hero, footer, stats band, final CTA): Dark Sienna `#3A1C11` with Alabaster/White Chocolate text.
- **Caramel is a CTA/emphasis color, not a section background.** Use it for: primary button fill (alt to Dark Sienna — pick one and stay consistent, recommend Dark Sienna buttons with Caramel used for numbers/badges/underlines), price figures, "40+ Amenities" style stat callouts, active nav underline, form success states.
- **Never** place the Kura logo directly on a Caramel or busy photo background — per brand book, on dark/cluttered backgrounds the logo goes inside a light "holding shape" (rounded rect, Alabaster/White fill) with padding ≥ the cap-height of the "K."
- Do not introduce any hue outside this palette (no blues/greens from Kura Luxe/Banquets, no arbitrary grays — use Noir Black at reduced opacity for grays instead).

---

## 3. Typography

| Role | Typeface | Weight | Notes |
|---|---|---|---|
| Headline / Hero display | **Gumani** | Regular | Bold, elegant serif for H1/H2 and the project wordmark treatment ("CODENAME HI-FIVE" logo lockup already set in this style — do not re-letter it). |
| Sub-headline | **Figtree** | Medium | Section intros, card titles, nav labels. |
| Body text | **Figtree** | Regular | Default paragraph text, form labels, list items. |
| Body alternate (refined contexts) | **Playfair** | Light | Optional — long-form descriptive copy (e.g. "About the Project" narrative blocks) where a more editorial feel is wanted. Use sparingly, don't mix with Figtree in the same block. |
| Accent / Quote / Callout | **Gumani** | Regular | Pull-quotes, testimonial highlights, single-stat emphasis ("₹75L*", "25,000 sq.ft"). |

**Figtree weight scale available:** Light, Regular, Medium, Semi-bold, Bold — use Semi-bold/Bold only for UI elements (buttons, form labels, nav), never for long paragraphs.

### Suggested type scale (web)
```
--text-hero:      clamp(2.5rem, 6vw, 5rem)      Gumani Regular   (H1)
--text-h2:        clamp(2rem, 4vw, 3rem)        Gumani Regular
--text-h3:        clamp(1.5rem, 2.5vw, 2rem)    Figtree Medium
--text-subhead:   1.125rem – 1.25rem             Figtree Medium
--text-body:      1rem – 1.0625rem                Figtree Regular
--text-caption:   0.875rem                        Figtree Regular
--text-stat:      clamp(2rem, 5vw, 3.5rem)       Gumani Regular, Caramel or Dark Sienna
```

Fallback stack: Gumani → serif fallback (e.g. "Playfair Display", Georgia, serif). Figtree → sans fallback (system-ui, Arial). Load via self-hosted `.woff2` if licensed, else nearest Google Fonts match — flag to designer if Gumani isn't available as a webfont license.

---

## 4. Logo Usage (Hi-Five lockup)

The uploaded lockup — "— CODENAME —" over "HI-FIVE" in Dark Sienna Gumani, centered rule flourishes, on Alabaster — is the **project sub-brand mark**. Treat it like the Kura wordmark:

- **Clear space:** minimum = ¼ the height of the wordmark, on all sides (matches Kura's "X = 1/4.5 of total height" rule).
- **Minimum size:** 80px height digital / 20mm print. Never scale below this.
- **Never:** distort, skew, recolor outside the palette, reduce opacity, blur, or crop.
- **On dark or photo backgrounds:** place inside a light (Alabaster or White Chocolate) rounded holding-shape with padding ≥ the cap-height of the wordmark's tallest letter — exactly as prescribed for the Kura Homes logo on the "Usage" brand book page.
- Pair "Codename Hi-Five" (project identity, used for hero/nav/OG) with a small "A Kura Homes Project" / Kura Homes primary logo as the trust-endorsement mark in the footer and near RERA/legal copy — same relationship Speed Sanarelli uses with "A Speed Housing Project."

---

## 5. Component & Layout Language

**Grid:** 12-col desktop, 4-col mobile. Max content width ~1280–1360px, generous side padding (Kura's brand pages breathe — lots of negative space, not cramped).

**Buttons**
- Primary: Dark Sienna fill, Alabaster text, Gumani or Figtree Semi-bold label, pill or 8px radius, subtle Caramel glow/underline on hover.
- Secondary: outline in Dark Sienna, transparent fill, fills Caramel or Dark Sienna on hover.
- Every button copy is action-specific, never generic: "Download Brochure," "Get Price List," "Schedule a Site Visit," "Check EMI" — not "Submit."

**Cards** (amenity, floor plan, gallery): White Chocolate `#EEE8DE` background, thin 1px Dark Sienna/10%-opacity border or soft shadow, rounded corners (12–16px), image top / Figtree label bottom.

**Section rhythm:** alternate Alabaster ↔ White Chocolate ↔ Dark Sienna bands so the page has visible rhythm without leaving the palette — mirrors how speedhousing.in alternates light/dark full-bleed sections.

**Dividers/motif:** thin horizontal rule flourish (as seen either side of "CODENAME" in the lockup) usable as a section-title underline device; the swirl icon usable as a small decorative mark above section eyebrows — never tiled as a pattern.

**Forms:** White Chocolate input fields, Dark Sienna border-on-focus, Caramel for validation success, standard red-family (Noir Black + a muted red, not brand-driven) for error states only. Sticky/floating "Enquire Now" button bottom-right on scroll (mobile: bottom sticky bar with Call / WhatsApp / Enquire).

**Imagery treatment:** warm, slightly desaturated color grade consistent with the Dark Sienna/Caramel palette (avoid cool-toned or overly blue sky photos without grading) so Speed's source photography reads as "on-brand" once recolor-graded, not just reused.

---

## 6. What NOT to do
- No Kura Luxe (Persian Plum `#772122`) or Kura Banquets (Rifle Green `#374F39`) colors or logos anywhere.
- No pure white `#FFFFFF` backgrounds — use Alabaster/White Chocolate.
- No stock "real estate blue" gradients or unrelated accent colors.
- No dense paragraphs in Gumani — display serif only, never body copy.
- Don't let Caramel dominate a section — it's a highlight color used at low frequency, high impact.
