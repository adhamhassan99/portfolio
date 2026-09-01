# Motion & Micro-interaction Spec — Adham Abdelwahab Portfolio

**For design executor:** Use alongside `claude-design-prompt.md` and `ledger-spec.md`. This document defines *where* motion lives, *what it communicates*, and *how alive* each section should feel — without crossing into flashy territory.

**Library:** [Motion](https://motion.dev) (`motion/react`) — **primary**. Not GSAP, not Lenis, not WebGL.

Motion is chosen for declarative React micro-interactions: hover, tap, layout, presence, scroll-triggered reveals, and spring physics at a small bundle footprint. Every animation must feel **native to the UI**, not bolted on.

---

## Motion philosophy

| Principle | Rule |
|---|---|
| **Purpose** | Motion confirms state, reveals hierarchy, or rewards attention — never decorates |
| **Register** | Quiet confidence: a senior engineer's site, not a motion designer's reel |
| **Density** | ~2–3 micro-interactions per viewport; stagger reveals once per section |
| **Physics** | Springs for interactive feedback; eased tweens for entrances |
| **Properties** | `transform` and `opacity` only — never width/height/margin/box-shadow |
| **Accessibility** | `prefers-reduced-motion: reduce` → static UI, instant state changes |
| **LCP** | Hero `h1` sentence is **never** hidden or animated on load |

**Taste reference:** emilkowal.ski restraint + brittanychiang.com subtle hover + Motion UI production patterns. **Anti-reference:** matvoyce.tv kinetic menu, Lenis scroll hijacking, custom cursor, parallax blobs.

---

## Motion vocabulary (map to Ledger Section 6)

Use these tokens from `ledger-spec.md` — do not invent new durations.

| Token | Value | Use in Motion |
|---|---|---|
| `--t-duration-instant` | 80ms | `whileTap` scale |
| `--t-duration-fast` | 140ms | Hover color, underline draw |
| `--t-duration-normal` | 220ms | Default transitions |
| `--t-duration-slow` | 380ms | FAQ accordion, nav blur |
| `--t-duration-entrance` | 700ms | Scroll reveal (once) |
| `--t-ease-out` | cubic-bezier(0.22, 1, 0.36, 1) | Default ease |
| `--t-ease-spring` | slight overshoot | Availability pulse, button hover |
| `--t-lift-sm` | -2px | Button / link hover |
| `--t-lift-md` | -4px | Project row hover |
| `--t-reveal-y` | 14px | Scroll entrance offset |
| `--t-stagger` | 0.07s | List stagger default |

**Spring presets (Motion):**

```ts
export const springSnappy = { type: "spring", stiffness: 400, damping: 30 }   // taps, toggles
export const springGentle = { type: "spring", stiffness: 260, damping: 28 } // hovers, layout
export const springSoft   = { type: "spring", stiffness: 180, damping: 24 } // FAQ expand
```

---

## Technical stack (engineering handoff note)

```json
{ "motion": "^12.0.0" }
```

```tsx
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react"
```

- Wrap animated leaves in `"use client"` components; keep copy server-rendered
- Centralise variants in `lib/motion/variants.ts`
- Use `useReducedMotion()` to swap springs for `{ duration: 0 }`
- Scroll reveals: `useInView({ once: true, margin: "-10% 0px" })`

---

## Global micro-interactions (always on)

### Navigation

| Trigger | Animation | Duration | Notes |
|---|---|---|---|
| Scroll > 80px | Nav bg: transparent → `--t-bg-primary` at 85% + `backdrop-blur(8px)` + hairline bottom fades in | 220ms ease-out | CSS transition, not spring |
| Active section | Mono underline slides between nav items via `layoutId="nav-indicator"` | springGentle | Shared layout animation |
| Nav link hover | Text color → `--t-accent`; underline `scaleX` 0→1 from left | 140ms | Pseudo-element transform |
| Mobile menu open | Panel slides from right + `AnimatePresence`; scrim fades | 380ms | Focus trap required |

### Section annotation label (`01 / SELECTED WORK`)

| Trigger | Animation | Notes |
|---|---|---|
| Section enters viewport | Label + hairline: opacity 0→1, hairline `scaleX` 0→1 from left | Stagger 60ms label then line |
| Scroll through section | Label stays pinned in left margin (desktop); crossfades to next section label on exit | Optional desktop-only; skip on mobile |
| Reduced motion | Label and line visible immediately at full width |

### Buttons & links

| Element | Hover | Tap / Focus |
|---|---|---|
| Primary CTA (ink solid) | `y: -2px`, bg → `--t-solid-hover` | `scale: 0.985` |
| Ghost button | Border → `--t-line-strong` | `scale: 0.985` |
| Inline employer links (hero) | Underline draws L→R (`scaleX`), color → `--t-accent-hover` | Focus ring `--t-accent-ring` |
| Email link (contact) | Underline + subtle `--t-accent-subtle` bg wash | Copy-to-clipboard toast optional |

### Focus-visible (non-animated but paired)

All interactive elements: 2px `--t-accent-ring` outline, 2px offset — must be visible when motion is reduced.

---

## Per-section motion map

Design executor: specify each in mockups as a **motion storyboard frame** (before → trigger → after).

### `01 / INTRO`

| Element | Motion | Alive? |
|---|---|---|
| h1 sentence | **Static** — SSR visible, no fade | Credibility |
| Availability pill | Sage dot: soft pulse (opacity 0.6↔1, scale 1↔1.15, 2.5s loop) | **Alive** — signals "available now" |
| Trust line | Fade up + 14px, delay 120ms after load | Settle |
| CTA "Get in touch" | Fade up, delay 200ms; hover lift | **Alive** |
| Section label + hairline | On load: hairline draws after CTA settles (not before h1) | Polish |

**Do not:** typewriter effect, word stagger on h1, parallax background.

---

### `02 / TRUST`

| Element | Motion | Alive? |
|---|---|---|
| Logo row | Scroll reveal: logos fade in with `stagger: 0.08`, opacity 0→0.4 default | Entry |
| Individual logo hover | Opacity 0.4→0.75, `y: -2px` | **Alive** — invites exploration |
| Hairline above/below strip | `scaleX` draw on section enter | Structure |

**Do not:** infinite marquee, grayscale→color flip (reads template-y).

---

### `03 / SELECTED WORK`

| Element | Motion | Alive? |
|---|---|---|
| Section block | Heading + rows batch reveal on scroll (once) | Entry |
| Project row hover | `y: -4px`; hairline under row draws L→R; mono metadata (year, role) slides in from `x: -8`; arrow `x: +4` | **Alive** — hover reveals information |
| Project row focus (keyboard) | Same as hover — parity required | A11y |
| Tech tags | On row hover: tags shift opacity 0.7→1 sequentially (40ms stagger) | Subtle |
| Row tap (mobile) | `whileTap: scale 0.995` | Feedback |

**Case study page transition:** Route change — outgoing page fades out 160ms, incoming fades up 14px over 280ms (`AnimatePresence mode="wait"`). No full-screen loader.

---

### `04 / PROCESS`

| Element | Motion | Alive? |
|---|---|---|
| Phase blocks | Stagger reveal on scroll: each phase fades up with mono index `01` `02` etc. | Entry |
| Phase connector (desktop) | Vertical hairline between phases draws top→bottom as each phase enters | **Alive** — timeline feel |
| Phase hover | Mono index color → `--t-accent`; title `x: +4px` | Subtle |

**Do not:** animated progress bar, spinning icons.

---

### `05 / SERVICES`

| Element | Motion | Alive? |
|---|---|---|
| Service list items | Stagger fade-up on scroll (4 items, 70ms stagger) | Entry |
| Service row hover | Left accent bar (2px copper) `scaleY` 0→1 on row | **Alive** |
| Disqualifier block | Enters with slightly slower fade (380ms) + Newsreader italic — no bounce | Emphasis through timing, not flash |

---

### `06 / STACK`

| Element | Motion | Alive? |
|---|---|---|
| Stack rows | Stagger from left: `x: -12px → 0`, opacity 0→1, 50ms stagger | Entry |
| Row hover | Background `--t-bg-hover` wash fades in 140ms; mono years brighten | **Alive** |
| Years column | Optional: count-up once when row enters view (900ms, ease-out) — numbers only, max 2 rows | Delight (optional) |

**Do not:** skill bars, percentage fills, radar charts.

---

### `07 / FAQ`

| Element | Motion | Alive? |
|---|---|---|
| Accordion item | Chevron rotates 0→180° (springSnappy); panel height animates with `animate={{ height: "auto" }}` | **Alive** |
| Only one open | `layout` shift on siblings when one expands | Layout animation |
| Question hover | Text → `--t-text-primary` from secondary | Feedback |
| Reduced motion | Instant expand/collapse, no height animation |

Alternative (simpler): plain Q&A rows with no accordion — hover underline on question only.

---

### `08 / CONTACT`

| Element | Motion | Alive? |
|---|---|---|
| Close block | Scroll reveal with slightly larger `--t-reveal-y` (20px) — rewards scroll depth | Entry |
| Headline | No split text — fade only | Restraint |
| Email link | Hover: underline + envelope icon `rotate: -8deg` (if icon present) | **Alive** |
| CTA repeat | Same as hero CTA behaviour | Consistency |
| "24 hours" promise | Subtle `--t-positive` dot pulse (same as availability) | Trust signal |

---

## Case study template (`/work/[slug]`)

| Element | Motion |
|---|---|
| Page enter | Fade + 14px up, 280ms |
| Metadata sidebar (mono) | Stagger fade on load: role, stack, duration, outcome |
| Body headings | Hairline above h2 draws on scroll into view |
| Code blocks (if any) | No typewriter; optional fade-in only |
| "Back to work" link | Arrow slides left on hover |

---

## 404 page

| Element | Motion |
|---|---|
| "404" mono label | Hairline draw + fade |
| Message | Fade up |
| Home link | Standard link hover |

Keep under 2 animated elements total.

---

## Motion budget (hard limits)

| Constraint | Limit |
|---|---|
| Looping animations | **2 max** (availability dot + optional contact promise dot) |
| Simultaneous springs | 6 |
| Scroll-triggered reveals per page | 8 sections max |
| `AnimatePresence` regions | 2 (nav mobile + route transition) |
| Max displacement | 20px entrance, 4px hover |
| Loop duration | ≥ 2s (slow pulse — never frantic) |

---

## Reduced motion contract

When `prefers-reduced-motion: reduce`:

- All scroll reveals → instant visible
- Pulses → static filled dot
- Accordion → instant open/close
- Hover lifts → color/border change only
- Route transitions → instant swap or 80ms opacity only
- Hairline draws → appear at full width instantly

Design mockups must include a **reduced-motion frame** for: hero, project row hover, FAQ open.

---

## Deliverables for design executor

Add to your design output:

1. **Motion storyboard** — one row per section (trigger → animation → duration → spring/ease)
2. **Interactive states sheet** — hover/focus/active for: nav link, project row, CTA, FAQ item, stack row, logo
3. **Loop spec** — availability dot keyframes (only looping element besides optional contact dot)
4. **Reduced-motion variants** — 3 frames minimum
5. **Motion rationale paragraph** — how liveness supports hireability without hurting credibility

---

## Anti-patterns (motion-specific)

- GSAP, Lenis, Three.js, custom cursor
- Scroll-jacking or smooth-scroll libraries
- Parallax backgrounds, floating blobs, particle fields
- Typewriter / SplitText on hero headline
- Magnetic buttons that follow cursor
- Animating every paragraph on scroll
- Bounce/elastic on large elements
- Sound effects
- Page preloaders

---

## Reference

- [motion.dev](https://motion.dev) — API, springs, `useInView`, `layoutId`
- `ledger-spec.md` Section 6 — duration/easing tokens
- `02-portfolio-moodboard-report.md` — brittanychiang spotlight (CSS-only), nkuek row hover informational reveal
- `content-inventory.md` — real copy (do not animate placeholder text differently from final)
