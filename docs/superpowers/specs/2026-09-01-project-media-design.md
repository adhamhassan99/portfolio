# Architecture: Flexible Project Media & App Store-Style Mobile Galleries

**Date:** 2026-09-01
**Status:** Architecture spec — describes target state and the delta from what is currently on disk
**Scope:** `lib/content/projects.ts`, `components/case-study/`, `app/globals.css`, `public/work/`

---

## 1. Context

A first pass of this feature has already landed on disk (`projectType`, `ProjectMedia`,
`MobileAppGallery`, `CaseStudyLinks`, `CaseStudyPreview`, and five WebP screenshots under
`public/work/saudi-real-estate/`). This document is not a greenfield blueprint — it is the
architecture the shipped code should converge on, plus a defect list for the gap between the two.

### Goals

1. Media is optional and typed. One screenshot, a live preview, a phone gallery, or nothing.
2. External links are optional and self-describing; absence is silent.
3. Mobile projects get an App Store-style horizontal shelf of iPhone-framed screenshots that
   actually snaps, is keyboard-operable, and respects the Ledger design system.
4. No invented content: no fabricated URLs, no synthesised marketing copy, no fake metrics.

### Non-goals (v1)

- Lightbox / fullscreen viewer.
- Video or animated screen recordings.
- Media on the homepage `WorkSection` rows — those stay text-only by design.
- A CMS. Content stays as typed literals in `lib/content/projects.ts`.

---

## 2. Current State (as of 2026-09-01 22:36)

### Shipped

| File | State |
| --- | --- |
| `lib/content/projects.ts` | `ProjectType`, `ProjectMedia`, `GallerySlide`, `GalleryCover`, `ProjectLinks`, `ProjectPreview`, `hasProjectLinks()`; all three projects populated |
| `components/case-study/CaseStudyMedia.tsx` | Switch: gallery → image → placeholder fallback |
| `components/case-study/MobileAppGallery.tsx` | Scroll rail, `IPhoneFrame`, `CoverCard`, `CaptionText`, active-index scroll handler |
| `components/case-study/CaseStudyLinks.tsx` | Chip row from `ProjectLinks`, returns `null` when empty |
| `components/case-study/CaseStudyPreview.tsx` | `embed: true` → iframe; otherwise a link-out `Button` |
| `components/case-study/CaseStudyPage.tsx` | Composes header → preview → links → media → body |
| `public/work/saudi-real-estate/` | `srem-1..5.webp` (14–34KB), `icon.svg`, `screen-01..04.svg` |

### Defects and gaps to close

Ordered by severity. Each maps to a section below.

| # | Issue | Evidence | Fix in |
| --- | --- | --- | --- |
| **D1** | **Snap never engages.** `scroll-snap-align-start` is not a Tailwind utility (the v4 class is `snap-start`), so it compiles to nothing. The rail sets `scroll-snap-type: x mandatory` but no child declares an alignment — the shelf free-scrolls. | `MobileAppGallery.tsx:86,148` | §8.1 |
| **D2** | **`bg-elevated` is not a generated utility.** `@theme inline` maps `--t-bg-elevated` to `--color-card`, so the class is `bg-card`. Slide and cover cards currently render with no background. | `MobileAppGallery.tsx:95,150`; `globals.css:171` | §8.2 |
| **D3** | **Active index is wrong when a cover exists.** `activeIndex` is computed over all rail children (cover included) but compared against the *slide* index: `isActive={i === activeIndex}`. With a cover, every card is off by one. | `MobileAppGallery.tsx:122,161` | §8.4 |
| **D4** | **Active index ignores rail padding.** `Math.round(scrollLeft / (cardWidth + gap))` assumes the first card starts at `scrollLeft: 0`, but `paddingLeft` is `max(gutter, (100vw - 72rem)/2 + gutter)` — up to ~360px on a wide screen. | `MobileAppGallery.tsx:117-123` | §8.4 |
| **D5** | **Unthrottled scroll → setState per frame.** `onScroll` calls `setState` on every event, re-rendering all cards during momentum scroll on iOS. | `MobileAppGallery.tsx:116-123` | §8.4 |
| **D6** | **`100vw` causes horizontal overflow** when a classic scrollbar is present (`100vw` includes it, `100%` does not). Also `scroll-padding-inline` is set to `var(--t-gutter)` while `padding-left` is the much larger centred value — once snap works, cards will land misaligned. | `MobileAppGallery.tsx:144-145` | §8.1 |
| **D7** | **Not keyboard operable, no position feedback.** The `<ul>` has no `tabIndex`, no `role`/`aria-label`, and there are no prev/next buttons or dot indicators. | `MobileAppGallery.tsx:141` | §8.5, §12 |
| **D8** | **Drop shadow on content cards** violates `docs/design-system/anti-patterns.md` ("Drop shadows on content cards (nav shadow only)"). | `MobileAppGallery.tsx:34,59` | §8.2 |
| **D9** | **Cover icon is a screenshot.** `cover.icon` points at `srem-1.webp`, a 9:19.5 phone shot, rendered into an 80×80 square with `object-cover` — it will show a cropped sliver. `icon.svg` exists and is unreferenced. | `projects.ts:158` | §11 |
| **D10** | **`CaptionText` drops text on repeated matches.** `caption.split(highlight)` returns N parts; only `[before, after]` are destructured, so a caption containing the highlight twice loses its tail. | `MobileAppGallery.tsx:21` | §9 |
| **D11** | **Gallery is gated on `projectType === "mobile"`.** Type and media are coupled, so `{ kind: "gallery" }` on a non-mobile project silently falls through to the placeholder. | `CaseStudyMedia.tsx:37-40` | §3 (A1) |
| **D12** | **Unnecessary client JS.** `CaseStudyMedia`, `CaseStudyLinks`, and `CaseStudyPreview` are all `"use client"` but hold no state — only their `Reveal` children need the boundary. | 3 files, line 1 | §5 |
| **D13** | **`sandbox="allow-scripts allow-same-origin"` on a third-party origin** lets the frame script its way out of the sandbox. Also the iframe auto-loads with no poster. | `CaseStudyPreview.tsx:25` | §10.2 |
| **D14** | **Unreferenced assets.** `screen-01..04.svg` are committed but unused; `icon.svg` is unused. | `public/work/saudi-real-estate/` | §11 |
| **D15** | **Nested competing opacity animations.** Each `<li>` animates `opacity: 0.82/1` while the `Reveal` inside it animates `opacity: 0 → 1`. Horizontally offscreen cards never satisfy `useInView`, so they stay invisible until scrolled to, then fade in late. | `MobileAppGallery.tsx:85-94` | §8.3 |
| **D16** | **Arbitrary radii, no tokens.** `rounded-[2rem]`, `rounded-[1.65rem]`, `aspect-[460/997]` are undocumented magic values that also breach the ≤8px radius rule without a written exception. | `MobileAppGallery.tsx:34,36,40` | §8.2, A5 |

