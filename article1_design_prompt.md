# Design Prompt — Article 1
## "We Are Not the Point"
### At a Different Scale · Part I of II

---

## OVERVIEW

This article lives at `/blog/we-are-not-the-point` inside the Astro portfolio.
It is Part I of a two-part series titled **At a Different Scale**.
Its paired article is **The Solar Lifecycle Theory** at `/blog/the-solar-lifecycle-theory`.

Apply the portfolio's global dark design system throughout.
Do NOT load external fonts independently — use the four portfolio fonts only:
`Inter Tight`, `Inter`, `Geist Mono`, `Source Serif 4`.

---

## HERO SECTION

- Keep the existing dark hero (`#0a0a12` background) with static star dots.
- Remove the animated starfield children — the portfolio's global noise overlay
  handles ambient texture. No layering of two grain/star systems.
- Hero label (top): `Essay · Cosmology · Philosophy`
  - Font: `Geist Mono`, muted (`#888888`), small caps, `0.22em` letter-spacing.
- **Add a series strip immediately below the hero label, before the H1:**
  - Text: `At a Different Scale · Part I of II`
  - Followed by a link: `Part II: The Solar Lifecycle Theory →`
  - Font: `Geist Mono`, muted, small, same row.
  - The `Part II →` link uses `--accent: #00F5FF` on hover only.
  - On the same line or directly below, depending on viewport width.
