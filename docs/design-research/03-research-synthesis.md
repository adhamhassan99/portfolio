# Research Synthesis — Ledger × Conversion IA

Reconciles [Portfolio research](c1371fbf-3cd4-45b7-b3e8-bf88c04512a3) with the **Ledger** design system ([Design tokens](a6b533cc-7e79-4b11-90f8-5d2bed5c141b)).

## Strategic move

| Layer | Source | What it carries |
|---|---|---|
| **Visual system** | Ledger | Credibility, WCAG, editorial craft |
| **Information architecture** | srivvs.com | Hireability, conversion |
| **Restraint register** | emilkowal.ski / rauno.me | Warm paper, flat scale, rationed accent |
| **Memorable detail** | Ledger + research | Numbered section labels + one of: sentence hero, "In the Wild", or disqualifier block |

**Gap the research found:** no sampled site scores high on distinctiveness, hireability, and animation restraint simultaneously. This combination targets that gap.

## Validated by DOM research (Aug 2026)

- Warm off-white ground (`#FDFDFC` cluster) beats navy+teal (Brittany clone fatigue)
- Flat type scales (14–17px body) signal senior confidence; one display moment only
- Two text colors + rationed accent (<10 uses/page)
- Conversion from IA: disqualifiers, process, FAQ, response-time promise — not from motion
- Enterprise buyers penalize Lenis, WebGL heroes, custom cursors, fade-everything scroll

## Homepage architecture (final)

Single column, ~640–720px measure, Ledger numbered labels on every section:

| Label | Section | Research source |
|---|---|---|
| `01 / INTRO` | Sentence hero (rauno.me) + availability + ink CTA | h1 = full sentence with inline employer/client links, **SSR-visible for LCP** |
| `02 / TRUST` | Muted employer/client names or wordmarks | Optional if logos cleared |
| `03 / SELECTED WORK` | 3 case study rows, outcome-first | srivvs.com anonymised case pattern |
| `04 / PROCESS` | 3–4 named phases | Enterprise de-risking |
| `05 / SERVICES` | What I do + **disqualifier paragraph** | srivvs.com anti-services |
| `06 / STACK` | Technologies + years in production (mono) | srivvs.com annotated stack |
| `07 / IN THE WILD` | ~~Skipped v1~~ | Deferred |
| `08 / WRITING` | ~~Skipped v1~~ | Deferred |
| `07 / FAQ` | 5–6 pre-sales objections | srivvs.com |
| `08 / CONTACT` | Close + response-time promise | srivvs.com |

## Hero pattern (recommended)

Replace headline + subhead + bio with **one sentence**:

> `[Name]` is a senior software engineer who [claim with inline links to employers/projects].

Static in HTML. Animate only: availability dot, CTA button, trust line below — not the h1.

## Motion (3 moments — unchanged budget)

1. Hero secondary elements (availability, CTA, trust line)
2. Section hairline draw on ScrollTrigger enter + batch reveal for first content block
3. Case study row hover: hairline draw + mono metadata slide-in (informational, not decorative)

## Anti-patterns (research-confirmed)

See `02-portfolio-moodboard-report.md` Section 2. Top offenders: Brittany clone, skill bars, project grids without outcomes, missing commercial signals, no disqualifier.

## Reference URLs (profiled in-browser)

srivvs.com · brittanychiang.com · nkuek.dev · emilkowal.ski · rauno.me · leerob.com · samuelkraft.com · paco.me · joshwcomeau.com · matvoyce.tv
