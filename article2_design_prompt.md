# Design Prompt — Article 2
## "The Solar Lifecycle Theory"
### At a Different Scale · Part II of II

---

## OVERVIEW

This article lives at `/blog/the-solar-lifecycle-theory` inside the Astro portfolio.
It is Part II of a two-part series titled **At a Different Scale**.
Its paired article is **We Are Not the Point** at `/blog/we-are-not-the-point`.

Apply the portfolio's global dark design system throughout.
Do NOT load Cormorant Garamond or Space Mono — they are not part of the
design system. Use only: `Inter Tight`, `Inter`, `Geist Mono`, `Source Serif 4`.

This article uses `hasInteractiveComponents: true`.
Load island components with `client:idle`.

---

## HERO SECTION

- Background: `--bg: #0A0A0A` with a radial amber/gold aura (existing).
- Remove the animated JS starfield — the portfolio's global noise overlay
  handles ambient texture. No double-layering.
- Hero eyebrow: `An Original Cosmological Hypothesis`
  - Font: `Geist Mono`, `11px`, `letter-spacing: 0.3em`, `--text-muted`, uppercase.
- **Add a series strip immediately below the eyebrow, before the H1:**
  - Text: `At a Different Scale · Part II of II`
  - Preceded by a link: `← Part I: We Are Not the Point`
  - Font: `Geist Mono`, muted, small.
  - The `← Part I` link uses `--accent: #00F5FF` on hover only.
- H1: `The Solar Lifecycle Theory`
  - Font: `Inter Tight`, Bold, `letter-spacing: -0.05em`.
  - Color: `--accent: #00F5FF` for "Solar", rest in warm white `#e8d4a8`.
  - Or full warm white — defer to portfolio's existing H1 treatment.
- Hero subtitle: `Every planet is the same planet at a different age.
  The Sun does not merely warm — it transforms.`
  - Font: `Inter Tight`, italic, `--text-muted`, `clamp(1.2rem, 2vw, 1.5rem)`.
- Hero line: thin vertical gradient line below subtitle, fading in on load.
  Existing animation is fine; wrap in `prefers-reduced-motion` check.

---

## ABSTRACT CARD

- Glassmorphism container:
  - `backdrop-filter: blur(12px)`
  - `background: rgba(255,255,255,0.03)`
  - `border: 1px solid var(--border)`
  - `border-radius: 6px`
  - `padding: 2rem`
- **New introductory paragraph** renders above the status grid inside this card.
  It is plain `Source Serif 4` body text, `--text-muted`, not a heading.
  Do not style it differently from the body — it is a bridge paragraph, not a callout.
- **Status grid** follows immediately below the paragraph, unchanged:

  Three cards in a row (`repeat(3, 1fr)` on desktop, `1fr` on mobile):

  | Card | Label Color | Label Text | Content |
  |------|-------------|------------|---------|
  | 1 | `--teal: #3a9494` | OBSERVED | Confirmed in published literature |
  | 2 | `--gold: #c8a96e` | INFERRED | Bridge built between observations |
  | 3 | `--amber: #e8833a` | SPECULATIVE | Original, untested framework |

  - Card background: `rgba(255,255,255,0.015)`, `border: 1px solid var(--border)`.
  - Label font: `Geist Mono`, `10px`, uppercase, `letter-spacing: 0.12em`.
  - Body font: `Source Serif 4`, `1rem`, `--text-muted`, `line-height: 1.65`.

- **Article nav pills** follow the status grid:
  - Anchor links to each major section.
  - Style: `border: 1px solid var(--border)`, `border-radius: 999px`,
    `padding: 0.55rem 0.9rem`, `Geist Mono`, `11px`, uppercase.
  - Hover: `color: --accent`, `border-color: --border-bright`,
    `background: rgba(200,169,110,0.08)`, `translateY(-1px)`.

---

## ARTICLE BODY

- **Background:** `--bg: #0A0A0A` (full dark, no light override for this article).
- **Max-width:** `65ch`, centered, `padding: 0 1.5rem`.
- **Body font:** `Source Serif 4`, `18px`, `line-height: 1.75`.
- **Headings (H2):** `Inter Tight`, Bold, `letter-spacing: -0.05em`,
  color `#e8d4a8`, `clamp(1.8rem, 4vw, 2.8rem)`.
