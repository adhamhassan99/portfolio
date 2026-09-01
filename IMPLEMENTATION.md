# Implementation Notes

## Intentional deviations from Claude Design HTML

1. **Nav active indicator** — Uses Motion `layoutId="nav-indicator"` on homepage scroll-spy instead of static CSS underline; matches motion spec.
2. **Scroll reveals** — Implemented via `Reveal` client component with `useInView({ once: true })` rather than CSS `.motion [data-reveal]` class toggling; hidden state is JS-only (never CSS `opacity: 0` on hero h1).
3. **FAQ accordion** — Uses Motion `AnimatePresence` + height animation with instant fallback for `prefers-reduced-motion`.
4. **Subpage nav** — Desktop shows full nav on homepage; subpages show compact "← All work" / "Contact" on mobile only (sm+ keeps theme toggle). Case study HTML always shows back links — mobile parity preserved.
5. **Placeholder content** — Case study outcome paragraphs retain `[PLACEHOLDER — …]` markers from HTML exports until shareable metrics are available.
6. **GitHub / LinkedIn** — Omitted from nav per content inventory (URLs not yet provided).
7. **In the Wild / Writing** — Sections skipped for v1 per scope.
9. **Subpage motion** — Case studies use `app/work/template.tsx` for route transitions (280ms enter / 160ms exit). Header metadata staggers on mount; body sections scroll-reveal with view-triggered hairlines. 404 uses SectionLabel + mount-staggered Reveal blocks.

8. **Product screenshots** — Case study media is per-project (`media` in `lib/content/projects.ts`): mobile projects render an App Store-style horizontal gallery, web projects a single hero image, and anything without media keeps the original stripe placeholder block. Raw screenshots get a CSS iPhone frame with a caption rail; pre-composed store art sets `framed: false` and supplies its own headline.

## Architecture

- Server Components by default; `"use client"` only for Nav, FAQ, Motion wrappers, Button, ThemeProvider.
- Content typed in `lib/content/` sourced verbatim from `docs/content-inventory.md`.
- Tailwind v4 with Ledger semantic tokens only — no hardcoded hex in components.
- Hero `h1` is static SSR HTML (no load-time opacity animation).

## Testing

Playwright smoke tests cover nav, work links, email CTA, 404, and reduced-motion pulse disable.
