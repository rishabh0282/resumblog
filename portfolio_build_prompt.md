# Portfolio Build Prompt
## Personal Resume + Blog Site — QA / Automation Engineer
### Astro · Tailwind CSS v4 · GSAP · Shiki · Satori

---

## TECH STACK

- Astro (latest) with Content Collections for blog
- Tailwind CSS v4
- GSAP + ScrollTrigger (horizontal resume scroll, desktop only)
- Shiki (syntax highlighting, built into Astro)
- Satori + @resvg/resvg-js (OG image generation)
- No React. No Framer Motion. All interactivity via CSS or vanilla JS Astro islands.

---

## DESIGN SYSTEM

### Colors (define as CSS custom properties)

```css
--bg: #0A0A0A
--surface: #111111
--border: rgba(255,255,255,0.08)
--accent: #00F5FF
--accent-secondary: #7000FF  /* hover states only, never primary */
--text-primary: #F5F5F5
--text-muted: #888888
```

### Typography

- Headers: **Inter Tight** (Bold, `letter-spacing: -0.05em`) — Google Fonts
- Body/UI: **Inter** — Google Fonts
- Mono/tags/dates: **Geist Mono** — Google Fonts
- Article body: **Source Serif 4** — Google Fonts

**Font loading rules:**
- Load all four fonts in the global layout `<head>` only. Nowhere else.
- Individual MDX files and embedded components must NOT import fonts
  independently. No `@font-face` or Google Fonts calls outside the global layout.
- Do NOT load: Cormorant Garamond, Playfair Display, Space Mono, or any
  font outside the four defined above. If any embedded content references
  these, replace with the nearest design system equivalent:
  - Cormorant Garamond → Source Serif 4
  - Space Mono → Geist Mono
  - Playfair Display → Inter Tight

### Global Rules

- **Noise overlay:** fixed `<div>` with SVG grain texture, `opacity: 0.03`,
  `pointer-events: none`, `z-index: 9999`. Applies to the layout shell only.
  Do NOT render inside article reading containers (the `65ch` block).
- **Glassmorphism:** `backdrop-filter: blur(12px)`,
  `background: rgba(255,255,255,0.03)`, `border: 1px solid var(--border)`
- **Cursor:** custom 8px dot follower with slight `requestAnimationFrame` lag (vanilla JS)
- **All GSAP animations:** wrap in
  `if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches)`

---

## PAGES

### 1. Landing / Resume Page (`/`)

**Hero (top half of viewport):**
- Large heading: `"I build reliable software."` — Inter Tight, Bold, ~5xl
- Subheading: `"QA & Automation Engineer. Currently open to opportunities."`
- Two links: `"View Resume ↓"` (scrolls down) and `"Read Writing →"` (goes to `/blog`)
- No nav bar. Just the hero, clean.

**Horizontal Scroll Resume (below hero):**
- On desktop: GSAP ScrollTrigger pins the section and scrolls career cards horizontally
- Each card = one role. Fields: Company, Title, Duration (Geist Mono),
  3 bullet points, tech tags
- Behind each card: massive low-opacity year watermark
  (Inter Tight, ~20vw, `opacity: 0.04`)
- On mobile (`<768px`): disable pin, render as standard vertical timeline instead
- Seed with 3 placeholder roles (content will be replaced later)

**Footer strip (bottom of page):**
- Full-width, minimal: Name (large, Inter Tight) + GitHub icon + LinkedIn icon + email link
- No contact form

---

### 2. Blog Index (`/blog`)

**Layout:**
- Two vertical panes side by side, full viewport height
- On hover: hovered pane expands to 70% width, other shrinks to 30%
- Transition: CSS only — `flex-basis` with
  `transition: flex-basis 0.4s cubic-bezier(0.4, 0, 0.2, 1)`
- Each pane: article title (Inter Tight), tag (Geist Mono),
  excerpt (2 lines max), subtle glow behind text
- Glow colors: first article = `rgba(0,245,255,0.06)`,
  second = `rgba(112,0,255,0.06)`
- If only 1 article: full-width single pane, centered.
- If 3+ articles: switch to 3-column bento grid
  (auto via Content Collections length check)

**Series grouping:**
- If two or more articles share the same `series` value, display them as a
  grouped pair with a series label above both panes:
  `"[Series Name] — N parts"` — Geist Mono, `--text-muted`, small.
- The grouped pair uses the standard two-pane layout with the series label
  as a header row above.
- Articles without a series render individually as before.

**Pane content — series indicator:**
- If an article has `series` defined, show below the tag:
  `"Part [seriesOrder] of [total in series]"` — Geist Mono, `10px`, `--text-muted`.

---

