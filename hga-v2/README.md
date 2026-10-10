# HGA v2 (Barlow, image led, light and dark)

Second design direction for the HGA pre sale site. Same colors and logo as v1; Barlow type, heavier imagery, and conversion modules around the buy box.

**2026-10-10 (pm): Ver.2 copy (Joshua, with Trevor's feedback) and four variations.** Hub: `variations.html`. A `index.html` story order; B `shop.html` e-commerce first; C `luxe.html` luxury collectible (dark by default); D `cro.html` UX and CRO recommendation with rationale notes. Variations share sections from `index.html` through `<!-- @include id -->` in `_build/build.py`. The copy brief in `_brief/` is retired: all variations now use Joshua's Ver.2 copy verbatim (177 of 204 lines; the rest are house style) and differ only in layout. The pre sale home carries the buy box in the hero. Copy instructions for Joshua live in Figma, builds page, section 04, as numbered notes beside the page. Figma now has three pages: builds, style guide, inspiration.

**2026-10-10 (am): home page rebuilt to the client's "Behind The Glass LP" brief** (Glass Box Grading, AI assisted grading, Founder's launch, the apology opener, audience grid, ten benefits, two testimonial rows, uCollect section with stats, how it works, See / Know / Get more feature groups, Founder's slots, 15 day guarantee, closing). The previous v2 home is kept at `_notes/index.pre-brief.html`.

Brief items that need the client's answer before launch:
1. **Pricing.** Ver.2: Poly $29, Glass $200 pre-launch, "save 75% compared to launch pricing", no launch prices given. The pages derive $116 / $800 from the 75% claim. Confirm the real launch prices with Trevor.
2. **Stats:** 90,000+ customers, 180,000+ cards graded, 85%+ want more transparency, up to 80% savings. All from the brief, no source given.
3. **Testimonials** are dashed placeholders ("Testimonial to come"). Need three to six real quotes with names.
4. **Hero video** is a poster frame with a play button; no film exists yet.
5. **New claims from the brief:** AI assisted grading, custom labels, special edition launch label, priority calendar access, Club U benefits, NFC verification (brief says planned), free Glass upgrade for Flawless (brief says HGA is considering). The page uses the brief's hedged wording for the last two.
6. **Brand spelling:** the brief writes U-Collect; the logo and the rest of the site use uCollect, so the page uses uCollect.
7. Card type tiles show Sports and Pokémon with real slabs; Yu-Gi-Oh!, Magic, UFC and Disney are text tiles until there is cleared imagery.

- View: double click `Open HGA v2.command` or run `python3 -m http.server 8767` here. Live preview: https://raycazy.github.io/AI-workflow-tasks/hga-v2/
- Dark mode: the sun/moon button in the header, or add `?theme=dark` (or `?theme=light`) to any URL. The choice is remembered per browser.
- Type: Barlow only (800 display, 700 headings, 600 labels, 400 body); cert numbers and data in Barlow SemiBold with tabular numerals. The Condensed, Semi Condensed and JetBrains Mono files remain in assets/fonts but are unused. Self hosted in `assets/fonts/` (SIL Open Font License).
- Home: pedestal hero with the 3D slab and live record chips, USP ticker, counters, the four subgrade pillars with real thresholds, the black box / glass box switch, the offer (sticky buy box beside USPs, "Collectors asked" and sample collector photos), the spec table, a photo process rail, a display grid, FAQ and the closing CTA.
- PDP: 6 view gallery, buy box with USPs and "Collectors asked" directly under it, "Up close" image grid, comparison, process and FAQ.
- Motion: GSAP (cdnjs) for reveals, counters and parallax; falls back to static without it.
- Build: `python3 _build/build.py`. v2 styling is `assets/v2.css` on top of the shared `assets/hga.css`; dark tokens live at the end of `v2.css`.
- Imagery: `assets/gen/` (Figma AI on the YAMU Media plan). Collector scenes (`ugc-*`) and the display shelf are AI backplates with HGA's real slab renders composited in; they're labelled "Sample" on the page until real collector photos exist.
- Same open items as v1 (see `../hga_redesign/README.md`): pricing confirmation, "patented", booklet claim, Club U anchor, insurance math, legacy details.
