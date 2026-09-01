# Personal Website — Design Research & System Docs

## Start here

1. Fill `content-inventory.md`
2. Paste `claude-design-prompt.md` into Claude Design
3. Implement from `design-system/ledger-spec.md` Sections 8–9

## Document Map

| File | Purpose |
|---|---|
| **`claude-design-implementation-prompt.md`** | Paste into Cursor agent to build the site |
| **`implementation-playbook.md`** | Skills, subagents, phased build order |
| **`claude-design-prompt.md`** | Paste into Claude Design |
| **`claude-design-motion-spec.md`** | Motion micro-interactions for build |
| **`design-system/ledger-spec.md`** | Canonical visual system |
| `design-research/02-portfolio-moodboard-report.md` | DOM-verified competitor research |
| `design-research/03-research-synthesis.md` | Research × Ledger reconciliation |
| `content-inventory.md` | All copy placeholders |
| `design-system/gsap-animation-guide.md` | 3 motion moments |
| `design-system/anti-patterns.md` | Banned patterns |

## Strategy

**Memorability × Hireability** — Ledger visuals + srivvs.com conversion IA + rauno.me sentence hero.

## Motion handoff

Paste **`claude-design-motion-spec.md`** together with **`claude-design-prompt.md`** for the design executor. Stack: Motion (`motion/react`), not GSAP.

## Implementation (after Claude Design HTML)

1. Place HTML exports in `design/claude-design/`
2. Read `implementation-playbook.md` — skills, agents, phases
3. Paste **`claude-design-implementation-prompt.md`** into a new Cursor agent session
