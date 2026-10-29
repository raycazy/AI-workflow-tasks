# HGA design system: instructions for AI coding agents

You are reading this because you were pointed at the HGA design system page (design-system.html in this folder). Treat this file, tokens.css and tokens.json as the source of truth for anything you build, write or design for HGA (Hybrid Grading Approach), a UCollect company. The page is measured from the shipping site, so matching it means matching production.

## Before you start

1. Fetch tokens.css and tokens.json from this folder. Reference tokens by name. Never hardcode a hex, radius, font or shadow value that exists as a token.
2. Read the section of design-system.html that covers what you are building (Components for a part, Section patterns for a page, Banners for a promo).
3. If the thing you need is not on the page, ask the person who sent you the link. Do not invent a new component, color, icon or claim.

## Visual rules

- Dark theme only. Page #0B0A0A, cards #141212, inputs #1C1818. There is no light theme.
- One red, #E62429, for buttons, the booked calendar day, selection and the last phrase of a headline. Hover #99161C.
- Coral #FF6B6E for kickers, table ticks and inline icons. Red text #FF4A4F for errors and risk icons. Green #3CCF7A only for "free" and "yes". Gold gradient only for the HGA Flawless grade.
- Text: #F6F4F0 default, white at 72% for body, 55% for labels, #9A948E for eyebrows above section headings.
- Lines are always 1px white tints: .10 rows, .12 cards, .22 inputs, .35 ghost buttons. No grey borders, no one sided accent stripes.
- Fonts: Barlow for everything (400 body, 600 nav and eyebrows, 700 buttons and h3, 800 h1 and h2). Barlow Semi Condensed 600 for small uppercase labels. Nothing italic.
- Type scale: h1 56px tracking -3.5%; h2 clamp(36px, 4.2vw, 60px) tracking -3%; h3 22px; lede 19px; body 17px line height 1.55; small 14px.
- Corners: 10px buttons, pills, calendar days and icon squares; 14px cards, rows, tiers and tickets; 22px calendar card, split cards and photos. Inner radius equals outer radius minus padding. Inputs are square today and move to 10px.
- Shadows: button 0 10px 26px rgba(230,36,41,.22); floating card 0 24px 48px rgba(0,0,0,.55); calendar glow 0 30px 80px -30px rgba(230,36,41,.4); slab drop-shadow(0 28px 36px rgba(0,0,0,.6)).
- Icons: the stroke sprite documented under Iconography (24 unit grid, stroke 2, round caps). Use the documented ids. No emoji, no filled icon sets, no icons inside slab outlines, no icon card grids.
- Imagery: dark, low key, the slab lit from one side with a red or warm rim. Label generated images as placeholders.

## Components and patterns

Use only the components on the page: Button (Primary and Ghost; Default, Large, Compact), Pill, Eyebrow, Kicker, Label, Size tag, Text link, Announcement bar, Input, Field error, Tier radio, Benefit row, Review card, Process step, FAQ item, Fee tier, Comparison table, Calendar card and day, Offer plan, Poly row, Slab card, Pillar card, Header, Sticky bar, Housing option (Glass card and Poly row), Stepper with quick picks, Buy total.

A page is an ordered set of the documented section patterns: header and bar, hero, reviews strip, story, three pillars, comparison, calendar, offer, process steps, FAQ, final CTA, sticky bar. Explanatory sections (chip, process, sizes) sit below the offer; new and important sections sit above it. Do not design a new layout when a pattern exists.

Landing pages for a persona change only the hero copy and one or two story sections. Everything else stays shared.

## Buy box, materials and 3D

- Buy box hierarchy: Glass is the card (slab, mark, line, price with strike, red Recommended tag, white ring when selected). Poly is a quiet row under it at 82% opacity with "Or choose", a small mark and a small price. Never two equal cards. One stepper with quick picks 5, 10, 25, 100, one black total bar, one block button ("Claim my $200 HGA Glass"), a "skip the cart" text link, then the trust list with red icons. Poly first landers flip the roles.
- Materials: metal frames use the 160deg gradient #1d1d1d to #0a0a0a to #141414 with four 8px screws; the label is red (#ED2B30 to #D51F24) with a 3px #D9EEF0 holographic ring and a white grade box; the glass sheen is a diagonal white band swept on hover. No frosted glass, no backdrop blur panels except the header, no chrome. Red light comes from below or behind the slab.
- 3D: the hero and shop page use the three.js spin slab (glass.glb and clear_case.glb with per slab card and label textures, static render fallback, drag to spin). Sizes sections use the CSS 3D morphing housing. Do not add other 3D or WebGL. Respect prefers-reduced-motion: every animation off.
- Motion: .15s hover, .3s reveals, .9s cubic-bezier(.2,.7,.2,1) for 3D and size changes, 1.2s sheen. Text and layout never animate.

## Copy rules

- Buttons read "Claim Your Glass" or "Claim Your Poly". The site wide header and bar use "Claim Your Pass". The shop buy box uses "Claim my $200 HGA Glass", the pass page "Add to cart".
- Say "pass", never "slot". Housing names stand alone: "Claim Your Glass", "1 × HGA Glass". Never "Glass pass" or "Poly pass".
- Say RFID, "the chip in the label", "tap, open the record". Never NFT or NFC. Do not lead with blockchain.
- Dates: "a grading date you book", cards back within 30 days of that date. Never a business day count, never "guaranteed", never a daily late credit.
- Prices: Glass $200 (launch $600), "Save $400". Poly $29 (launch $150), "up to 80% off" is true for Poly only. Cards over $10,000 carry a 2% insurance and handling charge.
- "Presale" is one word in running copy. The announcement bar and hero eyebrow set "Pre sale opens Nov 23" as written.
- Reviews are first name plus last initial.
- Headlines are either short sentences with a full stop or the approved Title Case lines. One register per page.
- Never: UCollect marketplace, Club U, custom labels, "patented", UV protection, impact resistant, resale value claims, "glass box", "black box".
- Writing style: no em dashes, no en dashes, no hyphenated compounds, no exclamation stacks, no three word fragment chains, no anticipating objections. Approved client copy keeps its punctuation as written.
- Hobby language is welcome: pull, PC, raw, slab, grail, booklet, penny sleeve, toploader.

## Logos

White SVG marks only, on dark surfaces: HGA wordmark, full Hybrid Grading Approach lockup, HGA Glass, HGA Poly, and the UCollect mark. The header pairs the wordmark with a "Powered by UCollect" tag. Never recolor the marks, never set the UCollect mark larger than the HGA mark on HGA pages, never place them on red fills. UCollect blue #7B9BB3 belongs to the UCollect mark only.

## When you deliver

- State which patterns and components you used and which tokens you referenced.
- Flag anything you could not find on the page instead of filling the gap yourself.
- Run a check for em dashes and en dashes in any text you wrote; the count must be zero.