- **Headings (H3):** `Inter Tight`, `400`, color `--gold: #c8a96e`, `1.3rem`.
- **Section labels (kickers above H2):** `Geist Mono`, `11px`, `letter-spacing: 0.25em`,
  `--gold-dim: #7a6440`, uppercase, `margin-bottom: 1rem`.
- **Lead paragraphs:** `Source Serif 4`, italic, `#b8a888`,
  `border-left: 2px solid --gold-dim`, `padding-left: 1.5rem`.
- **Reading surface:** `--bg: #0A0A0A`. No glassmorphism on the body text area.
  Glassmorphism applies only to card components within the article.

---

## PLANET ORBIT DIAGRAM COMPONENT

Use the `<PlanetOrbitDiagram client:idle />` Astro island component.

This extracts the existing clickable orbit sequence from the standalone HTML.
Each planet body is clickable and reveals a description panel below.

Props / data to preserve exactly:
- Sun (central, animated amber glow)
- Mercury → Venus → Earth → Mars → Asteroid Belt → Jupiter → Saturn → Uranus → Neptune → Kuiper Belt
- Each body: name label (`Geist Mono`, `10px`), phase label (italic, `Cormorant` → replace with `Source Serif 4`, italic)
- Active state: `translateY(-3px)` lift, gold ring glow
- Description panel below: `border: 1px solid var(--border)`, glassmorphism,
  `min-height: 122px`, `padding: 1rem 1.1rem`
- Panel kicker: `Geist Mono`, `10px`, `--gold-dim`
- Panel H3: `Inter Tight`, `1.25rem`, `#ead5a8`
- Panel body: `Source Serif 4`, `1rem`, `--text-muted`, `line-height: 1.65`
- Chips below panel: `Geist Mono`, `10px`, `border: 1px solid var(--border)`, pill shape

Mobile: hide diagram entirely, show a simple vertical list of planets with their phases.
Add a note: `"Interactive diagram available on desktop"` in `Geist Mono`, muted.

---

## ITERATION TABLE

Standard HTML table, no component wrapper needed.

- Width: `100%`, `border-collapse: collapse`.
- Font: `Geist Mono`, `13px` for headers; `Source Serif 4` for cells.
- Header: `Geist Mono`, `11px`, `--gold-dim`, uppercase, `letter-spacing: 0.1em`,
  `border-bottom: 1px solid var(--border-bright)`.
- Cells: `padding: 0.9rem 1rem`, `border-bottom: 1px solid var(--border)`,
  `--text-primary`, `vertical-align: middle`.
- Row hover: `background: rgba(200,169,110,0.08)`.
- Size bar cell: `width: 160px`.
  Size bar: `height: 6px`, `background: linear-gradient(to right, --ice, --gold)`,
  `border-radius: 3px`, `opacity: 0.7`.

---

## SPECULATIVE CALLOUT BOX

Used for clearly-labelled speculative content. Appears multiple times.

- `background: rgba(200,131,58,0.06)`
- `border: 1px solid rgba(200,131,58,0.2)`
- `border-left: 3px solid --amber`
- `border-radius: 0 2px 2px 0`
- `padding: 1.5rem 2rem`
- Label: `Geist Mono`, `10px`, `letter-spacing: 0.25em`, `--amber`, uppercase,
  `margin-bottom: 0.75rem`. Text: `SPECULATIVE`
- Body: `Source Serif 4`, `1.04rem`, `#b89060`, italic, `line-height: 1.7`.

---

## TIMELINE COMPONENT

Visual timeline with a vertical rule on the left.

- `padding-left: 2rem`, `position: relative`.
- Vertical rule: `width: 1px`, gradient from transparent → `--gold-dim` → `--gold-dim` → transparent.
- Each item:
  - Dot: `7px` circle, `border: 1px solid --gold-dim`, `background: --bg`,
    positioned at `left: -2.4rem`.
  - Time label: `Geist Mono`, `11px`, `--gold-dim`, `letter-spacing: 0.1em`.
  - H4: `Inter Tight`, `1.2rem`, `#d4c090`.
  - Body: `Source Serif 4`, `--text-muted`, `line-height: 1.6`.
- Scroll reveal: each item fades in with `opacity: 0 → 1`, `translateY(16px → 0)`,
  staggered `70ms` delay. Wrap in `prefers-reduced-motion` check.

---

## EVIDENCE GRID

Two-column layout: Confirmed (left) vs Original (right).

