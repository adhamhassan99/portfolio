Design a complete visual system and page layouts for **Adham Abdelwahab**'s personal portfolio. Use the **Ledger** design system (`docs/design-system/ledger-spec.md`) for all visual tokens.

**Real copy is provided below** — use it verbatim unless a field is marked TBD. Full source: `docs/content-inventory.md`.

The site is a digital resume optimized to convert visitors into client inquiries: distinctive without being flashy, editorial restraint, technical credibility.

## Audience & Purpose

- **Primary audience:** Founders, product leaders, and engineering managers evaluating a senior engineer for contract or advisory work
- **Primary job:** Prove craft, credibility, and judgment within 30 seconds; drive contact via email
- **Strategic tension:** Memorability × Hireability

## Acceptance Criteria

- **WCAG 2.2 AA** — Ledger tokens only (35 pairs pre-verified)
- **Performance:** LCP < 2.5s, CLS < 0.1, INP < 200ms
- **Accent discipline:** copper appears fewer than 10 times on homepage
- Anti-patterns: `docs/design-system/anti-patterns.md`

## Direction: Technical Editorial + Conversion IA

**Visual (Ledger):** cool ink on warm paper, copper for links/live states, hairlines over cards, numbered section labels.

**Structure:** srivvs.com conversion IA in emilkowal.ski / rauno.me restraint.

## Typography (Ledger)

| Role | Font | Rules |
|---|---|---|
| Display | **Newsreader** | 400 weight only; italic for emphasis — never bold display serif |
| Body / UI | **Schibsted Grotesk** | 16–17px body; near-flat scale |
| Annotations | **IBM Plex Mono** | Section labels, tags, dates, stack years |

**One display moment:** hero sentence at clamp(2.25rem, 5vw + 1rem, 3.5rem), weight 500–600.

## Color (Ledger `--t-*` tokens)

- Primary CTA: `--t-solid` (ink) — not copper
- Links: `--t-accent` (copper, rationed)
- Availability: `--t-positive` (sage)
- Hairlines: `--t-line`, `--t-line-subtle`

## Site Architecture

- **Homepage (`/`):** 8 numbered sections (07 In the Wild and 08 Writing skipped for v1)
- **Case study pages:** `/work/ai-studio`, `/work/saudi-real-estate`, `/work/flowlens`
- **404 page**
- Nav: sticky; subpages link to `/#section`

### Homepage sections — USE THIS COPY

**`01 / INTRO`**
- **h1 (SSR-visible, LCP):** Adham Abdelwahab is a senior software engineer who builds full-stack products from architecture to deployment — previously at PwC, Ejada, Orascom Developments, and Magentic AI. (inline links to employer URLs)
- Availability: **Available now** (live dot, `--t-positive`)
- Trust line: Independent, hands-on, accountable.
- CTA: **Get in touch** → `adham.hassan7499@gmail.com`
- GitHub / LinkedIn: omit from nav for v1 (TBD)

**`02 / TRUST`**
- Logos/wordmarks (muted ~40%): PwC ETIC · Ejada Systems · Orascom Developments · Magentic AI

**`03 / SELECTED WORK`** — 3 full-width rows, outcome first:

| Project | Outcome line | Tags |
|---|---|---|
| AI Studio · PwC ETIC | Marketplace for workflow-integrated AI agents via connectors and MCPs | TypeScript · React · Node.js · Python · MCP |
| Saudi Real Estate Marketplace · Ejada | 100% contactless verification and unit allocation via government APIs | React Native · TypeScript · Node.js · KSA gov APIs |
| Flowlens · Magentic AI | Real-time observability catching agent bugs before production | TypeScript · React · Next.js · AI agents |

**`04 / PROCESS`**
1. Discovery — free 30-min call
2. Scope & plan — written brief with deliverables and out-of-scope
3. Build & iterate — checkpoints and demos
4. Handoff — documentation and knowledge transfer

**`05 / SERVICES`**
- Full-stack product development (web + mobile)
- Architecture & technical planning (AI agents, MCP, gov APIs)
- Codebase audit & rescue
- Technical advisory

**Disqualifier (Newsreader italic, typographic pause):**
> This isn't a fit if you're looking for the cheapest developer or a body to execute tickets without context. I work best with founders and teams who want a senior engineer to think with them — not just type for them.

**`06 / STACK`** — mono-annotated, years in production:
TypeScript 5 · React 5 · Node.js 5 · Next.js 4 · Python 4 · React Native 3 · AWS 3 · PostgreSQL 4 · REST/Gov APIs 5 · LLM/MCP 2

**`07 / FAQ`**
- Pricing: discuss on intro call, no rate card
- Timezone: Egypt (EET/EEST), flexible US/EU
- Minimum: none — scoped work welcome
- Available: yes, alongside Magentic AI (part-time)
- First call: 30 min, fit assessment
- If it goes wrong: written scope, checkpoint reviews, you keep all code

**`08 / CONTACT`**
- Headline: If you've read this far, we should probably talk.
- First call: free 30-min intro, four questions about product/team/timeline/constraints
- Email: adham.hassan7499@gmail.com
- Promise: I reply within 24 hours.

## Motion Spec

**Full spec:** `docs/claude-design-motion-spec.md` — pass this to the design executor alongside this prompt.

**Library:** [Motion](https://motion.dev) (`motion/react`) for all micro-interactions — hover, tap, scroll reveals, layout, presence, FAQ accordion. **Not GSAP.**

Each homepage section has defined micro-interactions for liveness (availability pulse, logo hover, project row reveal, process timeline draw, FAQ spring, etc.) while staying hireable and restrained.

**Hard rules:** Hero h1 static (LCP). Max 2 looping animations. `prefers-reduced-motion` variants required. No Lenis, WebGL, custom cursor, parallax.

## Component Specs

All states including focus-visible. Breakpoints: 640/768/1024/1280px.

Section label + hairline · sentence hero · availability pill · project row · case study template · process block · services + disqualifier · stack row · FAQ · contact close · nav · buttons · focus ring

## Deliverables

1. Homepage, Case Study (×3), 404 mockup descriptions
2. Component library with focus-visible states
3. Typography scale · Ledger colors · spacing · **motion storyboard** (see `claude-design-motion-spec.md`)
4. OG image (1200×630) + favicon spec
5. Design rationale: memorability × hireability

## Technical Constraints

- Next.js App Router + Tailwind v4 (`@theme inline` from Ledger Section 8)
- Fonts: Newsreader, Schibsted Grotesk, IBM Plex Mono via `next/font`
- **Motion** (`motion/react`) for all animation — see `claude-design-motion-spec.md`
