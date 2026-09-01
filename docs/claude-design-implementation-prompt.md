Implement Adham Abdelwahab's personal portfolio as a production Next.js site. Claude Design HTML exports are the visual source of truth; project docs supply copy, Ledger design tokens, and Motion micro-interaction specs. Match the approved design pixel-faithfully at desktop and mobile, then verify performance, accessibility, and hireability signals before deploy.

## Repository

**Root:** `/Users/adhamhassan/projects/personal website`

## Visual source — Claude Design HTML

Read all files in `design/claude-design/` before writing UI code.

| HTML file | Next.js route |
|---|---|
| `index.html` or `homepage.html` | `app/page.tsx` |
| `case-study-ai-studio.html` | `app/work/ai-studio/page.tsx` |
| `case-study-saudi-real-estate.html` | `app/work/saudi-real-estate/page.tsx` |
| `case-study-flowlens.html` | `app/work/flowlens/page.tsx` |
| `404.html` | `app/not-found.tsx` |

Port layout, spacing, typography hierarchy, hairlines, and component structure from HTML. Do not copy inline styles or hardcoded hex — map every color and spacing value to Ledger `--t-*` tokens.

## Copy source

**File:** `docs/content-inventory.md`

Use all copy verbatim. Key facts:

- Name: Adham Abdelwahab
- Email: adham.hassan7499@gmail.com
- CTA: Get in touch
- Availability: Available now
- 3 featured projects: AI Studio, Saudi Real Estate Marketplace, Flowlens
- 8 homepage sections (no In the Wild, no Writing for v1)
- GitHub / LinkedIn: omit from nav until URLs provided

## Design system

**File:** `docs/design-system/ledger-spec.md`

- Implement Sections **8** (`@theme inline`) and **9** (`:root` / `.dark`) in `app/globals.css`
- Fonts via `next/font`: Newsreader (display), Schibsted Grotesk (body), IBM Plex Mono (annotations)
- Primary buttons: `--t-solid` ink fill — not copper
- Links / accent: `--t-accent` copper, rationed (<10 uses on homepage)
- Section signature: numbered mono label + full-width hairline (`01 / INTRO`, etc.)

**Anti-patterns:** `docs/design-system/anti-patterns.md` — do not introduce purple gradients, skill bars, card shadows, Lenis, WebGL, or custom cursor.

## Motion

**File:** `docs/claude-design-motion-spec.md`

- Library: **Motion** (`motion/react`) only — not GSAP
- Centralise variants in `lib/motion/variants.ts`
- Hero `h1` sentence: **static in SSR HTML** (LCP) — never opacity-0 on load
- Implement per-section micro-interactions from the motion spec (availability pulse, logo hover, project row reveal, process connector, FAQ spring, nav `layoutId` indicator)
- `useReducedMotion()` everywhere; provide static fallbacks
- Max 2 looping animations (availability dot + contact promise dot)

## Tech stack

| Package | Version | Purpose |
|---|---|---|
| `next` | 16.x | App Router, SSR, metadata |
| `react` / `react-dom` | 19.x | UI |
| `tailwindcss` | 4.x | Styling via `@theme inline` |
| `motion` | latest | Micro-interactions |
| `typescript` | 5.x | Strict mode |

Commands: `pnpm` preferred. Dev: `pnpm dev` (Turbopack default).

## Architecture rules

- **Server Components by default** — add `"use client"` only for Motion, nav scroll state, FAQ accordion
- Colocate section components under `components/sections/`
- Content as typed data in `lib/content/` (projects, faq, stack, process) sourced from inventory
- Case study slugs: `ai-studio`, `saudi-real-estate`, `flowlens`
- Homepage anchor sections: nav links scroll on `/`; on subpages link to `/#section`
- Responsive breakpoints: 640, 768, 1024, 1280px — match HTML at each

## Skills to read and follow

Before coding, read these skills from `.claude/skills/`:

1. `nextjs-turbopack` — dev workflow
2. `frontend-patterns` — React/Next patterns
3. `frontend-design-direction` — restraint, no generic UI
4. `verification-loop` — quality gates before completion
5. `e2e-testing` — Playwright structure
6. `deployment-patterns` — Vercel deploy

Apply TypeScript rules from `.claude/rules/typescript/patterns.md` (App Router, `next/image`, `next/link`).

## Subagent dispatch (recommended)

Run via Cursor Task tool in this order:

1. **Scaffold** — Next.js + Ledger tokens + fonts + folder structure → gate: `pnpm build`
2. **Homepage port** — HTML → React sections + nav/footer → gate: visual match 1440/375
3. **Case studies** (parallel after layout) — 3 `/work/[slug]` pages from HTML
4. **Motion pass** — implement `claude-design-motion-spec.md` on all sections
5. **e2e-runner** — Playwright: nav, work links, email CTA, 404, reduced motion
6. **security-review** — final diff before deploy
7. **react-build-resolver** — only if build/type errors block progress

After each phase, run `pnpm build` and fix errors before continuing.

## Acceptance criteria

- Visual parity with Claude Design HTML at 1440px and 375px width
- All copy from `content-inventory.md` — no placeholder text in production UI
- WCAG 2.2 AA using Ledger token pairs (pre-verified)
- Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, SEO
- LCP < 2.5s, CLS < 0.1, INP < 200ms
- Motion matches `claude-design-motion-spec.md`; reduced motion works
- `pnpm build` and `pnpm lint` pass with zero errors
- Playwright smoke tests pass for critical paths
- Deploy-ready on Vercel (no secrets in repo)

## Deliverables

1. Working Next.js app in repo root (not a subdirectory)
2. `README.md` with dev/build/deploy commands
3. Playwright smoke tests in `tests/e2e/`
4. Brief `IMPLEMENTATION.md` noting any intentional deviations from HTML and why

## Out of scope for v1

- In the Wild section
- Writing / blog section
- GitHub / LinkedIn links (until URLs provided)
- Cal.com / Calendly integration
- CMS — content is static from `lib/content/`
- GSAP, Lenis, Three.js, custom cursor

## Execution order

1. Read `design/claude-design/*.html` and all docs listed above
2. Scaffold Next.js + Ledger + fonts
3. Build shared primitives: `SectionLabel`, `Hairline`, `Button`, `Nav`, `Footer`
4. Implement homepage sections 01–08 from HTML + inventory
5. Implement 3 case study pages + 404
6. Wire Motion per motion spec
7. Metadata, JSON-LD, favicon, OG
8. Verify, test, security review, document

Start by listing every file in `design/claude-design/` and confirming the doc inventory before writing code.