- `display: grid`, `grid-template-columns: 1fr 1fr`, `gap: 2rem`.
- On mobile `<600px`: single column.
- Column headers:
  - Confirmed: `Geist Mono`, `11px`, `--teal`, uppercase, `letter-spacing: 0.2em`.
  - Original: `Geist Mono`, `11px`, `--amber`, uppercase, `letter-spacing: 0.2em`.
  - Both have `border-bottom: 1px solid var(--border)`, `padding-bottom: 0.5rem`.
- Each item: `display: flex`, `gap: 0.75rem`, `--text-muted`, `line-height: 1.5`.
- Dot: `5px` circle, `margin-top: 7px`.
  - Confirmed dot: `--teal`.
  - Original dot: `--amber`.
- Scroll reveal: staggered `24ms` per item.

---

## OPEN PROBLEMS LIST

Custom ordered list (not a standard `<ol>`).

- `counter-reset: ch`, `list-style: none`.
- Each item: `counter-increment: ch`, `display: flex`, `gap: 1rem`.
- Counter label: `Geist Mono`, `11px`, `--rust: #c04a2a`,
  formatted as `decimal-leading-zero` (01, 02, 03, 04).
- Item body: `Source Serif 4`, `1.02rem`, `--text-muted`, `line-height: 1.6`.
- Each item is now a full paragraph (expanded from single sentences).
  Give each item adequate vertical space: `margin-bottom: 2rem`.
- Scroll reveal: staggered `60ms` per item.

---

## HABITABLE ZONE DIAGRAM COMPONENT

Use the `<HabitableZoneDiagram client:idle />` Astro island component.

This extracts the existing canvas-based slider from the standalone HTML.

**Add an interaction cue above the slider:**
- Text: `Drag the slider to simulate solar evolution across 12 billion years`
- Font: `Geist Mono`, `12px`, `--text-muted`, italic.
- Visible on desktop only. On mobile, replace with:
  `"Solar evolution diagram available on desktop"`.

Slider styling (preserve existing):
- Track: `4px`, gradient fill showing progress in `--gold`.
- Thumb: `18px` circle, `border: 1px solid #f3d7a0`,
  radial gradient gold, `box-shadow: 0 0 0 4px rgba(200,169,110,0.2)`.
- Readout: `Geist Mono`, `13px`, `--gold`.

Play button (preserve existing):
- `34px` square, `border: 1px solid var(--border-bright)`, transparent background.
- Icon: `▶` (play) / `⏸` (pause).
- Hide entirely if `prefers-reduced-motion: reduce`.

Legend swatches:
- Classical HZ: green swatch `rgba(78,184,122,0.5)`.
- Temperate model: dashed ring, `rgba(122,208,214,0.5)`.
- Font: `Source Serif 4`, `1rem`, `--text-muted`.

Canvas rendering (preserve all existing draw logic):
- Sun gradient, planet dots, HZ band, label collision avoidance — all unchanged.
- Replace `Cormorant Garamond` canvas font references with `Source Serif 4`.
- Replace `Space Mono` canvas font references with `Geist Mono`.

---

## VENUS SECTION DIAGRAM

Three-zone horizontal layout.

```
[ Ancient Temperate Venus ] → [ Transition ] → [ Modern Venus ]
```

- Container: `display: flex`, `gap: 3rem`, `flex-wrap: wrap`.
- Background: `--surface: #111111`, `border: 1px solid var(--border)`,
  `padding: 2rem`, `border-radius: 2px`.
- Each zone: `flex: 1`, `min-width: 160px`, `text-align: center`.
- Zone icon: `60px` circle, centered.
  - Ancient: warm blue-green `rgba(100,180,160,0.3)`.
  - Transition: amber `rgba(200,131,58,0.3)`.
  - Modern: deep orange-red `rgba(180,60,40,0.3)`.
- Zone name: `Geist Mono`, `11px`, uppercase, `letter-spacing: 0.15em`.
- Zone description (expanded — use new text from editorial doc):
  - `Source Serif 4`, `0.98rem`, `--text-muted`, `line-height: 1.5`.
- Ancient zone gets a secondary italic note below:
  `"Potentially habitable for up to 3 billion years"`.
  Font: `Source Serif 4`, italic, `0.9rem`, `--text-muted`.
- Scroll reveal: `80ms` stagger per zone.
- On mobile: stack vertically, remove arrows.

---

## CITATION LINKS

