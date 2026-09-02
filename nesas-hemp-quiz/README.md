# Nesa's Hemp: "Find your ritual" quiz

**Live:** https://raycazy.github.io/AI-workflow-tasks/nesas-hemp-quiz/
**Deliverable:** design prototype only. No Shopify build, no theme code, no app.
**Reference brief:** takethesis.com/pages/quiz
**Open:** the live link, or `index.html` locally. The floating **Screens** button lists every screen so you can jump straight to any of them.

---

## 1. What this is

A clickable design prototype of a 12 question product finder for shop.nesashemp.com. It runs the whole flow end to end: intro, compliance notice, questions, three interstitials, name and email capture, a scoring screen, a results scorecard, and a personalised recommendation with a real add to cart layout.

The scoring and recommendation logic is real and deterministic, so different answer paths produce genuinely different results. That is deliberate: a quiz mockup with a hardcoded outcome hides the only decision that matters, which is what the quiz actually recommends.

Two verified paths:

| Path | Answers | Outcome |
|---|---|---|
| Aches, physical work, prefers drops | goal "ease the everyday aches", physical day, drops | **The foundation**, oil only, $134.99 |
| Nutrition gaps, prefers blending | goal "fill the gaps in what I eat", skips meals, blend | **The nutrition base**, powder only, $89.99 |
| Both signals strong | mixed goals plus poor diet plus "either works" | **The daily ritual**, oil and powder, $224.98 |

---

## 2. How it differs from Thesis, and why

Thesis was studied screen by screen with a scripted browser walk before anything was designed. What we kept, what we changed, and the reason:

| Thesis pattern | Our version | Why |
|---|---|---|
| Compliance interstitial before question one | Kept | The single most useful thing Thesis does. It is also the exact guardrail the Nesa's brand guide demands. |
| Single select advances on its own | Kept | Removes one tap per question across twelve questions. |
| "Why we ask" note under the options | Kept, rewritten | Thesis cites external studies. We explain **our own** reasoning instead, because we will not cite research we have not read. |
| Mid quiz proof interstitials | Kept, three of them | They break up a long form and carry proof at the moment attention dips. |
| "AVG 47%" population comparison on results | **Dropped** | Nesa's holds no population data set. Inventing an average to make a bar look worse is a fabricated statistic. |
| "Calculating using our proprietary data set", 41,794 studies | **Replaced** | We count what Nesa's can actually evidence: 14 lab tests, 7 certifications, 60 servings. |
| Centred single column, grey, top progress bar | **Split canvas**: forest photo rail plus warm ground stage | Photography is core to the brand guide. It also stops the quiz reading as a Thesis clone in a client review. |
| Results link straight to a standard PDP | Recommendation screen carries the **protocol**, not just the product | Nesa's has two SKUs, not eight. The personalisation value is in dose, timing and cadence. |

---

## 3. Screen map

| # | Screen | Notes |
|---|---|---|
| 01 | Intro | Headline, 3 min, 12 questions, 7 certification marks |
| 02 | Compliance notice | Not medical advice, no diagnosis questions, doctor referral for medication and pregnancy |
| 03 | Q1 age | 5 options |
| 04 | Q2 primary goal | 5 options, drives the largest scoring weight |
| 05 | Interstitial: 60 servings, 4.9 across 328 reviews | Review source stated honestly |
| 06 | Q3 areas to support | Multi select, 6 chips in a 2 column grid |
| 07 | Q4 what the day asks of your body | Why we ask |
| 08 | Q5 training frequency | |
| 09 | Q6 sleep pattern | Why we ask |
| 10 | Q7 when you notice it most | Why we ask, drives dose timing |
| 11 | Q8 diet in a normal week | |
| 12 | Interstitial: three ingredients, fourteen lab tests | Includes the sunflower seed oil correction |
| 13 | Q9 previous hemp or CBD experience | |
| 14 | Q10 what made it fall short | **Conditional**, shows only after "felt nothing" or "used to" |
| 15 | Q11 preferred format | Drives the oil against powder split |
| 16 | Q12 caffeine | |
| 17 | Q13 routine consistency | Why we ask |
| 18 | Interstitial: the routine is the whole product | |
| 19 | First name | |
| 20 | Email | Marketing consent stated plainly |
| 21 | Calculating | Counts up 14, 7, 60, then advances after 2.6s |
| 22 | Results scorecard | 5 dimensions, expandable rows |
| 23 | Recommendation | Products, plan selector, protocol, certifications, FDA disclaimer |

Twelve base questions plus one conditional. The counter in the stage header recalculates when the conditional question is skipped.

---

## 4. Scoring rubric

Five dimensions, each 0 to 100, clamped to 8 to 96. **Higher means the answers suggest that area is already steady. Lower means it is where the routine should be aimed first.** Anything under 60 is tagged **Focus**, anything at or above is **Steady**.