---

## 3. Design Decisions

**A1 — `projectType` and `media` are decoupled.**
`projectType` describes *what the thing is*; `media` describes *what assets exist right now*. An
internal project may still get a cleared screenshot; a mobile app may have zero shots until they
are exported. Rendering branches on `media.kind` **only**. `projectType` drives the access note and
future filtering. This removes D11 and makes "mobile project with no gallery yet" a legal state.

**A2 — `media` stays a discriminated union.**
Already correct on disk. Keeps illegal states unrepresentable and makes `CaseStudyMedia` a single
exhaustive `switch` with a `never` guard. Retain `{ kind: "none" }` — it is shipped and it lets an
author state "deliberately no media" distinctly from "not filled in yet" (`media` omitted).

**A3 — Native CSS scroll-snap is the engine; Motion is a layer on top.**
The rail must work with JS disabled and inherit free iOS momentum, trackpad horizontal scroll, and
arrow-key scrolling on a focusable container. No carousel dependency (`embla`, `keen-slider`,
`swiper`): 15–40KB to do worse what the platform does, and `claude-design-motion-spec.md` bans a
second animation library.

**A4 — Active index comes from `IntersectionObserver`, not scroll arithmetic.**
Fixes D3, D4, and D5 in one change. Observing rail children with `root: railRef` is immune to
padding, gap, and `clamp()`-based card widths, fires only when the visible set changes, and needs
no throttling.

**A5 — Device frames are pure CSS with named tokens, and a documented radius exception.**
A PNG bezel is ~80KB per theme and cannot recolour for dark mode. The ≤8px radius rule in
`anti-patterns.md` targets *structural* elements; a phone frame is representational, and 8px
corners read as a broken tablet. Two tokens (`--t-radius-device`, `--t-radius-device-screen`)
confine the exception so it cannot leak into layout.

**A6 — No drop shadows.** Frames use `border + --t-shadow-highlight` (an inset hairline that is
already a token) over a sunken background. Fixes D8 and keeps frames legible in dark mode, where
drop shadows disappear anyway.

**A7 — No scroll-linked transforms.**
Active-card emphasis is discrete (driven by the observed index), not continuous
(`useScroll`/`useTransform`). Continuous transforms across six device frames are the classic source
of jank on low-end phones and would blow the motion budget's "quiet" register.

**A8 — Live previews are click-to-load, and mobile degrades to a link.**
An auto-loading third-party iframe costs megabytes, runs third-party script alongside the page, and
frequently renders blank behind `X-Frame-Options`. A poster plus an explicit button makes the cost
opt-in and gives a graceful terminal state. Below 768px the iframe never mounts — a desktop app in
a 360px frame is noise.

**A9 — Caption highlighting stays a `highlight` substring, not a markup dialect.**
The shipped `{ caption, highlight }` shape is fine and authoring-friendly; only the splitter is
buggy (D10). Rejected: MDX (build weight for five captions), `dangerouslySetInnerHTML` (XSS surface
for zero gain), inline `*asterisk*` markers (a parser to maintain for the same result).

**A10 — Server components by default.**
Only `MobileAppGallery` (scroll state) and `CaseStudyPreview` (load state) need `"use client"`.
`CaseStudyMedia`, `CaseStudyLinks`, and the image/placeholder paths ship zero client JS once the
`Reveal` boundary is the only client leaf. Fixes D12 and matches `IMPLEMENTATION.md`'s stated
architecture ("Server Components by default").

---

## 4. Type Schema

Deltas from what is on disk are marked **NEW** or **CHANGED**. Everything else is already correct
and should not be churned.

