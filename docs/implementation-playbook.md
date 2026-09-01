# Implementation Playbook — Adham Abdelwahab Portfolio

Orchestration guide: skills, agents, phases, and file references for building the site from Claude Design HTML to production.

## Source-of-truth hierarchy

1. **Visual:** `design/claude-design/*.html` — Claude Design exports (layout, spacing, visual hierarchy)
2. **Copy:** `docs/content-inventory.md` — all text; overrides HTML placeholder copy
3. **Tokens:** `docs/design-system/ledger-spec.md` Sections 8–9 — colors, typography, `@theme inline`
4. **Motion:** `docs/claude-design-motion-spec.md` — Motion micro-interactions per section
5. **Constraints:** `docs/design-system/anti-patterns.md` — banned patterns

If HTML and Ledger conflict on tokens, **Ledger wins**. If HTML and inventory conflict on copy, **inventory wins**.

---

## ECC skills (activate by phase)

| Phase | Skills | Path |
|---|---|---|
| Scaffold | `nextjs-turbopack`, `codebase-onboarding` | `.claude/skills/` |
| Design port | `frontend-patterns`, `frontend-design-direction` | `.claude/skills/` |
| Motion | `claude-design-motion-spec.md` (doc, not skill) | `docs/` |
| Quality | `verification-loop`, `e2e-testing` | `.claude/skills/` |
| Security | `security-review` | `.claude/skills/` |
| Deploy | `deployment-patterns` | `.claude/skills/` |
| Docs lookup | `documentation-lookup` (Next.js, Motion, Tailwind v4) | `.claude/skills/` |

## Cursor / ECC rules (auto-apply on TS files)

- `.claude/rules/typescript/patterns.md` — App Router, Server Components default
- `.claude/rules/typescript/coding-style.md`
- `.claude/rules/typescript/security.md`
- `.claude/rules/common/performance.md`

## Recommended subagents (dispatch per phase)

| Phase | Subagent | Model | Task |
|---|---|---|---|
| 1 Scaffold | `generalPurpose` | inherit | Next.js 16 + Tailwind v4 + Ledger tokens + fonts |
| 2 Components | `generalPurpose` + `react-reviewer` | inherit / Opus | Port HTML sections to React; reviewer after each major section |
| 3 Motion | `generalPurpose` | inherit | Motion variants, `useInView`, reduced motion |
| 4 QA | `e2e-runner` | inherit | Playwright: nav, CTA, case study routes, a11y |
| 5 Security | `security-review` | inherit | Pre-deploy security pass |
| Build failures | `react-build-resolver` | inherit | Fix compile/type errors only |

Dispatch parallel agents only for independent slices (e.g. case study pages in parallel after shared layout exists).

---

## Build phases

### Phase 1 — Scaffold (Day 1)

- `npx create-next-app@latest` — App Router, TypeScript, Tailwind, ESLint, `src/` optional
- Paste Ledger `:root`/`.dark` + `@theme inline` from `ledger-spec.md` Section 8–9 into `app/globals.css`
- `next/font`: Newsreader, Schibsted Grotesk, IBM Plex Mono
- Install `motion` (`motion/react`)
- Folder structure:

```
app/
  layout.tsx
  page.tsx                 # homepage sections
  not-found.tsx
  work/
    [slug]/page.tsx
components/
  layout/                  # nav, footer
  sections/                # intro, trust, work, process, ...
  ui/                      # button, section-label, hairline
  motion/                  # variants.ts, animated wrappers
lib/
  motion/variants.ts
  content/                 # projects, faq, stack from inventory
design/claude-design/      # HTML reference (read-only)
```

**Gate:** `pnpm build` passes, fonts load, dark mode tokens switch correctly.

### Phase 2 — HTML port (Days 2–4)

For each HTML file in `design/claude-design/`:

1. Open HTML + inventory copy side by side
2. Extract section structure → React Server Components where possible
3. Client components only for: nav scroll state, FAQ accordion, Motion wrappers
4. Match spacing, typography, hairlines to Ledger tokens — not raw HTML px values
5. Employer logos: `next/image`, muted opacity per motion spec

**Gate:** Visual diff against HTML at 1440px and 375px (manual or Playwright screenshot).

### Phase 3 — Motion (Day 5)

Implement per `claude-design-motion-spec.md`:

- `lib/motion/variants.ts` — springs, stagger, reveal
- `useReducedMotion()` on all animated components
- Hero: static h1; pulse availability dot; stagger trust + CTA
- Section labels + hairline draw on `useInView`
- Project row hover informational reveal
- FAQ spring accordion
- Route `AnimatePresence` for case studies

**Gate:** `prefers-reduced-motion` manual test; no layout shift from animations.

### Phase 4 — Content & SEO (Day 6)

- Wire all copy from `content-inventory.md`
- `metadata` + OpenGraph in `layout.tsx` and per route
- JSON-LD Person schema
- Favicon + OG image from design assets
- `mailto:` CTA → `adham.hassan7499@gmail.com`

**Gate:** Lighthouse ≥ 95 Performance, Accessibility, Best Practices, SEO.

### Phase 5 — Verify & deploy (Day 7)

- `verification-loop` skill: build, tsc, lint, test
- `e2e-runner`: homepage scroll, work links, contact email, 404
- `security-review` on final diff
- `deployment-patterns`: Vercel, preview deploy, production

---

## Tools

| Tool | Use |
|---|---|
| **Next.js 16** + Turbopack | `next dev`, `next build` |
| **Tailwind CSS v4** | `@theme inline` from Ledger |
| **Motion** | `motion/react` — all animation |
| **Playwright** | E2E via `e2e-runner` subagent or `user-playwright` MCP |
| **Vercel** | Deploy (default for Next.js portfolio) |
| **Context7 MCP** | Next.js / Motion API lookup when unsure |

## Executor prompt

Paste **`docs/claude-design-implementation-prompt.md`** into a new Cursor agent session to run the full build.