| Dimension | Fed by |
|---|---|
| Everyday comfort | primary goal, areas selected, day type, age |
| Sleep | sleep pattern, caffeine, primary goal, areas |
| Recovery | training frequency, day type, primary goal, areas |
| Stress load | primary goal, caffeine, sleep, areas |
| Daily nutrition | diet, primary goal, areas |

Exact weights are in the `scores()` function in `index.html`. They are tuned so that a genuinely average answer set lands most dimensions in the 60s and 70s, and only the areas a person actually flagged drop into Focus. A quiz that tells everyone everything is broken has no credibility.

**No population average is shown**, and the footnote on the results screen says so.

---

## 5. Recommendation logic

Two live SKUs, so three honest outcomes. Points accumulate to `oil` and `powder`:

- Primary goal comfort, sleep, recovery or stress: **oil +3**. Primary goal nutrition: **powder +3**.
- Each selected area: comfort, sleep, recovery, mood **oil +1**; nutrition, focus **powder +1**.
- Diet: mixed **powder +1**, mostly convenient **powder +2**, skipping meals **powder +3**.
- Format: drops **oil +2**, blend **powder +2**, either **+1 each**.

Then:

- `oil >= 4 && powder >= 4` gives **The daily ritual** (both products)
- else `oil >= powder` gives **The foundation** (oil only)
- else **The nutrition base** (powder only)

The protocol text on the recommendation screen varies on **format**, **when you notice it most**, **sleep pattern**, **routine consistency**, and **previous experience**. Five inputs, so two people who buy the same bottle still get a different routine.

---

## 6. Product facts, and where each one came from

Every number on screen is verified. Nothing is invented.

| Fact | Source |
|---|---|
| Certified Organic CBDa Hemp Extract, 1000mg, 1 FL OZ (30ml), $134.99 | `shop.nesashemp.com/products.json`, fetched 2026-09-01 |
| Certified Organic Full Spectrum Nutrition Powder with B17, $89.99 | same |
| 60 servings, half a dropper twice daily, held two minutes, roughly 30 days per bottle | official brand guidelines PDF |
| 3 ingredients: organic hemp seeds, organic hemp, organic sunflower seeds | official brand guidelines PDF |
| 7 certifications | official brand guidelines PDF, badge artwork from `outputs/nesas-hemp/pdp-redesign/assets/certs/` |
| 14 test third party lab panel, QR per batch | official brand guidelines PDF |
| 4.9 across 328 reviews | on site reviews, and the interstitial says so in the footnote |
| Oil subscribe and save $99.99 | 2026 Nesa's Hemp CRO audit |
| Product photography and lifestyle shots | Shopify CDN, `curl -sI` verified 200 before use |

### Two things need the client to confirm them

**1. The powder subscribe and save price ($74.99) is a placeholder.** There is no published subscription price for the powder anywhere we can verify. It is flagged in a code comment in `index.html`. Confirm it before this goes near a build.

**2. The lifestyle photography shows a 500MG bottle in the old cream label.** That is true of the brand's own published assets, including `nesa-pdp-oil-dropper-outdoors.jpg` and `nesa-pdp-bottle-inhand.jpg` in the live theme, so the quiz is no worse than the rest of the site. It is still a mismatch: the only live variant is 1000mg in the current green label, and the product card on the recommendation screen uses that correct shot. If there is a newer lifestyle shoot with the current bottle, swap the interstitial and rail images for it.

---

## 7. Compliance, which shaped the whole design

The brand guide dedicates a full spread to FDA and FTC exposure, and the 2026 CRO audit flags condition specific funnels as the classic warning letter trigger. A health quiz is exactly the format that gets brands in trouble, so:

- **No question asks about a diagnosis, a condition, a symptom or a medication.** Every question asks about lifestyle: how you move, sleep, eat and organise your day. Thesis does the same thing and it is the correct pattern.
- **The compliance notice is screen two**, before any data is collected.
- **No FDA drug buzzwords.** Nothing on any screen says diagnose, cure, mitigate, treat or prevent, except inside the required disclaimer itself.
- **No "1000x more potent than CBD"**, anywhere. The brand guide says retire it and the audit says it compounds the existing paid ad bans.
- **The sunflower seed oil contradiction is addressed head on** in the purity interstitial. It is the single clearest independent customer criticism on record (`outputs/nesas-hemp/research/voice-of-customer.md`), and pre empting it inside the funnel is cheaper than arguing it in reviews.
- **The required disclaimer** closes the recommendation screen verbatim.
- Results are framed as a self reported profile, never a measurement.

---

## 8. Design decisions

**Register:** brand surface. Expressive, `clamp()` type, photography led, motion allowed.

### The design system comes from the theme, not the brand guide

`brand-guides/nesas-hemp/brand-guide.md` still documents the pre rebrand system: Saira Condensed and Newsreader as web substitutes for Benton Modern Display and Brandon Grotesque, a warm `#F7F5EF` ground, and an orange `#FA8A1D` CTA. **That is out of date.** The theme we are building rebranded on 2026-08-13 to the approved Figma direction (`CRDdO76S8BAEXeggV2gHII`), and this prototype follows the theme.

