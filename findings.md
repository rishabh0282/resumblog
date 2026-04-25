# Findings

## Project Source Documents

### portfolio_build_prompt.md
Master build spec. Key points:
- No React, no Framer Motion — vanilla JS + CSS only for interactivity
- All fonts loaded in global layout head ONLY — never in MDX or child components
- Forbidden fonts: Cormorant Garamond, Playfair Display, Space Mono — replace any references found in canvas/island code
- Noise overlay: layout shell only, NOT inside the 65ch reading container
- Glassmorphism: `backdrop-filter: blur(12px)`, `background: rgba(255,255,255,0.03)`, `border: 1px solid var(--border)`
- Blog index: 2 articles → split pane; 3+ → bento grid; series grouping with header label
- Article page: colorScheme 'light' scopes only the 65ch block — shell stays dark
- --accent (#00F5FF) at full opacity only on --bg for WCAG AA; on light bg use #0a6e8a instead
- Drop cap: `<span aria-hidden="true">` + `<span class="sr-only">` for screen reader flow
- All GSAP wrapped in prefers-reduced-motion check

### article1_design_prompt.md — "We Are Not the Point"
- colorScheme: light → reading container: bg #faf9f6, color #0f0e17
- H2 color: #0f0e17; Pullquote border: 2px solid #b8860b (warm gold, NOT --accent)
- StatGrid inside light container: cell bg #f0ece4, stat number #c0392b, border #d9d3c7
- Inline series card inside light container: bg rgba(0,0,0,0.04), border rgba(0,0,0,0.12), link #0a6e8a
- Hero: static star dots, no animated starfield. Series strip below eyebrow before H1.
- Inline series card placed after "What If We Are Wrong About Life?" section
- Series footer: left = current (greyed, no link), right = Part II (--accent, with excerpt)

### article2_design_prompt.md — "The Solar Lifecycle Theory"
- colorScheme: dark (default) — full dark, no light override
- hasInteractiveComponents: true → HabitableZoneDiagram + PlanetOrbitDiagram (client:idle)
- Abstract card: glassmorphism + status grid (OBSERVED/INFERRED/SPECULATIVE) + nav pills
- Article body: additional design tokens: --gold #c8a96e, --gold-dim #7a6440, --amber #e8833a, --teal #3a9494, --rust #c04a2a, --ice (gradient color)
- H3 color: --gold; section kickers: Geist Mono uppercase --gold-dim
- Lead paragraphs: Source Serif 4, italic, #b8a888, border-left 2px solid --gold-dim
- Timeline component with scroll reveal (70ms stagger)
- Evidence Grid: 2 columns (Confirmed/Original), scroll reveal (24ms stagger)
- Open Problems List: custom counter, --rust color, 60ms stagger
- Venus Section Diagram: 3-zone horizontal layout
- Citation links: pill badges, --gold color
- Reference list at bottom before series footer
- Series footer: left = Part I (--accent, with excerpt), right = current (greyed, no link)
- TOC on 768–1280px: show "Interactive diagrams available on desktop" notice

## Key Architectural Decisions
- Content Collections schema includes: title, date, tags, excerpt, draft, series, seriesOrder, colorScheme, hasInteractiveComponents
- OG images: always dark palette; series badge when series defined
- Island components in src/components/blog/
- ScaleChain and StatGrid: pure CSS (no client JS), HabitableZoneDiagram and PlanetOrbitDiagram: client:idle
