# GSAP Animation Guide — Senior Engineer Portfolio

Subtle, purposeful motion for a client-facing portfolio. Motion clarifies hierarchy and state — it does not demonstrate animation skill.

**Core rules:** Reuse a small vocabulary (`power2.out`, 180–500 ms, 8–20 px displacement). Animate `transform` and `opacity` only. Content must be visible without JavaScript. One-time reveals over scrubbed/pinned sequences.

## Recommended Stack (Next.js App Router)

```json
{
  "dependencies": {
    "gsap": "^3.15.0",
    "@gsap/react": "^2.1.2"
  }
}
```
Use GSAP only — no second animation library.

- `ScrollTrigger`, `SplitText`, and `Flip` ship with `gsap` — free since GSAP 3.13
- Use `@gsap/react` (`useGSAP`) for React scoping, Strict Mode safety, and cleanup
- Use direct GSAP in utility modules only when lifecycle is explicitly controlled
- **No Lenis** — keep scroll native for performance (aligns with Claude Design prompt)

### App Router Integration

```tsx
"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function AnimatedSection() {
  const root = useRef(null)

  useGSAP(() => {
    // Scoped animation setup
  }, { scope: root })

  return <section ref={root}>...</section>
}
```

**SSR constraints:**
- Keep portfolio content server-rendered; only animation wrappers are `"use client"`
- Perform DOM splitting and measurements inside `useGSAP()`, never during render
- Scope selectors to a component ref; use `contextSafe()` for event-handler tweens
- Avoid server markup that starts hidden — apply hidden states only after confirming motion is enabled
- For SplitText, use `autoSplit: true` with `onSplit()`, or wait for `document.fonts.ready`
- Call `ScrollTrigger.refresh()` only after real layout changes (images, accordions)


## Approved Motion Moments (design contract)

Only these three ship in v1:

1. Hero secondary elements (eyebrow, meta, CTA) — **never the h1** (LCP)
2. Scroll batch reveal (sections, once)
3. Project row hover/focus lift

Patterns 4–8 below are reference-only. Do not implement without explicit approval.

### LCP / SSR Rule

The hero `h1` must be visible in server-rendered HTML at full opacity. Gate animation with:

```html
<script>document.documentElement.classList.add('js')</script>
```

```css
.js [data-hero-animate] { opacity: 0; transform: translateY(16px); }
@media (prefers-reduced-motion: reduce) {
  [data-hero-animate] { opacity: 1 !important; transform: none !important; }
}
```

Only apply hidden states when `.js` is present. Animate `[data-hero-eyebrow]`, `[data-hero-meta]`, CTA — not `[data-hero-title]`.

## Animation Budget

| Constraint | Limit |
|---|---|
| Animated targets visible per viewport | 8–12 (20 max for opacity-only stagger) |
| Simultaneous active tweens | 6 preferred, 10 max |
| ScrollTrigger instances per page | 8 max |
| Scrubbed timelines | 1 active per viewport |
| Pinned sections | 0 ideal, 1 max on desktop |
| Reveal stagger group | 3–6 items |
| SplitText instances | 1 heading at a time; lines/words only |
| Continuous pointer followers | 1 (generally avoid) |
| Looping decorative animations | 0 |
| Entrance duration | 180–500 ms |
| Page transition duration | 200–350 ms total |
| Displacement | 8–20 px entrances; 2–6 px hover |
| Custom cursor | **No** |

## Pattern Catalog

### 1. Hero Entrance (approved moment 1)

**Use:** Eyebrow, meta lines, and CTA on initial load only.
**Skip:** The h1 headline (LCP element), every client navigation, character splitting.

```tsx
useGSAP(() => {
  const mm = gsap.matchMedia()

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.timeline({ defaults: { ease: "power2.out" } })
      .from("[data-hero-eyebrow]", { autoAlpha: 0, y: 8, duration: 0.3 })
      .from("[data-hero-meta]", { autoAlpha: 0, y: 10, duration: 0.35, stagger: 0.06 }, "-=0.1")
      .from("[data-hero-cta]", { autoAlpha: 0, y: 8, duration: 0.3 }, "-=0.2")
  })

  return () => mm.revert()
}, { scope: heroRef })
```

**Reduced motion:** Render final state immediately; h1 always visible in SSR.

### 2. Batched Section Reveals (approved moment 2)

**Use:** Projects, experience entries, article cards entering viewport.
**Skip:** Every paragraph/icon/tag; content re-disappearing on scroll up.

```tsx
gsap.set(items, { autoAlpha: 0, y: 16 })

ScrollTrigger.batch(items, {
  start: "top 88%",
  once: true,
  batchMax: 4,
  interval: 0.08,
  onEnter: batch => gsap.to(batch, {
    autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.06,
    ease: "power2.out", overwrite: "auto"
  })
})
```