Everything below was read out of `outputs/nesas-hemp/theme-boring-cro`, not invented:

| Token | Value | Source |
|---|---|---|
| Page ground | `#FFFFFF` | `config/settings_data.json` → `color_palette.background` |
| Ink | `#172620` | `color_palette.foreground`, the buy box `--d` |
| Forest | `#344C32` | the buy box `--f`, dark bands |
| Accent green | `#2F6B3F` | the buy box `--a`, tick strokes |
| Secondary text | `#4E6459` | `color_palette.color1`, the buy box `--g` |
| Border | `#DCD6CA` | the buy box `--ln` |
| Surface tint | `#F6F1E8` | the buy box `--sand` |
| Save tab yellow | `#FFDD00` | the buy box `--y` |
| Muted meta | `#82958C` | the buy box `--grey` |

**Type: Anton + Nunito.** `assets/nesa-global-fonts.css` is explicit that the rebrand is Anton for display and Nunito for body, and that **Anton ships one weight**, so every display rule here pins `font-weight:400` and never lets the browser synthesise a bold. Nunito 800 carries real bold, including the `.16em` tracked kickers the pdp sections use.

Question headings sit in **Nunito 800**, not Anton. That is the theme's own rule: `nesa-home.css.liquid` sets every h1 to h6 inside a Nesa section to Nunito unless it opts into `.nesa-serif`. Anton is reserved for display moments, which here are the intro, the three interstitials, the calculating screen and the two result screens.

`CBDa` keeps its lowercase `a` inside uppercase headings, using the same `.nesa-nocaps` span trick the theme uses.

**Components lifted from the theme:**

- **Primary button** is `.nesa-btn` and `.nsbb__atc`: 58px tall, `border-radius:999px`, `#172620` fill, white Anton 20px uppercase at `.6px` tracking, lifts 2px on hover with no shadow. It is **not** an orange button.
- **Selectable option** is the buy box tier card: white, `1px solid #DCD6CA`, `border-radius:14px`, and the selected state draws `inset 0 0 0 2px #172620` so nothing shifts. Single select carries the 20px radio ring with a 10px ink centre; multi select carries the perk tick stroked in `#2F6B3F` at 2.6.
- **The subscribe plan** carries the yellow save tab sitting on the card's top edge, exactly as `.nsbb__save` does.
- **Protocol steps** use the pdp timeline node: an 18px forest disc with a lighter centre.

**Layout:** split canvas. A sticky forest rail carries brand photography, the section name and progress. The stage carries one decision at a time on white. Below 900px the rail collapses to a 64px bar, the stage takes the full width, and display type caps at 28px, which is the theme's own mobile cap.

Touch targets clear 44px throughout.

**Motion** is limited to four things, each justified: option state change (feedback), rail photo cross fade on section change (orientation), the count up on the calculating screen (it is the whole point of that screen), and the score bars filling on the results screen (draws the eye down the list in order). All respect `prefers-reduced-motion`.

**Checks run:** `node scripts/design-lint.mjs outputs/nesas-hemp/quiz/index.html` reports clean. Zero em dashes and en dashes. Both answer paths walked in a scripted browser at 1440px and 390px, locally and again against the published URL, with no console errors, no failed requests, and no horizontal overflow. Computed styles confirmed on the live page: display resolves to Anton, body to Nunito, and the CTA to `rgb(23, 38, 32)` at `999px`.

### Known deviation from the house rules

Two questions carry 5 options where the house limit is 4: age bands and the primary goal. Age needs 5 bands to be useful for nothing at all if compressed, and cutting the goal list to 4 would drop one of the two products' primary buyers. Both are simple scannable lists, not competing calls to action. The multi select uses 6 chips laid out in 2 columns rather than a 6 item list, for the same reason.

---

## 9. What is deliberately not here

- No Shopify Liquid, section schema, theme app extension or quiz app configuration.
- No email service provider wiring. The email step captures and validates, then advances.
- No cart integration. Add to cart is a designed button, not a working one.
- No analytics or event map. Worth doing next, since a 23 screen funnel is worthless without step by step drop off.
- No Danish or second language version.

---

## 10. Files

```
outputs/nesas-hemp/quiz/
  index.html              the prototype, self contained apart from Google Fonts
  README.md               this file
  assets/
    nesa-wordmark.svg     real brand wordmark
    oil-1000mg.png        Shopify CDN product shot
    powder-b17.jpg        Shopify CDN product shot
    ritual-drops.jpg      theme asset nesa-pdp-oil-dropper-outdoors, square crop
    rail-outdoor.jpg      brand lifestyle photography
    rail-field.jpg
    rail-ritual.jpg
    rail-nutrition.jpg
    certs/                7 certification marks
```
