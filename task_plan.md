# Task Plan — QA Engineer Portfolio & Blog

## Goal
Build a full personal portfolio + blog site for a QA/Automation Engineer using Astro, Tailwind CSS v4, GSAP, Shiki, and Satori. Two blog articles are pre-specified as a two-part series "At a Different Scale."

## Tech Stack
- Astro (latest) + Content Collections
- Tailwind CSS v4
- GSAP + ScrollTrigger (horizontal resume scroll, desktop only)
- Shiki (syntax highlighting, built-in to Astro)
- Satori + @resvg/resvg-js (OG image generation)
- No React. No Framer Motion. Vanilla JS Astro islands only.

## Design System Quick Reference
- `--bg: #0A0A0A` | `--surface: #111111` | `--border: rgba(255,255,255,0.08)`
- `--accent: #00F5FF` | `--accent-secondary: #7000FF` (hover only)
- `--text-primary: #F5F5F5` | `--text-muted: #888888`
- Fonts: Inter Tight (headers) · Inter (body/UI) · Geist Mono (mono/tags) · Source Serif 4 (article body)
- All fonts loaded in global layout `<head>` ONLY. No independent font loading in MDX or components.
- Global: noise overlay (opacity 0.03, z-index 9999, NOT inside 65ch reading container), custom cursor (8px dot, rAF lag)

## Pages
1. `/` — Landing/Resume (hero + horizontal scroll resume + footer)
2. `/blog` — Blog Index (split-pane with expand, series grouping, bento grid for 3+)
3. `/blog/[slug]` — Article page (65ch reading layout, progress bar, TOC, series nav)
4. `/404`

## Articles
- **Article 1:** "We Are Not the Point" — series: "At a Different Scale", seriesOrder: 1, colorScheme: light, hasInteractiveComponents: false
- **Article 2:** "The Solar Lifecycle Theory" — series: "At a Different Scale", seriesOrder: 2, colorScheme: dark, hasInteractiveComponents: true

## Island Components (src/components/blog/)
- `ScaleChain` — pure CSS, horizontal scrolling chain with arrows
- `StatGrid` — pure CSS, auto-fit grid with stat numbers
- `HabitableZoneDiagram` — canvas-based solar evolution slider (client:idle)
- `PlanetOrbitDiagram` — clickable planet orbit sequence (client:idle)

## Build Order (from spec)
1. Project scaffold + dependencies
2. Global layout, design system, fonts, noise overlay, cursor
3. Landing / Resume page (`/`)
4. Blog Index (`/blog`)
5. Blog Article page (`/blog/[slug]`)
6. Island components
7. OG image generation (`/og/[slug].png`)
8. 404 page

---

## Phases

### Phase 1 — Project Scaffold & Dependencies
**Status:** complete
- Init Astro project (latest) in `d:\personal-proj\my-blog-resume`
- Install: tailwindcss@next (v4), @tailwindcss/vite, gsap, @resvg/resvg-js, satori
- Configure Astro integrations: @astrojs/mdx, @astrojs/sitemap
- Set up Content Collections schema in `src/content/config.ts`
- Create placeholder MDX files for both articles with correct frontmatter

### Phase 2 — Global Layout & Design System
**Status:** complete
- `src/layouts/Layout.astro` — global shell with:
  - Google Fonts preload (Inter Tight, Inter, Geist Mono, Source Serif 4)
  - CSS custom properties (all design tokens)
  - Noise overlay `<div>` (opacity 0.03, z-index 9999, pointer-events none)
  - Custom cursor (8px dot, rAF lag, vanilla JS)
  - Reading progress bar logic
- Tailwind v4 CSS config with design tokens

### Phase 3 — Landing / Resume Page (`/`)
**Status:** complete
- Hero section: heading, subheading, two links
- Horizontal scroll resume (GSAP ScrollTrigger, desktop only; vertical on mobile)
- 3 placeholder career cards (company, title, duration, 3 bullets, tags, year watermark)
- Footer strip: name + GitHub + LinkedIn + email
- Reduced motion: disable GSAP pin/scroll

### Phase 4 — Blog Index (`/blog`)
**Status:** complete
- Two-pane split layout with CSS flex expand (70/30)
- Series grouping header: "[Series Name] — N parts"
- Series order indicator in pane: "Part N of [total]"
- Single pane fallback if 1 article
- 3+ articles → bento grid
- Glow colors: first = `rgba(0,245,255,0.06)`, second = `rgba(112,0,255,0.06)`

### Phase 5 — Blog Article Page (`/blog/[slug]`)
**Status:** complete
- `src/layouts/ArticleLayout.astro`
- 65ch reading container (centered, padding 0 1.5rem)
- colorScheme: 'light' scoped override (bg #faf9f6, color #0f0e17) — layout shell stays dark
- Drop cap on first paragraph (Inter Tight, Bold, float left, ~3 lines)
- Byline: author + date (Geist Mono) + estimated read time
- Reading progress bar (2px, --accent, vanilla JS ~20 lines)
- Sticky TOC (fixed left, >1280px, auto-generated from H2/H3, fades in after hero)
  - On 768–1280px: if hasInteractiveComponents, show desktop notice
- Series strip in hero area (below eyebrow, before H1)
- Series navigation footer (two-column, replaces generic next card)
- Fixed bottom-left back arrow (`← Writing`, /blog)
- "Next read" card for non-series articles
- Shiki code blocks: custom dark theme, copy button, Geist Mono
- All animations wrapped in prefers-reduced-motion check

### Phase 6 — Island Components
**Status:** complete

#### ScaleChain (pure CSS, no client JS)
- Horizontal scrolling row, items connected by `→`
- Final item `???` in --accent
- Mobile: wraps to multiple lines
- Font: Geist Mono, small, --text-muted

#### StatGrid (pure CSS, no client JS)
- CSS grid: repeat(auto-fit, minmax(180px, 1fr)), gap: 1px
- Outer border-radius 4px; each cell --surface bg
- Stat number: Inter Tight, Bold, 2rem, --accent (dark) / #c0392b (light)
- Stat label: Geist Mono, 0.78rem, --text-muted, uppercase

#### HabitableZoneDiagram (client:idle)
- Canvas-based solar evolution slider
- Replace Cormorant Garamond → Source Serif 4; Space Mono → Geist Mono in canvas
- Interaction cue above slider (desktop); mobile: hide, show text notice
- Play button: hide if prefers-reduced-motion
- Accessibility: role="img", aria-label reflecting slider state

#### PlanetOrbitDiagram (client:idle)
- Clickable planet orbit sequence
- Each body: role="button", aria-label="[Planet]: [phase]", keyboard accessible
- Description panel below updates on click/focus
- Mobile: hide diagram, show vertical list

### Phase 7 — OG Image Generation
**Status:** complete
- Astro endpoint at `/og/[slug].png` using Satori + @resvg/resvg-js
- Blog articles: title + first tag + site name, Inter Tight + dark palette
- Homepage OG image
- Series badge: "Part [N] · [series name]" in Geist Mono when series defined
- Always dark palette regardless of article colorScheme

### Phase 8 — 404 Page
**Status:** complete
- Terminal aesthetic, dark
- `error: page_not_found` in Geist Mono
- Subtext: "This page doesn't exist. Yet."
- Link back to home

---

## Content to Drop In Later (placeholders now)
- Real name, bio, photo
- Actual job history
- Social links (GitHub, LinkedIn, email)
- Full MDX body text for both articles

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| (none yet) | — | — |