```ts
// lib/content/projects.ts

/** What the project is. Metadata only — never gates media rendering (A1). */
export type ProjectType = "web" | "mobile" | "internal";

/** NEW: intrinsic dimensions so next/image can reserve space without a round-trip. */
export type MediaImage = {
  src: string;
  /** Describes what the screen shows. Never "screenshot" or "image of". */
  alt: string;
  width: number;
  height: number;
  /** CHANGED (NEW field): dark-theme variant. Omit unless the light asset is unreadable on dark. */
  srcDark?: string;
};

export type GallerySlide = {
  src: string;
  alt: string;
  caption?: string;
  /** Exact substring of `caption` rendered in accent copper. Matched once, first occurrence. */
  highlight?: string;
};

/** Optional first card of a gallery — app icon and name, App Store style. */
export type GalleryCover = {
  /** CHANGED: must be a square icon asset (>=512px or SVG), never a phone screenshot (D9). */
  icon?: string;
  title?: string;
  subtitle?: string;
};

export type ProjectMedia =
  | { kind: "none" }
  | {
      kind: "image";
      src: string;
      alt: string;
      /** NEW: dark variant, CSS-swapped. */
      srcDark?: string;
      /** NEW: caption below the frame. */
      caption?: string;
      /** NEW: substring of `caption` in accent. */
      highlight?: string;
    }
  | {
      kind: "gallery";
      platform: "iphone" | "android";
      cover?: GalleryCover;
      slides: GallerySlide[];
      /** NEW: rail-level caption above the shelf. */
      caption?: string;
    };

export type ProjectLinks = {
  live?: string;
  github?: string;
  appStore?: string;
  playStore?: string;
  /** NEW: docs / write-up / release notes. */
  docs?: string;
};

export type ProjectPreview = {
  url: string;
  label?: string;
  /** Render an inline embed instead of a link-out button. */
  embed?: boolean;
  /** NEW: shown before load and on <768px viewports. Required when `embed` is true (A8). */
  poster?: MediaImage;
};

export type Project = {
  // ...existing fields unchanged...
  projectType: ProjectType;
  mediaPlaceholder: string;
  media?: ProjectMedia;
  links?: ProjectLinks;
  preview?: ProjectPreview;

  /**
   * NEW. One mono line explaining why there are no links, e.g.
   * "Internal platform — not publicly accessible."
   * Rendered only when `links` is empty. Never auto-generated.
   */
  accessNote?: string;
};

/** NEW. Standard iPhone 15/16 Pro export dimensions. */
export const IPHONE_SHOT = { width: 1290, height: 2796 } as const;

/** NEW. Screen aspect used by the device frame. Replaces the magic `aspect-[460/997]` (D16). */
export const IPHONE_ASPECT = "1290 / 2796";

export function hasProjectLinks(links?: ProjectLinks): boolean; // shipped, unchanged
```

Note: `1290 / 2796` and `460 / 997` are the same ratio (0.4614) — the change is naming, not layout.

---

## 5. Component Tree

```
CaseStudyPage (server)
├── CaseStudyHeader (client — mount stagger)
├── CaseStudyMedia (server, exhaustive switch on media.kind)     ← drop "use client" (D12)
│   ├── MediaPlaceholder (server)          media undefined | kind: "none"
│   ├── MediaImage (server)                kind: "image"
│   └── MobileAppGallery (client)          kind: "gallery"
│       ├── GalleryCoverCard (server child)
│       ├── GallerySlideCard (client child) × N
│       │   └── DeviceFrame (server child)
│       └── GalleryControls (client child)  ← NEW: prev/next + dots
├── CaseStudyPreview (client — load state)
├── CaseStudyLinks (server)                                       ← drop "use client" (D12)
├── CaseStudyBody (client)
├── CaseStudyNext (client)
└── Footer
```

### Files to Create

| File | Purpose | Client | Priority |
| --- | --- | --- | --- |
| `lib/hooks/useSnapCarousel.ts` | Active index via `IntersectionObserver`, `scrollToIndex`, edge state (A4) | yes | P0 |
| `lib/motion/gallery.ts` | Gallery-only composition over the existing spring tokens | — | P1 |
| `components/case-study/gallery/DeviceFrame.tsx` | CSS iPhone/Android bezel, extracted from `IPhoneFrame` | — | P1 |
| `components/case-study/gallery/GalleryControls.tsx` | Prev/next buttons + dot indicators (D7) | yes | P0 |
| `components/case-study/media/MediaPlaceholder.tsx` | Stripe block, extracted from `CaseStudyMedia` | — | P2 |
| `components/case-study/media/MediaImage.tsx` | `next/image` with light/dark swap and caption | — | P2 |
| `components/case-study/media/MediaCaption.tsx` | Shared caption renderer with accent highlighting | — | P2 |

### Files to Modify

