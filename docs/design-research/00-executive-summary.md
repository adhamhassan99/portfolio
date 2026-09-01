# Executive Summary — Senior Engineer Portfolio Research (2026)

> **Status:** Superseded on color and motion specifics by `docs/design-system/tokens.md` and `docs/claude-design-prompt.md`. Rust accent is canonical; Lighthouse target is 95+ with LCP < 2.5s.

## Key Patterns That Win

1. **Restraint as credibility** — Top hireable portfolios (Christopher Igweze, Tulio Anjos) use locked design systems with few tokens, typography-driven hierarchy, and explicit anti-pattern rules. Visual discipline signals engineering discipline.

2. **The site IS the case study** — Performance (Lighthouse 95+, LCP < 2.5s), accessibility, SEO/JSON-LD, and build-time SSG/ISR are demonstrated, not claimed. Client-facing engineers win by showing how they ship.

3. **One signature motion moment** — Award-level sites (Joffrey Spitzer, Jonas Reymondin) use GSAP with a single reusable motion language: staggered reveals, Flip transitions, scroll-scrubbed sections. Animation restraint scores higher than animation volume.

4. **Editorial layout over card grids** — Left-weighted columns, deliberate whitespace, case studies as long-form narrative rather than thumbnail grids. Avoids the "Dribbble template" trap.

5. **Clear conversion path** — Availability status, services scope, contact CTA above the fold or in persistent nav. Hireability requires making the next step obvious.

## Anti-Patterns to Avoid

| Anti-pattern | Why it fails |
|---|---|
| Purple gradients + floating blobs | Instant "AI template" signal |
| Dark mode + neon accents only | Reads as gamer aesthetic, not client-ready |
| 3D hero with no substance | Memorable but not hireable |
| Skills progress bars | Junior signal, zero credibility |
| Generic "Hi I'm X, a passionate developer" | No positioning, interchangeable |
| Heavy page-load animations | Performance tax on first impression |
| Custom cursor on a resume site | Flashy without purpose |
| Card-in-card layouts | Visual noise, poor scanability |

## Recommended Direction

**Tone:** Calm, precise, quietly confident, editorial, technical

**Typography:** Display sans (Instrument Sans or similar) + body grotesk (Inter/Geist) + mono accent (JetBrains Mono) for code/metadata

**Color:** Warm neutral base (paper/stone) with one sharp accent (rust, teal, or amber — not purple). Dark mode as optional toggle, not default gimmick.

**Layout:** Hero (name + one-line positioning + availability) → Selected Work (2–4 deep case studies) → Capabilities/Services → About (brief) → Contact CTA

**Memorable details to adapt:**
- Locked token system with pre-commit validation (Igweze)
- Modular pixel/grid motif tied to engineering precision (Reymondin)
- IDE-inspired information architecture for technical audience (Patrick Garcia — use sparingly)

**Animation moments (GSAP-friendly):**
- Hero: staggered fade-up of headline + subline (0.6s, power2.out)
- Scroll: section reveals via ScrollTrigger (opacity + translateY 24px)
- Project cards: subtle lift + border accent on hover (transform only)

## Reference URLs

### Direct / Hireable
- https://www.christopherigweze.com
- https://www.pgarcia.dev
- https://www.christopherigweze.com/work/portfolio-site

### Adjacent / Craft-forward
- https://joffrey-spitzer.dev
- https://jonasreymondin.ch
- https://alexshanley.com

### Aspirational / Motion reference
- https://www.hontran.dev/blog/how-to-build-an-award-winning-portfolio-site
- https://tympanus.net/codrops/2026/02/18/joffrey-spitzer-portfolio-a-minimalist-astro-gsap-build-with-reveals-flip-transitions-and-subtle-motion/
- https://tympanus.net/codrops/2026/03/16/jonas-reymondins-portfolio-reclaiming-the-ui-eye-through-systems-code-and-pixel-motion/

### Classic benchmarks
- https://brittanychiang.com
- https://www.joshwcomeau.com
- https://leerob.io
