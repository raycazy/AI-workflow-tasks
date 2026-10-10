# HGA website redesign (pre sale state)

Conversion focused redesign of hybridgrading.com, built on HGA's existing brand, assets and copy. It covers the full shopping flow (home, PDP, cart, checkout, thank you) plus the content pages agreed on the 2026-10-08 strategy call.

## How to view
Double click `Open HGA redesign.command`, or run `python3 -m http.server 8766` in this folder and open http://localhost:8766/. The 3D slab viewer only runs from a server, not from a bare file.

## Pages
| Page | File | Notes |
|------|------|-------|
| Home / pre sale LP | `index.html` | Modular hero. Swap the audience with `?a=collector`, `?a=dealer` or `?a=tcg` (the default is the promo angle). Everything below the hero stays the same. |
| PDP | `pass.html` | HGA 15 Grading Pass. Poly vs Glass choice, quantity with bulk presets, 3D slab gallery, sticky add to cart. `?h=poly` preselects Poly. |
| Cart | `cart.html` | Edit quantities, cross sell the other housing, "every possible cost" disclosure, sticky checkout bar on mobile. |
| Checkout | `checkout.html` | Distraction free header. Express pay, account, billing (tax only), card, gift option, terms consent, inline errors. |
| Thank you | `thank-you.html` | Pass cards, what happens next, a Feb 1 calendar file, account password, gifting, share. |
| Grading standards | `grading-standards.html` | Grading and Standards merged into one long page (Drew's ask): pricing, housings, process, scale, grade definitions, subgrade tabs, autograph, blind grading, report, policies. |
| Legacy HGA | `legacy.html` | Replaces "Pop report": legacy cert lookup, recertification and a notify list, plus the legacy FAQ. |
| About | `about.html` | Mission, what we rebuilt, the ten year vision ("not a flyby company"), and HGA's own writing rules. |
| FAQ | `faq.html` | A searchable database with topic filters, 48 answers so far. Add questions in `_build/faq_data.py`. |
| Sample Grade Report | `report.html` | The transparency proof page, linked from the home page, PDP and standards. |

The cart is kept in `localStorage` (`hga_cart`). Payments are not connected: placing an order stores a demo order and opens the thank you page. In production the cart and checkout map to rc1.ucollect.com.

## Editing
Page sources live in `_build/pages/*.html`. Shared styles are in `assets/hga.css`, and behaviour is in `assets/site.js` (site) and `assets/shop.js` (cart and checkout). Rebuild with:
```
python3 _build/make_faq.py && python3 _build/build.py
```
The header, footer and icon sprite are defined once in `_build/build.py`.

## Decisions taken from the meeting
- **Glass box vs black box** is the lead message. The comparison is framed as the questions a collector asks, so it makes no claims about named competitors.
- **Mobile first.** On a phone, the slab sits beside the stacked housing tiles so the CTA lands above the fold. A sticky buy bar appears on mobile, and the cart and checkout have their own sticky bars.
- **Poly vs Glass selection** appears in the hero, the home offer builder, the PDP and the comparison table.
- **Process is compact and interactive** on the home page (a six step portal stepper), with full depth on the standards page.
- **Four subgrades free** and the **Flawless upgrade to Glass** are featured on the home page and the PDP.
- **Every possible cost** (Trevor's requirement) is shown as a ledger on the home page and as a disclosure in the cart and PDP. The $10k insurance fee is framed as the one exception, not as an upcharge.
- **Booklets and new molds** appear on the home page, standards and About.

## Needs client confirmation before launch
1. **Pricing.** Drew said "$29" a grade twice on the call; the site says Poly $50. All prices live in one place (`PRICES` in site.js and shop.js).
2. **"Patented" Glass** and **"first to slab a six panel booklet"** come from Drew on the call, not from the site. Confirm both before they go live (booklet copy is written in the future tense).
3. **Price at open anchor.** $200 and $600 are the Club U member prices; standard is $240 and $720. The savings math uses the member price, and that is disclosed on the PDP, home and cart.
4. **Insurance math.** "$200 per $10,000" over $10k. Confirm whether it applies to total value or only to value above $10k, so we can add a worked example.
5. **Legacy details.** Lookup scope, recertification steps and pricing (around cost, per the call) are placeholders until JD's legacy FAQ arrives.
6. **Gift at checkout** is new. It uses the existing pass transfer feature.

## Generated imagery (Figma AI, YAMU Media plan, Gemini 3.1 Flash Image)
Files are in `assets/gen/`. Sources, label and screen overlays, and the composite scripts are in `_notes/gen-src/`.
- **Composites with HGA's real slab renders**, so the labels are genuine:
  - `display-shelf.webp`: an AI shelf with four real slabs (home band, About, Legacy hero, PDP).
  - `chip-tap.webp`: an AI desk and hand with a real Glass slab and a rendered HGA record screen (home bento, PDP).
- **AI photography** (no logos, no faces; swap for real facility shots when available):
  - `arrival-box`, `unboxing-still`, `lab-loupe`, `facility`
  - Macros: `macro-corner`, `macro-edge`, `macro-surface`, `centering`
- **Concept render:** `booklet-six-panel-concept.webp`, captioned as a concept on the page.

## Modern design layer
The last block of `assets/hga.css` holds the modern layer: rounded surfaces, pill buttons, sentence case section headings (the hero H1 stays italic caps), gapped cards instead of hairline grids, frosted glass chips, a bento grid and image bands. Delete that block to return to the squarer original look.

## Assets still needed
- Official Visa, Mastercard and Amex SVG marks for checkout.

## Brand notes
Brand tokens are unchanged from HGA's stylesheet, with two accessibility adjustments: muted text is darkened to `#6E6964` (5:1 contrast), and small red labels on light backgrounds use `#C81F24`. The meeting transcript is in `_notes/`.