### 3. Blog Article Page (`/blog/[slug]`)

**Reading layout:**
- Max-width: `65ch`, centered, `padding: 0 1.5rem`
- Background: `var(--surface)`. No glassmorphism on the reading surface.
- Body font: Source Serif 4, `18px`, `line-height: 1.75`
- First paragraph: CSS drop cap on first letter
  (Inter Tight, Bold, float left, ~3 lines tall)
- Byline: Author name + date (Geist Mono, muted) + estimated read time
  (calculate from word count)

**Color scheme override:**
- If `colorScheme === 'light'`, apply a scoped light theme to the reading
  container (`65ch` block) only:
  ```
  background: #faf9f6
  color: #0f0e17
  H2 color: #0f0e17
  Pullquote border: 2px solid #b8860b
  ```
- The layout shell (progress bar, TOC, series footer, back arrow,
  noise overlay) stays dark and unchanged in all cases.
- If `colorScheme === 'dark'` (default), no change from base spec.

**Series navigation strip (hero area):**
- If article has `series` defined, render a strip below the article's
  eyebrow label and before the H1.
- Format: `"[Series Name] · Part N of [Total]"`
- Include a link to the adjacent article (prev or next in `seriesOrder`).
- Font: Geist Mono, `--text-muted`, small. Link uses `--accent` on hover only.

**Reading progress bar:**
- `2px` line fixed at very top of viewport
- Color: `--accent: #00F5FF`
- Fills left-to-right as user scrolls
- Vanilla JS, ~20 lines
- `prefers-reduced-motion`: keep bar visible, disable smooth fill transition

**Code blocks:**
- Shiki with a custom dark theme matching `--bg` (`#0A0A0A`)
- Copy-to-clipboard button (top right of each block)
- Geist Mono font

**Sticky Table of Contents:**
- Position: fixed, left side
- Visible only on screens `>1280px`
- Auto-generated from H2/H3 headings
- Active heading: `--accent`
- Fades in after scrolling past the article hero
- Font: Geist Mono, `12px`
- If `hasInteractiveComponents === true`, add a notice below the TOC
  on screens `768px–1280px` (where TOC is hidden):
  `"Interactive diagrams available on desktop"` — Geist Mono, `11px`, `--text-muted`

**Interactive components:**
- All island components used in MDX load with `client:idle`
- If `hasInteractiveComponents === true`, ensure island components
  are loaded for that article's page

**Series navigation footer:**
- If article has `series` defined, replace the generic "Next read" card
  with a full-width two-column series footer:
  - **Active column** (prev or next article):
    Inter Tight, `--accent`, links to the article.
    One-line excerpt below in Source Serif 4, italic, `--text-muted`.
  - **Inactive column** (current article):
    Geist Mono, `--text-muted`, no link.
  - Divider between columns: `1px solid var(--border)`
  - Padding: `2rem 0`
- If article has NO `series`, show the original "Next read" card as a
  single horizontal card echoing the 70/30 pane aesthetic.

**After article (no series):**
- "Next read" card — the other article, styled as a single horizontal card
- Minimal author bio strip below it

**Fixed bottom-left back arrow:**
- Text: `← Writing`, links to `/blog`
- Font: Geist Mono, small, `--text-muted`
- Position: fixed, bottom-left, `1.5rem` from edges
- Hover: color shifts to `--accent`

---

### 4. 404 Page

- Dark, minimal, dry terminal aesthetic
- Display: `error: page_not_found` in Geist Mono
- Subtext: `"This page doesn't exist. Yet."`
- Link back to home

---

## CONTENT COLLECTIONS

Set up Astro Content Collections for blog with this schema:

```ts
// src/content/config.ts
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    excerpt: z.string(),
    draft: z.boolean().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    colorScheme: z.enum(['dark', 'light']).default('dark'),
    hasInteractiveComponents: z.boolean().default(false),
  }),
});
```

Drafts (`draft: true`) are excluded from the build.

**Seed with the following two articles** — use placeholder body content,
the real text will be dropped in later. Do NOT seed with generic
QA/automation placeholder articles.

**Article 1 frontmatter:**
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

**Article 2 frontmatter:**
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

---

## REUSABLE ISLAND COMPONENTS

Create the following Astro components for use inside MDX blog posts.
Place in `src/components/blog/`.

### `<ScaleChain items={string[]} />`
- Horizontal scrolling row of items connected by `→` arrows
- Final item styled in `--accent` if it equals `"???"`
- Wraps to multiple lines on mobile
- Font: Geist Mono, small, `--text-muted` for items and arrows
- No client-side JS required — pure CSS component