| File | Changes | Priority |
| --- | --- | --- |
| `components/case-study/MobileAppGallery.tsx` | Fix D1, D2, D3, D4, D5, D6, D8, D15, D16; add controls, a11y attributes, `SectionLabel` | P0 |
| `components/case-study/CaseStudyMedia.tsx` | Decouple from `projectType` (D11); exhaustive switch with `never` guard; drop `"use client"` (D12) | P0 |
| `app/globals.css` | Add `--t-radius-device`, `--t-radius-device-screen`, `--t-device-chrome`; `.media-rail`, `.device*` blocks; reduced-motion additions | P0 |
| `components/case-study/CaseStudyPreview.tsx` | Click-to-load, poster, `<768px` degrade, tighten `sandbox` (D13, A8) | P1 |
| `components/case-study/CaseStudyLinks.tsx` | Drop `"use client"` (D12); add `docs` kind; add `accessNote` fallback | P1 |
| `lib/content/projects.ts` | Schema deltas from §4; fix cover icon (D9); add `accessNote` to `ai-studio` | P0 |
| `public/work/saudi-real-estate/` | Delete unreferenced `screen-01..04.svg`; wire `icon.svg` (D9, D14) | P1 |
| `tests/e2e/smoke.spec.ts` | Gallery, placeholder, links, reduced-motion assertions | P3 |
| `IMPLEMENTATION.md` | Replace note 8 ("Stripe placeholder blocks retained") with the media system summary | P3 |
| `docs/README.md` | Add this spec to the Document Map table | P3 |

---

## 6. Conditional Rendering Matrix

### Media block — branch on `media.kind` only (A1)

| `media` | Condition | Renders |
| --- | --- | --- |
| `undefined` | — | `MediaPlaceholder` with `project.mediaPlaceholder` |
| `{ kind: "none" }` | — | `MediaPlaceholder` (author asserted "no media") |
| `{ kind: "image" }` | — | Bordered 16/9 frame + `next/image` (+ caption if present) |
| `{ kind: "image" }` | `srcDark` set | Both sources, CSS `dark:` swap — no JS, no theme flash |
| `{ kind: "gallery" }` | `slides.length > 0` | `MobileAppGallery` — **regardless of `projectType`** |
| `{ kind: "gallery" }` | `slides.length === 0` | `MediaPlaceholder` (defensive; also an authoring error) |

### Gallery internals

| Condition | Renders |
| --- | --- |
| `cover` present | Cover card as the first snap item |
| `cover.icon` absent | Title/subtitle only, no reserved icon slot |
| `platform: "android"` | Same frame geometry, no dynamic island, squarer corners |
| `slides.length <= 1` | Rail renders; `GalleryControls` is not rendered at all |
| `slide.caption` absent | No caption element; cards stay equal height via flex stretch |
| Rail has no overflow | Prev/next `disabled` via edge state; dots still shown |
| Coarse pointer (touch) | No hover lift — native momentum scroll only |

### Preview and links

| Condition | Renders |
| --- | --- |
| `preview.embed !== true` | Secondary `Button` linking out, with `↗` |
| `preview.embed === true`, ≥768px, not loaded | Poster + "Load live preview" button |
| `preview.embed === true`, loaded | 16/9 iframe |
| `preview.embed === true`, <768px | Poster + "Open live site ↗" — iframe never mounts |
| `links` non-empty | Chip row (`hasProjectLinks` guard, already shipped) |
| `links` empty **and** `accessNote` set | Single mono line with the note |
| `links` empty **and** no `accessNote` | Nothing. No container, no heading, no reserved space |

---

## 7. Data Flow

```
lib/content/projects.ts               typed literals, single source of truth
        │ (server, build time)
        ▼
app/work/{slug}/page.tsx              getProjectBySlug(slug)
        ▼
CaseStudyPage (server)                passes `project` down
        ├─► CaseStudyHeader
        ├─► CaseStudyMedia(project)
        │       switch (media?.kind)
        │       ├─ undefined | "none" → MediaPlaceholder     [zero client JS]
        │       ├─ "image"            → MediaImage           [zero client JS]
        │       └─ "gallery"          → MobileAppGallery     [client: scroll state]
        │                                    │
        │                                    ├─ useSnapCarousel()
        │                                    │     IntersectionObserver(root: rail)
        │                                    │        └─► activeIndex ─► GalleryControls (dots, aria-current)
        │                                    │                        └─► GallerySlideCard (active emphasis)
        │                                    └─ GallerySlideCard ▸ DeviceFrame ▸ next/image
        │                                                        ▸ MediaCaption
        ├─► CaseStudyPreview                                  [client: load state]
        └─► CaseStudyLinks                                    [zero client JS]
```

Everything crossing the server/client boundary is plain serializable data — no functions, no
`StaticImageData` bundler artifacts. Total client state in the feature: one integer (active index)
and one boolean (embed loaded).

---

## 8. Mobile Gallery Interaction Spec

### 8.1 Layout and snap

The rail breaks out of `Container` so cards bleed past the right viewport edge, App Store style.
The section label and rail caption stay inside `Container`.

```
<section>                                       full width
  <Container>  SectionLabel + caption  </Container>
  <ul class="media-rail">                       full width, overflow-x: auto
    <li>cover</li><li>slide 1</li>…<li>slide N</li>
  </ul>
  <Container>  GalleryControls  </Container>
</section>
```

Move the rail geometry out of arbitrary Tailwind values into `app/globals.css`, alongside the
existing `.prow` / `.srow` bespoke blocks:

