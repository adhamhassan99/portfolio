# Pre-flight Check — Claude Design Handoff

**Date:** Aug 31, 2026  
**Subject:** Adham Abdelwahab portfolio  
**Verdict:** ✅ **READY TO PASTE** (minor TBDs acceptable for design phase)

---

## Document readiness

| Document | Status | Notes |
|---|---|---|
| `claude-design-prompt.md` | ✅ Ready | Synced with real copy, 8 sections |
| `content-inventory.md` | ✅ Ready | Core copy filled |
| `ledger-spec.md` | ✅ Ready | Canonical visual system |
| `gsap-animation-guide.md` | ✅ Ready | 3 motion moments |
| `anti-patterns.md` | ✅ Ready | |
| `03-research-synthesis.md` | ⚠️ Stale | Still lists 10 sections incl. In the Wild / Writing — use prompt as source of truth |

---

## Cross-doc consistency (resolved)

| Issue | Was | Fixed to |
|---|---|---|
| Section count | Prompt: 10, Inventory: 2 skipped | **8 sections** (01–08) |
| Availability | Prompt: Q4 2026 | **Available now** |
| Copy source | Prompt: all placeholders | **Real copy embedded** in prompt |
| In the Wild | Prompt required section | **Skipped v1** |
| Writing | Prompt required section | **Skipped v1** |
| Hero h1 | Generic placeholder | **Full sentence with 4 employer links** |

---

## Content completeness

| Section | Status |
|---|---|
| 01 Intro | ✅ Complete |
| 02 Trust | ✅ 4 employers + URLs |
| 03 Selected Work | ✅ 3 projects with outcomes + tags |
| 04 Process | ✅ 4 phases |
| 05 Services + disqualifier | ✅ Complete |
| 06 Stack | ✅ 10 technologies with years |
| 07 FAQ | ✅ 6 Q&As |
| 08 Contact | ✅ Email + promises |
| Case study bodies | ⚠️ Summaries only — expand before build |
| GitHub / LinkedIn | ⚠️ TBD — omit from v1 nav |
| OG image / favicon | 📋 Design deliverable |
| In the Wild | ⏭️ Deferred |

---

## Strategic alignment

| Axis | Score | Evidence |
|---|---|---|
| Memorability | ✅ | Ledger section labels + sentence hero + Newsreader serif |
| Hireability | ✅ | Process, FAQ, disqualifier, outcome-first projects, email CTA |
| Animation restraint | ✅ | 3 moments, no Lenis/WebGL/cursor |
| WCAG | ✅ | Ledger 35-pair audit |
| Anti-patterns | ✅ | No Brittany clone, no skill bars, no purple gradients |

---

## Paste instructions

1. Open Claude Design
2. Paste entire contents of **`docs/claude-design-prompt.md`**
3. Optionally attach **`docs/design-system/ledger-spec.md`** for token reference
4. Ask for: Homepage + 3 case study pages + 404 + component library

---

## Before engineering (post-design)

- [ ] Add GitHub + LinkedIn URLs
- [ ] Expand 3 case study bodies (300–800 words each)
- [ ] Add In the Wild section (optional v1.1)
- [ ] Confirm logo usage rights with PwC / Ejada / Orascom / Magentic
- [ ] Generate OG image from design output