### `<StatGrid stats={Array<{num: string, label: string}>} />`
- CSS grid: `repeat(auto-fit, minmax(180px, 1fr))`, `gap: 1px`
- Outer: `border: 1px solid var(--border)`, `border-radius: 4px`
- Each cell: `--surface` background
- Stat number: Inter Tight, Bold, `2rem`
  - Dark scheme: `--accent`
  - Light scheme: `#c0392b`
- Stat label: Geist Mono, `0.78rem`, `--text-muted`, uppercase
- No client-side JS required — pure CSS component

### `<HabitableZoneDiagram client:idle />`
- Canvas-based interactive solar evolution slider
- Extracted from the Solar Lifecycle Theory article's standalone HTML
- Preserve all existing canvas draw logic, slider, play button, and legend
- Replace all Cormorant Garamond canvas font references → Source Serif 4
- Replace all Space Mono canvas font references → Geist Mono
- **Add interaction cue above slider (desktop only):**
  `"Drag the slider to simulate solar evolution across 12 billion years"`
  — Geist Mono, `12px`, `--text-muted`, italic
- **On mobile:** hide canvas and controls entirely. Show:
  `"Interactive diagram available on desktop"` — Geist Mono, `--text-muted`, centered
- **Play button:** hide entirely if `prefers-reduced-motion: reduce`
- **Accessibility:** `role="img"` on canvas,
  descriptive `aria-label` reflecting current slider state

### `<PlanetOrbitDiagram client:idle />`
- Clickable planet orbit sequence from the Solar Lifecycle Theory article
- Each planet body: `role="button"`, `aria-label="[Planet]: [phase]"`,
  keyboard accessible (Enter/Space)
- Description panel below updates on click/focus
- Replace Cormorant Garamond italic phase labels → Source Serif 4, italic
- **On mobile:** hide diagram, render a plain vertical list of planets + phases.
  Show: `"Interactive diagram available on desktop"` — Geist Mono, muted

---

## OG IMAGE GENERATION

Use Satori to auto-generate OG images at `/og/[slug].png` for:
- Each blog article: title + first tag + site name, Inter Tight + color palette
- The homepage

**Series badge:**
When an article has `series` defined, add a badge below the title:
`"Part [seriesOrder] · [series name]"` — Geist Mono, small, `--text-muted` color.

**Color scheme:**
OG images always use the dark palette (`--bg: #0A0A0A`) regardless of
the article's `colorScheme` value.

Output as PNG via Astro endpoint at `/og/[slug].png`.

---

## ACCESSIBILITY & PERFORMANCE

- All GSAP/ScrollTrigger animations:
  wrap in `if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches)`
- `--accent` (`#00F5FF`) must only be used at full opacity on `--bg` for WCAG AA compliance
- On `colorScheme: 'light'` articles, replace `--accent` inside the reading
  container with `#0a6e8a` (dark teal, WCAG AA on light background)
- All images: `loading="lazy"` + descriptive `alt` text
- All decorative elements (auras, star dots, noise overlay): `aria-hidden="true"`
- Progress bar: `aria-hidden="true"`
- Series strip links: descriptive `aria-label`,
  e.g. `aria-label="Go to Part II: The Solar Lifecycle Theory"`
- Drop cap: wrap in `<span aria-hidden="true">`, repeat letter in
  `<span class="sr-only">` for screen reader flow
- Target: Lighthouse score ≥ 95 on all pages

---

## WHAT IS ALREADY DEFINED

- The first two blog articles: **"We Are Not the Point"** and
  **"The Solar Lifecycle Theory"** (series: At a Different Scale).
- Frontmatter for both is final (see Content Collections above).
- Body content will be dropped in as MDX — leave as placeholder prose.
- Interactive island components for Article 2 are fully specified above.
- Article 1 uses `colorScheme: 'light'`. Article 2 uses `colorScheme: 'dark'`.
- Design specifications for both articles are in separate files:
  - `article1_design_prompt.md`
  - `article2_design_prompt.md`

## WHAT I WILL PROVIDE LATER

- My actual name, bio, photo
- Real job history (company names, titles, dates, bullets)
- Social links (GitHub, LinkedIn, email)

---

## BUILD ORDER

Scaffold the full project structure and install all dependencies first.
Then build page by page in this order:

1. Global layout, design system, fonts, noise overlay, cursor
2. Landing / Resume page (`/`)
3. Blog Index (`/blog`)
4. Blog Article page (`/blog/[slug]`) — include all template features
5. Island components (`ScaleChain`, `StatGrid`, `HabitableZoneDiagram`, `PlanetOrbitDiagram`)
6. OG image generation (`/og/[slug].png`)
7. 404 page

After each step, confirm what was built before moving to the next.