```css
.media-rail {
  display: flex;
  gap: var(--t-space-4);
  overflow-x: auto;
  overscroll-behavior-x: contain;        /* don't trigger browser back-swipe */
  scroll-snap-type: x mandatory;
  /* 100% not 100vw — 100vw includes the scrollbar and overflows (D6). */
  padding-inline: max(
    var(--t-gutter),
    calc((100% - var(--t-container-max)) / 2 + var(--t-gutter))
  );
  /* MUST equal padding-inline-start or snapped cards land misaligned (D6). */
  scroll-padding-inline-start: max(
    var(--t-gutter),
    calc((100% - var(--t-container-max)) / 2 + var(--t-gutter))
  );
  padding-block: var(--t-space-2);       /* room for the hover lift + focus ring */
  margin: 0;
  list-style: none;
  scrollbar-width: none;
}
.media-rail::-webkit-scrollbar { display: none; }

.media-rail > li {
  flex: 0 0 auto;
  scroll-snap-align: start;              /* the actual fix for D1 */
  scroll-snap-stop: normal;              /* fast flicks may pass several cards */
  width: min(280px, 78vw);
}
@media (min-width: 40rem) {
  .media-rail { gap: var(--t-space-6); }
}
```

`scroll-snap-align: start` plus the matching `scroll-padding-inline-start` is what produces the
shelf feel: the leftmost card always lands exactly on the page's text grid. If the Tailwind class
is preferred over raw CSS, it is `snap-start` — **not** `scroll-snap-align-start`, which generates
nothing (D1).

### 8.2 Device frame

```css
:root {
  --t-radius-device: 2rem;
  --t-radius-device-screen: 1.65rem;
  --t-device-chrome: oklch(0.16 0.012 250);   /* same in both themes — islands are black */
}

.device {
  position: relative;
  padding: 3px;                               /* the bezel */
  border: 1px solid var(--t-line-strong);
  border-radius: var(--t-radius-device);
  background: var(--t-solid);
  box-shadow: var(--t-shadow-highlight);      /* inset hairline, NOT a drop shadow (D8) */
}
.device-screen {
  position: relative;
  overflow: hidden;
  border-radius: var(--t-radius-device-screen);
  background: var(--t-bg-secondary);
  aspect-ratio: 1290 / 2796;                  /* IPHONE_ASPECT — zero CLS before decode */
}
.device-island {
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 72px;
  height: 18px;
  border-radius: var(--t-radius-full);
  background: var(--t-device-chrome);
  z-index: 1;
}
```

Cards use `bg-card`, not `bg-elevated` (D2). Android frames reuse `.device` with
`--t-radius-device: 1.5rem` and no `.device-island`.

### 8.3 Motion

Everything composes the existing tokens in `lib/motion/variants.ts`. `lib/motion/gallery.ts` holds
only the composition.

| Moment | Animation | Transition | Notes |
| --- | --- | --- | --- |
| Rail enters viewport | Cards fade + rise `y: 14 → 0` | `revealTransition`, `staggerChildren: 0.06` | **One** `whileInView` on the rail with `staggerChildren`, replacing the per-card `Reveal` (D15). Per-card `useInView` never fires for horizontally offscreen cards. |
| Card hover (fine pointer) | `y: -4` (`--t-lift-md`) | `springGentle` | Same value as the `.prow` row hover |
| Card tap | `scale: 0.985` (`--t-press`) | `springSnappy` | Same as `Button` |
| Snap settles | Active `scale: 1` / inactive `0.96` | `springGentle` | Discrete, from `activeIndex` (A7). **Drop the `opacity: 0.82`** — it collides with the entrance fade (D15) and dims legitimate content. |
| Dot change | Active dot `width: 6px → 16px`, colour → accent | 220ms `--t-ease-out` | CSS transition, not Motion — two-property state change |
| Controls | Opacity `0.55 → 1` on rail hover/focus-within | 140ms | CSS only. Deliberately **not** `AnimatePresence`: the motion budget allows 2 regions and both are taken (mobile nav, route transition) |

Budget check against `claude-design-motion-spec.md`: the gallery adds 1 scroll-reveal (the rail is
one section, not N), 0 loops, and pointer-bounded hover springs. Displacement stays at 14px
entrance / 4px hover. Within budget.

### 8.4 Active index

Replace the scroll-arithmetic handler with `lib/hooks/useSnapCarousel.ts`:

```ts
export type SnapCarousel = {
  railRef: React.RefObject<HTMLUListElement | null>;
  /** Index into the rail's children, cover included. */
  activeIndex: number;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollToIndex: (index: number) => void;
  scrollByCards: (delta: number) => void;
};

export function useSnapCarousel(): SnapCarousel;
```

- **Index:** `IntersectionObserver` with `root: railRef.current`, `threshold: [0.5, 0.75, 1]`. On
  each callback pick the child with the highest `intersectionRatio`. Immune to padding, gap, and
  `clamp()` widths (fixes D4), and fires only on visible-set change (fixes D5).
- **Cover offset:** `activeIndex` counts rail children. `GallerySlideCard` must compare against
  `slideIndex + (cover ? 1 : 0)` — or better, pass the already-offset `railIndex` as a single prop
  so the offset is computed once (fixes D3).
- **Edge state:** `scroll` listener (`{ passive: true }`) plus `ResizeObserver`, comparing
  `scrollLeft` against `scrollWidth - clientWidth` with a 2px epsilon.
- **`scrollByCards`:** measure `firstChild.offsetWidth` plus the computed `column-gap` at call time
  — card width is a `min()` expression and must not be hard-coded.