- H1: `We Are Not the Point`
  - Font: `Inter Tight`, Bold, `letter-spacing: -0.05em`.
  - Color: `#f0e8d8` (warm white, consistent with portfolio's `--text-primary`).
- Subtitle: `A meditation on scale, the definition of life, and why the universe owes us no answers`
  - Font: `Inter Tight`, italic, muted, `clamp(1rem, 2.5vw, 1.3rem)`.
- Hero meta: `April 2026`
  - Font: `Geist Mono`, muted, small caps.

---

## ARTICLE BODY

- **Background:** `--surface: #111111`. No glassmorphism on the reading surface itself.
- **Max-width:** `65ch`, centered, `padding: 0 1.5rem`.
- **Body font:** `Source Serif 4`, `18px`, `line-height: 1.75`.
- **Drop cap:** Apply CSS drop cap to the first letter of the first paragraph.
  - Font: `Inter Tight`, Bold, float left, approximately 3 lines tall.
  - Color: `--text-primary: #F5F5F5`.
- **Headings (H2):** `Inter Tight`, Bold, `letter-spacing: -0.05em`,
  color `#e8d4a8` (warm, slightly dimmer than pure white).
- **Pullquotes:**
  - Styled as a left-bordered blockquote.
  - `border-left: 2px solid --accent`, `padding-left: 1.5rem`.
  - Font: `Inter Tight`, italic, `clamp(1.1rem, 2vw, 1.3rem)`.
  - Color: `--text-muted: #888888`.
  - Do NOT use a standalone card or box — inline with the prose flow.

---

## SCALE CHAIN COMPONENT

Use the `<ScaleChain />` Astro island component.

Props:
```js
items={[
  "Bacteria", "Animal", "Human", "Planet",
  "Star", "Galaxy", "Galaxy Cluster", "Universe", "???"
]}
```

- Render as a horizontal scrolling row on desktop, wrapping on mobile.
- Each item: `Geist Mono`, small, `--text-muted`.
- Arrows between items: `→`, same muted color.
- Final item `???`: `--accent: #00F5FF`, slightly brighter.
- The `???` should feel open-ended, not decorative.

---

## STAT GRID COMPONENT

Use the `<StatGrid />` Astro island component.

Props:
```js
stats={[
  { num: "2T+",   label: "Galaxies in the observable universe" },
  { num: "13.8B", label: "Years the universe has existed" },
  { num: "300K",  label: "Years Homo sapiens has existed" },
  { num: "9.3B",  label: "Years before Earth even formed" }
]}
```

- Grid: `repeat(auto-fit, minmax(180px, 1fr))`, `gap: 1px`.
- Each cell: `--surface` background, `1px solid --border`.
- Stat number: `Inter Tight`, Bold, `2rem`, color `--accent: #00F5FF`.
- Stat label: `Geist Mono`, `0.78rem`, `--text-muted`, uppercase.
- Border radius: `4px` on the outer container only.

---

## INLINE SERIES CARD (Mid-Article Navigation)

Placed at the end of the section **"What If We Are Wrong About Life?"**,
after the paragraph ending with *"...a scale we were not built to perceive?"*

- Style: glassmorphism card.
  - `backdrop-filter: blur(12px)`
  - `background: rgba(255,255,255,0.03)`
  - `border: 1px solid var(--border)`
  - `border-radius: 4px`
  - `padding: 1rem 1.25rem`
- Content:
  - Small label above: `SERIES · PART II` in `Geist Mono`, `--accent`, `10px`, uppercase.
  - Main text: `"This question is explored at one scale in Part II →"`
  - Link text: `The Solar Lifecycle Theory` in `--accent`.
  - Below the link: excerpt in `Source Serif 4`, italic, muted:
    `"Every planet is the same planet at a different age. The Sun does not merely warm — it transforms."`
- This is a **navigational element**, not a pullquote.
  It should feel like a footnote with a destination.
- Do NOT use the same visual treatment as pullquotes.

---

## READING PROGRESS BAR

- `2px` line fixed at very top of viewport.
- Color: `--accent: #00F5FF`.
- Fills left-to-right as user scrolls.
- Vanilla JS, `~20 lines`.
- Implement with `window.addEventListener('scroll', ...)` + `getBoundingClientRect`.

---

## STICKY TABLE OF CONTENTS

- Position: fixed, left side.
- Visible only on screens `>1280px`.
- Auto-generated from `H2` headings in the article.
- Active heading: `--accent: #00F5FF`.
- Fades in after scrolling past the hero section.
- Font: `Geist Mono`, `12px`, `--text-muted` (inactive), `--accent` (active).
- Width: `200px` max.

---

## SERIES NAVIGATION FOOTER

Placed at the very bottom of the article, below the closing rule.
Replaces the generic "Next read" card for series articles.

- Full-width strip, two columns.
- **Left column (current article — greyed out):**
  - `← Part I: We Are Not the Point`
  - Font: `Geist Mono`, `--text-muted`, no link (current page).
- **Right column (next article — active):**
  - `Part II: The Solar Lifecycle Theory →`
  - Font: `Inter Tight`, `--accent: #00F5FF`.
  - Below it, in `Source Serif 4`, italic, muted (one line):
    `"Every planet is the same planet at a different age."`
  - This text is a link to `/blog/the-solar-lifecycle-theory`.
- Divider between columns: `1px solid var(--border)`.
- Padding: `2rem 0`.

---

## FIXED BOTTOM-LEFT BACK ARROW

- Text: `← Writing`
- Links to `/blog`.
- Font: `Geist Mono`, small, `--text-muted`.
- Position: fixed, bottom-left, `1.5rem` from edges.
- On hover: color shifts to `--accent`.

---

## COLOR SCHEME OVERRIDE

This article uses `colorScheme: 'light'` in its frontmatter.

Apply the following rules when `colorScheme === 'light'`:

- The **reading container** (`max-width: 65ch` block) uses:
  - `background: #faf9f6`
  - `color: #0f0e17`
  - Body text color overridden to near-black.
  - H2 color: `#0f0e17`.
  - Pullquote border: `2px solid #b8860b` (warm gold, not `--accent`).
- The **layout shell** (nav, progress bar, TOC, series footer, back arrow)
  remains dark — `--bg: #0A0A0A` — unchanged.
- The **noise overlay** stays on the layout shell only.
  It does NOT apply inside the reading container.
- The **stat grid** inside the light reading container:
  - Cell background: `#f0ece4` (warm off-white).
  - Stat number color: `#c0392b` (deep red, WCAG AA on light background).
  - Border color: `#d9d3c7`.
- The **inline series card** inside the light container:
  - Background: `rgba(0,0,0,0.04)`.
  - Border: `1px solid rgba(0,0,0,0.12)`.
  - Link color: `#0a6e8a` (dark teal, readable on light background).

---

## ACCESSIBILITY

- `prefers-reduced-motion`: disable all scroll-triggered animations.
  Show TOC immediately, no fade-in transition.
- All decorative star dots: `aria-hidden="true"`.
- Progress bar: `aria-hidden="true"`.
- Series strip links: descriptive `aria-label`,
  e.g. `aria-label="Go to Part II: The Solar Lifecycle Theory"`.
- Drop cap: wrap in `<span aria-hidden="true">` and repeat the letter in
  a visually hidden `<span class="sr-only">` to preserve screen reader flow.

---

## FRONTMATTER (Astro Content Collection)

```yaml
---
title: "We Are Not the Point"
date: 2026-04-01
tags: ["cosmology", "philosophy", "scale"]
excerpt: "A meditation on scale, the definition of life, and why the universe owes us no answers."
draft: false
series: "At a Different Scale"
seriesOrder: 1
colorScheme: "light"
hasInteractiveComponents: false
---
```
