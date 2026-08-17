# Codename Hi-Five (Kura Homes) Lead-Gen Landing Page

High-conversion, mobile-first Meta Ads lead-generation landing page built for **"Codename Hi-Five"** by **Kura Homes** ("55 Years of Trust").

---

## 🎨 Design System (`design.md`)

- **Palette:**
  - Dark Sienna (`#3A1C11`) — Primary headlines, wordmark, nav, footer, dark section background.
  - Alabaster (`#F5F3E6`) — Main page background, reversed text, crisp content cards.
  - Caramel (`#CE793A`) — Accent CTA sparks, stat numbers, hover focus rings.
  - White Chocolate (`#EEE8DE`) — Card backgrounds & input fields.
  - Noir Black (`#1B1717`) — High-contrast body text & legal disclaimers.
- **Typography:** Gumani for display headlines & numbers, Figtree for body & UI elements.
- **Logo Usage:** Codename Hi-Five mark placed inside a light Alabaster holding box on dark backgrounds per Kura brand guidelines.

---

## 📐 Architecture & 17 Sections Built

1. **Sticky Header / Navigation:** Logo holding box, anchor links, Phone & WhatsApp CTAs, "Enquire Now" modal trigger.
2. **Hero Section:** Dark Sienna scrim background video, HMDA & RERA approval badge, positioning headline, scrolling stat ticker, dual CTAs.
3. **Key Facts Strip:** Compact 5-fact horizontal info bar (Configuration, Price, Carpet Area, Location, Status) with tap-to-enquire modal pre-tagging.
4. **Why Hi-Five / USP Grid:** 4 structured cards (Unmatched Connectivity, Balanced Nature, Elevated Clubhouse, Accessible Luxury).
5. **Price & Value Section:** Configuration price cards (2 BHK 1100 & 1250 sqft, 3 BHK 1450 & 1650 sqft), buyer checklist, gated price sheet CTA.
6. **Interactive EMI & Cost Calculator:** Real-time EMI computation sliders (Loan, Interest Rate, Tenure) with Owner-Occupied vs Rent-Out scenario comparison.
7. **Location & Connectivity:** 8-highlight location card grid, Google Maps embed, and ORR Exit-3 vs Exit-5 vs Exit-6 corridor price analysis.
8. **Amenities Section:** Top stat banner (25K sqft clubhouse, 40+ amenities, 70% open space), 4 category filter tabs, clubhouse showcase.
9. **Master Plan & Block Layout:** Interactive site layout visual, Block A/B/C/Clubhouse specifications, gated site plan PDF download.
10. **Floor Plans Section:** Filterable grid by BHK & Facing, watermarked confidential plan thumbnails, unit-prefilled enquiry triggers.
11. **Visual Gallery:** Tabbed gallery (Exterior, Clubhouse, Amenities, Interiors) with full-screen lightbox modal.
12. **Video & Virtual Tour:** Main video player (Hero drone flythrough), 3-card video selector row for virtual tours and explainer videos.
13. **Construction Progress / Delivery Assurance:** 100% Completed Ready-to-Move milestone timeline & physical unit visit booking.
14. **Trust Section:** "Why Buyers Trust Kura Homes" 4 pillars (55+ Years of Excellence, RERA & HMDA compliant, 5000+ Happy Families, 0 Compromise).
15. **Standalone Brochure Block:** Gated PDF e-brochure download block.
16. **Final Lead Capture Form:** Name, 10-digit phone, email, unit interest, visit date, message, 3-icon trust block, privacy consent.
17. **Footer:** Brand lockup holding shape, statutory RERA & HMDA info, quick links, legal disclaimer.

### Persistent Conversion Hooks:
- **Mobile Sticky Bottom Bar:** Call Now | WhatsApp | Enquire Now (always visible on mobile).
- **Floating Desktop WhatsApp Button.**
- **Exit-Intent Popup Modal:** Configurable desktop mouse-leave popup.

---

## 🛠️ Lead Storage Integration (`/api/lead`)

Every form post on the site forwards to `/api/lead`:
- Generates server-side **Asia/Kolkata (IST)** timestamp.
- Protects against bot spam with hidden honeypot validation.
- Captures `sourceSection`, full `pageUrl`, and `UTM` tracking parameters.
- Webhook ready to append rows directly to Google Apps Script / Google Sheets.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Production Build
npm run build
```