- **`scrollToIndex`:** `children[i].scrollIntoView({ inline: "start", block: "nearest", behavior })`.
- **`behavior`** is `"smooth"`, or `"auto"` when `useReducedMotion()` is true.

### 8.5 Keyboard and controls

- The rail is `tabIndex={0}`, so ←/→ and Home/End scroll it natively. No custom key handler — the
  browser's is better and matches platform expectations.
- Prev/next buttons call `scrollByCards(±1)`; real `disabled` at the edges, not just visual.
- Dots call `scrollToIndex(i)`; 24×24px minimum hit area around a 6px visual dot.
- Drag-to-scroll is deliberately omitted: it breaks text selection, fights the native trackpad
  scroller, and adds a pointer state machine for a gesture desktop users do not expect on a shelf.

---

## 9. Captions and Accent Highlighting

Fix `CaptionText` (D10) by splitting on the first occurrence only, rather than destructuring a
variable-length array:

```tsx
const at = highlight ? caption.indexOf(highlight) : -1;
if (at === -1) return <>{caption}</>;
return (
  <>
    {caption.slice(0, at)}
    <span className="text-accent">{highlight}</span>
    {caption.slice(at + highlight.length)}
  </>
);
```

`indexOf` + `slice` preserves the full string for any input, including repeated matches and
regex-special characters. Extract to `components/case-study/media/MediaCaption.tsx` so the image
path can reuse it.

**Authoring rules:** one sentence, ≤ 90 characters, at most one highlighted phrase. Captions
describe what the screen *does*, not what it *is* — "Identity verified against the national
registry", not "Verification screen". `highlight` must be an exact substring of `caption`; a
mismatch degrades silently to plain text.

---

## 10. Links and Preview

### 10.1 Links

`CaseStudyLinks` is close to final. Changes: drop `"use client"` (D12), add the `docs` kind to
`linkConfig`, and add the `accessNote` fallback so an internal project renders a reason instead of
blank space:

```
links empty + accessNote  →  <p class="font-mono text-2xs tracking-label uppercase text-ink-muted">
links empty + no note     →  null   (already correct)
```

Chip styling already matches the theme-toggle button language (`rounded-sm border border-line`,
mono `2xs`, `tracking-label uppercase`) — keep it. Add a visually hidden "(opens in a new tab)" to
each chip; the `↗` is `aria-hidden` and conveys nothing to a screen reader.

### 10.2 Preview

Current behaviour auto-mounts the iframe when `embed: true`. Target (A8):

1. Render `poster` (or the stripe) with a `Button variant="secondary"` reading "Load live preview".
2. On click, mount the iframe at 16/9 with `title`, `loading="lazy"`, and
   `referrerPolicy="strict-origin-when-cross-origin"`.
3. Below 768px, never mount — render the poster plus "Open live site ↗".

**Sandbox (D13):** `sandbox="allow-scripts allow-forms allow-popups"`. Add `allow-same-origin`
**only** for first-party origins; combined with `allow-scripts` on third-party content it lets the
frame remove its own sandbox. `magentic.ai` is third-party, so it must not have both.

Before enabling `embed` for any URL, verify framing is permitted:

```
curl -sI https://example.com/ | rg -i 'x-frame-options|content-security-policy'
```

A `frame-ancestors` directive or `X-Frame-Options` means the iframe renders blank — stay on
`embed: false`. Do not build a proxy.

---

## 11. Asset Organization

```
public/
└── work/
    ├── ai-studio/                    (empty until PwC clearance)
    ├── saudi-real-estate/
    │   ├── icon.svg                  square app icon — cover card
    │   └── srem-1..5.webp            phone screenshots, 14–34KB
    └── flowlens/
        ├── hero.webp                 desktop dashboard
        └── hero-dark.webp            optional dark variant
```

| Rule | Value |
| --- | --- |
| Root | `public/work/{slug}/` — mirrors the `/work/{slug}` route |
| Phone shots | `{NN}-{kebab-screen-name}.webp`, numeric prefix matches gallery order |
| Single hero | `hero.webp`; dark variant `hero-dark.webp` |
| Embed poster | `poster.webp` |
| App icon | Square SVG, or PNG ≥512×512. **Never a screenshot** (D9) |
| Format | WebP for screenshots (~4× smaller than PNG at equal quality) |
| Source size | Phone 1290×2796; desktop 2560×1440 |
| Per-file budget | ≤250KB; ≤400KB for a desktop hero |

Ordering comes from the `slides` array, not the filename — the numeric prefix exists so a directory
listing matches intent for whoever maintains the files. The current `srem-N` names are acceptable
but do not say what each screen is; renaming to `01-verification.webp` etc. is a cheap
maintainability win to do alongside the D9 fix.

**Cleanup (D14):** delete `screen-01..04.svg` — committed but referenced nowhere.

**Redaction gate — blocking for `saudi-real-estate`.** Screenshots of a government-integrated
property app must contain no real national IDs, names, phone numbers, addresses, deed numbers, or
transaction amounts. Every shot needs synthetic data or flat redaction blocks before it stays in
the repo. Blurring is not acceptable: it is reversible in principle and looks unfinished. This
applies to the five WebP files already committed — they need an explicit review pass.

---

## 12. Accessibility

**Gallery**