Inline citation markers, e.g. `[1]`, `[2]`.

- Style: `display: inline-flex`, `min-width: 1.55rem`, `height: 1.35rem`,
  `border-radius: 999px`, `border: 1px solid rgba(200,169,110,0.24)`,
  `color: --gold`, `background: rgba(200,169,110,0.07)`.
- Font: `Geist Mono`, `10px`.
- Hover: `background: rgba(200,169,110,0.14)`, `border-color: rgba(200,169,110,0.4)`.
- Link target: anchor to reference list at bottom of article.

---

## REFERENCE LIST

At the bottom of the article, before the series footer.

- `list-style: none`, `padding-left: 1.25rem`.
- Items: `Source Serif 4`, `--text-muted`, `line-height: 1.65`, `margin-bottom: 1rem`.
- Links within items: color `#e7d0a0`, `text-decoration-color: rgba(231,208,160,0.4)`.
  Hover: `text-decoration-color: currentColor`.

---

## READING PROGRESS BAR

- `2px` line fixed at very top of viewport.
- Color: `--accent: #00F5FF`.
- Fills left-to-right as user scrolls.
- Vanilla JS.
- `prefers-reduced-motion`: keep bar but disable smooth fill transition.

---

## STICKY TABLE OF CONTENTS

- Position: fixed, left side.
- Visible only on screens `>1280px`.
- Auto-generated from `H2` headings.
- Active heading: `--accent: #00F5FF`.
- Fades in after scrolling past hero.
- Font: `Geist Mono`, `12px`.
- **Add a notice below the TOC on screens `768px–1280px`:**
  `"Interactive diagrams available on desktop"`.
  Font: `Geist Mono`, `11px`, `--text-muted`.

---

## SCROLL REVEAL (Global for this article)

All animated items use IntersectionObserver.
Wrap all animation logic in:

```js
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // animation code here
}
```

When `prefers-reduced-motion` is active:
- All items render at `opacity: 1`, `transform: none` immediately.
- TOC fades in instantly.
- HZ play button is hidden.
- Hero line does not animate.

---

## SERIES NAVIGATION FOOTER

Placed at the very bottom of the article, below the reference list.
Replaces the generic "Next read" card for series articles.

- Full-width strip, two columns.
- **Left column (previous article — active):**
  - `← Part I: We Are Not the Point`
  - Font: `Inter Tight`, `--accent: #00F5FF`.
  - Below it, `Source Serif 4`, italic, muted (one line):
    `"What if our definition of life was built from a sample size of one?"`
  - Full cell is a link to `/blog/we-are-not-the-point`.
- **Right column (current article — greyed out):**
  - `Part II: The Solar Lifecycle Theory →`
  - Font: `Geist Mono`, `--text-muted`, no link (current page).
- Divider between columns: `1px solid var(--border)`.
- Padding: `2rem 0`.

---

## FIXED BOTTOM-LEFT BACK ARROW

- Text: `← Writing`
- Links to `/blog`.
- Font: `Geist Mono`, small, `--text-muted`.
- Position: fixed, bottom-left, `1.5rem` from edges.
- Hover: color shifts to `--accent`.

---

## ACCESSIBILITY

- `prefers-reduced-motion`: disable pin, all scroll triggers, all reveal animations.
  Render all content visible by default.
- Canvas diagram: add `role="img"` with `aria-label`:
  `"Interactive diagram showing planetary positions across solar evolution stages"`.
  Add a text fallback below the canvas describing the current state.
- Orbit diagram: each clickable planet body needs `role="button"`,
  `aria-label="[Planet name]: [phase]"`, and keyboard focus support (`Enter` / `Space`).
- All decorative aura/glow elements: `aria-hidden="true"`.
- Citation links: `aria-label="Reference [N]"`.
- Progress bar: `aria-hidden="true"`.
- Series strip links: `aria-label="Go to Part I: We Are Not the Point"`.

---

## FRONTMATTER (Astro Content Collection)

```yaml
---
title: "The Solar Lifecycle Theory"
date: 2026-04-15
tags: ["cosmology", "hypothesis", "solar-system", "speculative"]
excerpt: "Every planet is the same planet at a different age. A speculative framework for understanding planetary evolution as a continuous lifecycle driven by the Sun."
draft: false
series: "At a Different Scale"
seriesOrder: 2
colorScheme: "dark"
hasInteractiveComponents: true
---
```