**Reduced motion:** Skip hidden state and ScrollTriggers entirely.

### 3. Project Card Hover / Focus (approved moment 3)

**Use:** Reinforcing interactivity; revealing mono metadata (year, stack) on hover.
**Skip:** 3D tilt, pointer-follow, large displacement.

```tsx
const activate = contextSafe(() => {
  gsap.timeline()
    .to(hairline, { scaleX: 1, duration: 0.4, ease: "power2.out", transformOrigin: "left" }, 0)
    .to(card, { y: -2, duration: 0.2, ease: "power2.out", overwrite: "auto" }, 0)
    .fromTo(metadata, { x: -8, autoAlpha: 0 }, { x: 0, autoAlpha: 1, stagger: 0.04, duration: 0.25 }, 0.1)
})
// Bind pointerenter/leave AND focus/blur for keyboard parity
```

Hover should reveal information, not decorate.
**Reduced motion:** Border/color changes only; no lift or arrow translation.

### 4. Direction-Aware Sticky Nav (reference only)

**Use:** Compact nav hides on scroll down, returns on scroll up.
**Skip:** When nav contains essential controls or hides unpredictably.

```tsx
const hideNav = gsap.to(nav, { yPercent: -110, duration: 0.25, paused: true, ease: "power2.inOut" })

ScrollTrigger.create({
  start: 80,
  end: "max",
  onUpdate(self) {
    self.direction === 1 ? hideNav.play() : hideNav.reverse()
  }
})
```

For active-section state, update underline or text color — do not animate entire labels.

**Reduced motion:** Keep nav fixed and visible; change active state without spatial movement.

### 5. Page / Section Transition (reference only)

**Use:** Project index ↔ detail, substantial case-study panel swaps.
**Skip:** Blocks navigation, lasts >400 ms, depends on unmounted DOM.

```tsx
const tl = gsap.timeline()
tl.to(currentPanel, { autoAlpha: 0, y: -6, duration: 0.16, ease: "power1.in" })
  .add(swapContent)
  .fromTo(nextPanel,
    { autoAlpha: 0, y: 8 },
    { autoAlpha: 1, y: 0, duration: 0.24, ease: "power2.out" }
  )
```

Use `Flip` for at most one shared project thumbnail (reference only — not in the 3-moment budget).

**Reduced motion:** Swap immediately or short opacity crossfade only.

### 6. Restrained SplitText (reference only — not in v1)

**Use:** One hero heading or selected project titles.
**Skip:** Body copy, nav, every heading, text with links, >40–60 characters.

```tsx
SplitText.create(title, {
  type: "lines",
  mask: "lines",
  autoSplit: true,
  onSplit(self) {
    return gsap.from(self.lines, {
      yPercent: 35, autoAlpha: 0, duration: 0.45, stagger: 0.07, ease: "power2.out"
    })
  }
})
```

SplitText default `aria: "auto"` preserves screen reader text. Revert splits after animation when responsive re-splitting is no longer needed.

**Reduced motion:** Do not split; display original text unchanged.

### 7. Custom Cursor — No (banned)

Do not replace the system cursor. Hurts familiarity, obscures links, adds permanent pointer work without improving hireability.

Restrained exception: project-image preview following pointer while system cursor stays visible — gate to `(hover: hover) and (pointer: fine)`.

### 8. Loading / Skeleton (reference only)

**Use:** Real async feeds, CMS requests, large media only.
**Skip:** Fake portfolio preloaders for spectacle.

Use Next.js `loading.tsx` and CSS. GSAP only when coordinating skeleton exit with loaded content:

```tsx
gsap.timeline()
  .to(skeleton, { autoAlpha: 0, duration: 0.12 })
  .fromTo(content, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.18 })
```

**Reduced motion:** Static neutral skeleton; no shimmer or pulse.

## Reduced Motion Fallback

```tsx
const mm = gsap.matchMedia()
mm.add("(prefers-reduced-motion: reduce)", () => {
  gsap.set(".reveal, [data-hero-title]", { autoAlpha: 1, y: 0, clearProps: "all" })
  ScrollTrigger.getAll().forEach(st => st.kill())
})
```

## Performance Notes

- Animate ONLY `transform`, `opacity`, `clip-path`
- Avoid animated `box-shadow` (causes repaints)
- `will-change: transform` on hover targets only during interaction
- Kill ScrollTriggers on component unmount via `useGSAP` revert
- Test on throttled mid-range mobile; scrolling should show minimal Layout/Paint work

## Sources

- [GSAP React integration](https://gsap.com/resources/React/)
- [ScrollTrigger docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [ScrollTrigger batching](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.batch()/)
- [SplitText accessibility](https://gsap.com/docs/v3/Plugins/SplitText/)
- [GSAP 3.13 free plugins](https://gsap.com/blog/3-13/)