- Rail: `<ul role="region" aria-label="Saudi Real Estate app screens" tabIndex={0}>`. `role="region"`
  with a label puts it in the landmark list; `tabIndex` makes it keyboard-scrollable (D7).
- Do **not** use `aria-roledescription="carousel"`. This is a scrollable shelf with no autoplay and
  no hidden slides; the carousel role promises play/pause and slide announcements the component
  does not provide.
- Each `<li>` stays a plain list item. Screen readers announce "list, 6 items" and read every
  caption and alt text in order — nothing is hidden at any scroll position.
- Prev/next: `<button type="button" aria-label="Previous screen" disabled={!canScrollPrev}>`.
- Dots: `<button aria-label="Go to screen 3" aria-current={isActive ? "true" : undefined}>`.
- Frame chrome (island, side buttons) is `aria-hidden="true"`.
- `padding-block: var(--t-space-2)` on the rail exists partly so the global `:focus-visible`
  box-shadow is not clipped by the overflow container.
- The section heading is currently a bare `<h2>` styled as mono micro-text. Use `SectionLabel`
  (`index="Preview"`) instead, so the case study's heading hierarchy and hairline treatment match
  every other section.

**Alt text contract**

Alt text describes content and purpose: "Unit allocation screen listing three available apartments
with price and floor". Never "Screenshot 1", never "App screen", never empty. The cover icon is
decorative when the title is adjacent → `alt=""` (already correct on disk).

**Images**

- `sizes` on every `next/image` so a phone never downloads a desktop-sized file.
- Dark variants swap with `dark:hidden` / `hidden dark:block` — class-based theming is already set
  up via `@custom-variant dark`, so there is no flash and no JS.

**Reduced motion (`prefers-reduced-motion: reduce`)**

| Element | Behaviour |
| --- | --- |
| Rail entrance stagger | Instant, fully visible (`useReducedMotion()` early return, same shape as `Reveal`) |
| Card hover lift | None — border colour change only |
| Card tap scale | None |
| Active-card emphasis | None — all cards at `scale: 1`, `opacity: 1` |
| Prev/next and dot navigation | `behavior: "auto"` (instant), still fully functional |
| Dot width transition | Suppressed by the existing global `transition-duration: 0.01ms` rule |
| Preview load | Never animated |

Add to the existing reduced-motion block in `globals.css`:

```css
.media-rail { scroll-behavior: auto; }
```

Note the current `animate={reducedMotion ? undefined : {...}}` in `GallerySlideCard` leaves the
element at whatever `initial` state applies rather than explicitly asserting the resting state.
Prefer an explicit `{ scale: 1, opacity: 1 }` so the reduced-motion path is a stated outcome, not
an absence.

---

## 13. Performance

- **LCP:** the media block sits directly under the header and is a strong LCP candidate.
  `kind: "image"` already sets `priority` — correct. For galleries, the first two slides should be
  eager and the rest `loading="lazy"` with `fetchPriority="low"`.
- **`sizes`:** hero `"(min-width: 896px) 896px, 100vw"` (shipped, correct); slides `"220px"`
  (shipped) is fine — `next/image` handles DPR — but should be derived from the frame width if the
  `min(220px, 72vw)` clamp changes.
- **Quality:** `quality={82}` for text-heavy UI shots; below ~78 the type shows artefacts.
- **CLS:** every path has a fixed `aspect-ratio` container. Already correct.
- **Budget:** ≤1.2MB transferred media per case study at 1× DPR, ≤6 slides per gallery. The current
  five shots total ~127KB — comfortably inside budget.
- **JS:** after D12, only the gallery and the preview ship client JS.

---

## 14. Migration Plan

### `ai-studio` — internal

Currently `projectType: "internal"`, `media: { kind: "none" }`. Correct. Remaining work:

- Add `accessNote: "Internal platform — not publicly accessible."` so the empty link area reads as
  a deliberate fact about a PwC internal platform rather than an oversight.
- Keep `mediaPlaceholder: "product UI — drop screenshot"`.
- If PwC ever clears a screenshot it becomes `{ kind: "image", src, alt }` — a three-line change,
  no component work.

### `saudi-real-estate` — mobile gallery

Currently `projectType: "mobile"` with a five-slide iPhone gallery and captions. Remaining work,
in order:

1. **PII redaction review** of `srem-1..5.webp` (§11). Blocking — nothing else matters if a real
   national ID is in a committed screenshot.
2. Fix `cover.icon` to `/work/saudi-real-estate/icon.svg` (D9).
3. Delete `screen-01..04.svg` (D14).
4. Optionally rename `srem-N.webp` to `{NN}-{screen-name}.webp`.
5. Confirm whether the app is publicly listed. If yes, populate `links.appStore` / `links.playStore`
   (the commented-out line at `projects.ts:153`). If it is distributed through a government
   channel, delete the comment and add an `accessNote` instead. **Do not guess a store URL.**
6. Re-verify each `alt` against the §12 contract once the redacted assets are final.

### `flowlens` — web

Currently `projectType: "web"`, `links: { live: "https://magentic.ai/" }`,
`preview: { url, label: "Magentic AI", embed: false }`, no `media`. Remaining work:

1. Confirm `magentic.ai` is the product surface and not just the company site. If Flowlens has its
   own URL, `preview.url` and `links.live` should point at it. Currently unverified.
