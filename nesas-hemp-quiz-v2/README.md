# Nesa's Hemp quiz, version 2: the Thesis layout

**Live:** https://raycazy.github.io/AI-workflow-tasks/nesas-hemp-quiz-v2/
**Version 1 (split canvas):** https://raycazy.github.io/AI-workflow-tasks/nesas-hemp-quiz/

Same eleven questions, same scoring, same three outcomes. What changes is the shell and the motion: this one is laid out and animated like takethesis.com/pages/quiz, in Nesa's own branding.

---

## 1. The questions are not duplicated

`index.html` is **generated**. The questions, the scoring rubric and the recommendation rules have exactly one home, `../quiz/index.html`, and the build lifts them out at compile time:

```
node outputs/nesas-hemp/quiz-v2/build.mjs
```

Edit a question in v1, rerun the build, and v2 follows. Two hand maintained copies of a quiz script would have disagreed within a week.

The build also refuses to run if things have drifted:

- Nine shared copy strings (the interstitial headlines, the compliance notice, the FDA disclaimer, the scorecard footnote) must still exist in v1.
- The question count claimed on the intro must equal the real base question count.

Both are hard failures, not warnings.

---

## 2. What was measured, not guessed

The Thesis quiz was instrumented in a scripted browser: transition and animation event listeners, computed styles, and a sampled transform track through a real step change. Everything below is a measurement.

| | Thesis, measured | v2 |
|---|---|---|
| Content column | 610px, centred, top anchored at y=151 | same |
| Step group | `flex column`, gap 48px | same |
| Step enter | opacity 0 to 1, `translateY(-192px)` to 0, 500ms, `ease`, `fill-mode: none` | same |
| Progress track | 7px, full width | same |
| Progress fill | full width, moved by `translateX`, 500ms `cubic-bezier(.4,0,.2,1)` | same |
| Option | 610x48, radius 4px, 1px border, label centred, 18px, transparent fill | same geometry, `#172620` border |
| Primary action | 640x64, pinned near the viewport bottom | same box, the theme's 999px ink pill |
| Page ground | `#FAFAFA` | `#FFFFFF`, the theme's own |

The progress bar moving by `translateX` rather than `width` is worth keeping: a transform is composited, a width animation relayouts the bar every frame.

**Verified after building.** A sampled transform track through a v2 step change lands on the same curve as the Thesis original:

```
          Thesis                    v2
   +0ms   -188px  op 0.02     -192px  op 0.00
  +80ms   -142px  op 0.26     -135px  op 0.29
 +160ms    -81px  op 0.58      -76px  op 0.60
 +240ms    -41px  op 0.79      -32px  op 0.83
```

### The one thing not copied

Thesis waits about **1.25 seconds** between a single select tap and the next question. That is a server round trip while the answer is persisted, not a design decision, so v2 holds the selected state for **420ms** instead: long enough to see the tap register, short enough that eleven questions do not feel like a queue.

### Why the fade is safe here

House rule is that a reveal never gates visibility on opacity. This one does not: `animation-fill-mode` is `none`, exactly as Thesis has it, so the resting state is fully opaque. If the animation never runs, the content is still on screen. There is also a `prefers-reduced-motion` branch that drops the animation entirely.

---

## 3. Branding

Identical tokens to v1, all read out of `theme-boring-cro`: Anton 400 for display, Nunito 400 to 800 for body, `#172620` ink, `#344C32` forest, `#DCD6CA` lines, `#F6F1E8` warm tint, `#FFDD00` for the Focus tag and the save tab, white ground.

Thesis's own serif question headings become **Nunito 800 at 32px** here, matching Thesis's size but not its typeface, because Anton capitals across eleven consecutive screens would be punishing. Anton carries the display moments: intro, the three interstitials, the counting screen, the results and the recommendation.

The announcement bar carries a verified claim, subscribe and save $35, which is the real difference between $134.99 and the $99.99 subscription price.

---

## 4. Which version to ship

Neither is a straight upgrade on the other.

- **v1, split canvas.** A sticky forest rail with brand photography beside the question. More of the brand on screen at all times, and it looks less like every other quiz.
- **v2, Thesis layout.** One centred column, nothing but the question. Fewer places for the eye to go, and the pinned action means the button is always in the same spot. This is the shape that the category has converged on, which cuts both ways: it is familiar, and it is anonymous.

If the goal is completion rate, v2 is the safer bet. If the goal is that the quiz feels like Nesa's rather than like a supplement quiz, v1 is.

---

## 5. Known deviation

The ritual interstitial uses a portrait photo, so its figure is capped at `min(44vh, 460px)` to keep the pinned action on screen. Thesis's own interstitial images are 16:10 and need no cap. If a 16:10 crop of that shot appears, remove the cap.

---

## 6. Files

```
outputs/nesas-hemp/quiz-v2/
  template.html   the shell, the CSS and the v2 view layer, with a __SHARED__ marker
  build.mjs       lifts data and logic out of v1, runs the drift checks, writes index.html
  index.html      GENERATED, do not edit by hand
  README.md       this file
  assets/         same assets as v1
```

**Checks run:** `design-lint` clean on both `template.html` and the built `index.html`. Zero em dashes and en dashes. Both answer paths walked at 1440px and 390px with no console errors, no failed requests and no horizontal overflow. The motion was sampled and compared against the measured Thesis curve.