2. Add `media: { kind: "image", src: "/work/flowlens/hero.webp", alt: "…" }` once a dashboard
   screenshot exists. Alt text must describe the actual view, e.g. "Flowlens dashboard showing a
   live stream of coding-agent events with a flagged regression".
3. A light-theme dashboard screenshot on the dark site reads as a glowing rectangle — decide on
   `srcDark` after seeing the asset.
4. Only consider `embed: true` after the `X-Frame-Options` check in §10.2 passes, and only with the
   tightened sandbox.

---

## 15. Build Sequence

Ordered so each step leaves the site working.

1. **Correctness fixes, no new surface.** D1 (`snap-start`), D2 (`bg-card`), D6 (`100%` +
   `scroll-padding` parity), D10 (caption splitter). Four small edits; the shelf starts snapping and
   the cards get a background.
2. **Tokens and CSS.** Add `--t-radius-device*`, `--t-device-chrome`; move rail and frame geometry
   from arbitrary Tailwind values into `.media-rail` / `.device*` blocks in `globals.css`; drop the
   drop shadow (D8, D16).
3. **`useSnapCarousel`.** Replace the scroll handler; fixes D3, D4, D5 together. Verify the active
   index is correct with and without a cover before touching anything visual.
4. **Controls and a11y.** `GalleryControls`, rail `role`/`aria-label`/`tabIndex`, `SectionLabel`
   heading (D7, §12).
5. **Motion consolidation.** Single rail-level `whileInView` with `staggerChildren`, remove
   per-card `Reveal` and the `opacity: 0.82` (D15); explicit reduced-motion resting state.
6. **Decouple type from media.** `CaseStudyMedia` switches on `media.kind` with a `never` guard;
   drop `"use client"` from the three stateless components (D11, D12).
7. **Assets and content.** PII review, `icon.svg` wiring, delete unused SVGs, `accessNote` for
   `ai-studio` (D9, D14, §14).
8. **Preview hardening.** Click-to-load, poster, mobile degrade, sandbox tightening (D13). Skippable
   until an embed is actually wanted.
9. **Schema extensions.** `MediaImage` dimensions, `srcDark`, image captions, `docs` link kind —
   only when a project needs them.
10. **Tests and docs.** §16, then `IMPLEMENTATION.md` note 8 and the `docs/README.md` map row.

Steps 1–3 are the highest value: they turn a free-scrolling row with invisible card backgrounds
into an actual App Store shelf.

---

## 16. Testing

The project has Playwright only (no unit runner), so verification is behavioural. Follow the
existing role/name selector convention in `tests/e2e/smoke.spec.ts`; avoid `data-testid` unless a
role query is genuinely impossible.

| Test | Assertion |
| --- | --- |
| Placeholder survives | `/work/ai-studio` still shows the `mediaPlaceholder` text |
| Access note | `/work/ai-studio` shows the internal note and no external link chips |
| Gallery present | `/work/saudi-real-estate`: `getByRole("region", { name: /app screens/i })` visible with 6 list items (cover + 5) |
| **Snap actually applies** | Computed `scroll-snap-align` on the first `li` is `start` — this is the regression guard for D1 |
| **Card background applies** | Computed `background-color` on a slide card is not `rgba(0, 0, 0, 0)` — regression guard for D2 |
| Next advances | Clicking "Next screen" increases the rail's `scrollLeft` |
| Edge state | "Previous screen" is `disabled` at `scrollLeft === 0` |
| Dot state | Clicking dot 3 sets `aria-current="true"` on it and moves `scrollLeft` |
| Active index with cover | After scrolling to slide 1, dot index 1 is current — regression guard for D3 |
| Keyboard | Focusing the rail and pressing `ArrowRight` scrolls it |
| Reduced motion | Under `emulateMedia({ reducedMotion: "reduce" })`, a next-button click lands at the target `scrollLeft` synchronously |
| Links | `/work/flowlens` chips have `target="_blank"` and `rel` containing `noopener` |
| No horizontal overflow | `document.documentElement.scrollWidth <= clientWidth` on every case study page — regression guard for D6 |

The caption splitter is covered indirectly by asserting an accent-classed `span` inside a caption.
If it ever grows past ~10 lines, add Vitest rather than expanding e2e coverage.

---

## 17. Open Questions

1. **Ejada clearance** — are public screenshots of the KSA property app permitted at all? Five are
   already committed. This needs an explicit yes.
2. **PII in committed shots** — has anyone reviewed `srem-1..5.webp` for real identifiers? Treated
   as blocking in §11 and §14.
3. **Store URLs** — is the Saudi app publicly listed, or distributed through a government channel?
   Determines whether the commented-out `links` line at `projects.ts:153` is ever filled in.
4. **Flowlens URL** — is `magentic.ai` the product surface or just the company site? Both
   `links.live` and `preview.url` currently point there, unverified.
5. **GitHub** — `IMPLEMENTATION.md` note 6 says GitHub/LinkedIn were omitted because URLs were not
   provided. If a public repo exists for any project, the `github` kind is already wired.
6. **Active-card emphasis (A7, §8.3)** — keep the `0.96` scale on inactive cards, or a flat shelf?
   Recommend keeping the scale, dropping the opacity dim, and deciding with real screenshots on
   screen.
7. **Slide count** — five is good. Six is the budget ceiling; beyond that a shelf stops being a
   highlight reel.
