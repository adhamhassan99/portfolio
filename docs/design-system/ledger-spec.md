# Design System: **Ledger**
### A technical-editorial design system for a senior software engineer's portfolio

**Direction chosen:** *Technical editorial* — the visual language of a well-set engineering specification document. Ink on warm paper in light mode; deep instrument-panel ink in dark mode. Copper as the single chromatic accent. Hairline rules and numbered monospace annotations instead of decorative flourish.

**Why this direction:** clients hiring a senior engineer are buying judgment, not enthusiasm. Editorial restraint plus obsessive typographic detail signals both. It also avoids the entire generic-portfolio cluster (purple gradients, glassmorphism, oversized centered hero, neon-on-black terminal).

**Memorable detail (the one idea):** every section carries a **numbered monospace annotation label** (`01 / SELECTED WORK`) sitting above a full-width hairline rule, like a spec sheet's clause numbering. It costs almost nothing, is unmistakably "engineering document," and gives the whole site a rhythm competitors won't have. Tokens `--t-text-label`, `--t-tracking-label`, and `--t-line` exist specifically to serve it.

**Verification note:** all 35 foreground/background pairs in this spec were computed from their OKLCH definitions and checked against WCAG 2.x — body text ≥ 7:1, all supporting text ≥ 4.5:1, all interactive borders and focus rings ≥ 3:1. Every hex below is the true sRGB conversion of the OKLCH value beside it, not an approximation.

---

## 1. Design Principles

1. **Typography carries the design; color merely organizes it.** Hierarchy comes from size, weight, measure, and spacing. Color is limited to one accent hue so that when copper appears, it always means something (a link, an action, a live state).
2. **Hairlines over boxes, boxes over shadows.** Structure is expressed with 1px rules and generous whitespace. Cards get a border first, elevation only when genuinely floating. Never a card inside a card.
3. **Every value is a token, every token is semantic.** Components reference roles (`text-ink-muted`), never primitives (`text-gray-500`). A palette change is a one-file diff.
4. **Motion clarifies sequence, never announces itself.** Compositor-only properties, short durations, one entrance per element, and a genuine static fallback. If an animation were removed, the page must still read correctly.
5. **Accessible by construction, not by audit.** Contrast targets are encoded in the token values themselves, so no component can be built wrong by using the system correctly.

---

## 2. Color Tokens

### Palette architecture

Four hue families keep the palette multi-dimensional rather than one-note:

| Family | OKLCH hue | Role |
|---|---|---|
| Warm greige | 85 | Light-mode surfaces, dark-mode text |
| Cool ink | 250 | Light-mode text, dark-mode surfaces |
| Copper | 48–62 | Accent: links, actions, active state |
| Patina / brick | 155 / 25 | Positive and critical signals only |

The deliberate cross-cast is the palette's signature: **light mode is cool ink on warm paper; dark mode inverts to warm white on cool ink.** Neither mode is a desaturated version of the other, which is what makes generic dark modes feel cheap.

### Light mode

| Token | OKLCH | Hex | Role |
|---|---|---|---|
| `--t-bg-primary` | `oklch(0.985 0.004 85)` | `#fbfaf7` | Page ground (warm paper) |
| `--t-bg-secondary` | `oklch(0.966 0.006 85)` | `#f6f3ef` | Alternating section bands |
| `--t-bg-sunken` | `oklch(0.945 0.008 85)` | `#efece7` | Code blocks, inset wells |
| `--t-bg-elevated` | `oklch(1 0 0)` | `#ffffff` | Cards — *lighter* than ground |
| `--t-bg-hover` | `oklch(0.955 0.007 85)` | `#f2f0eb` | Row / card hover wash |
| `--t-text-primary` | `oklch(0.245 0.015 250)` | `#1b2127` | Body + headings — **15.55:1** |
| `--t-text-secondary` | `oklch(0.445 0.014 250)` | `#4e555c` | Sub-copy, meta — **7.24:1** |
| `--t-text-muted` | `oklch(0.520 0.012 250)` | `#646a70` | Annotations, captions — **5.24:1** |
| `--t-text-on-solid` | `oklch(1 0 0)` | `#ffffff` | Text on ink buttons — **16.24:1** |
| `--t-accent` | `oklch(0.530 0.128 48)` | `#a5501d` | Links, accent text — **5.34:1** |
| `--t-accent-hover` | `oklch(0.480 0.132 45)` | `#973f0a` | Link/button hover — **6.64:1** |
| `--t-accent-subtle` | `oklch(0.955 0.022 60)` | `#fcede2` | Badge / tag ground |
| `--t-accent-subtle-hover` | `oklch(0.935 0.028 58)` | `#f9e5d8` | Badge hover |
| `--t-accent-contrast` | `oklch(1 0 0)` | `#ffffff` | Text on copper — **5.58:1** |
| `--t-accent-ring` | `oklch(0.620 0.140 50)` | `#c7692c` | Focus ring — **3.67:1** |
| `--t-line-subtle` | `oklch(0.932 0.005 85)` | `#eae8e5` | Decorative dividers |
| `--t-line` | `oklch(0.865 0.008 85)` | `#d5d2cd` | Card + section hairlines |
| `--t-line-strong` | `oklch(0.650 0.010 85)` | `#928f88` | Input borders — **3.09:1** |
| `--t-solid` | `oklch(0.245 0.015 250)` | `#1b2127` | Primary button ground |
| `--t-solid-hover` | `oklch(0.320 0.015 250)` | `#2d343a` | **12.09:1** with white |
| `--t-solid-active` | `oklch(0.280 0.015 250)` | `#232a30` | **13.92:1** with white |
| `--t-positive` | `oklch(0.500 0.085 155)` | `#36714e` | "Available for work" — **5.54:1** |
| `--t-critical` | `oklch(0.520 0.150 25)` | `#af3c3a` | Form errors — **5.70:1** |
| `--t-selection-bg` | `oklch(0.900 0.050 60)` | `#f8d7be` | `::selection` — **11.95:1** |
| `--t-scrim` | `rgb(27 33 39 / 0.45)` | — | Modal / mobile-nav overlay |

### Dark mode

| Token | OKLCH | Hex | Role |
|---|---|---|---|
| `--t-bg-primary` | `oklch(0.185 0.012 250)` | `#0f1318` | Page ground (cool ink) |
| `--t-bg-secondary` | `oklch(0.218 0.013 250)` | `#161b20` | Section bands |
| `--t-bg-sunken` | `oklch(0.150 0.012 250)` | `#080c10` | Code wells |
| `--t-bg-elevated` | `oklch(0.252 0.014 250)` | `#1d2329` | Cards |
| `--t-bg-hover` | `oklch(0.240 0.013 250)` | `#1b2025` | Hover wash |
| `--t-text-primary` | `oklch(0.955 0.006 85)` | `#f2f0ec` | Warm white — **16.38:1** |
| `--t-text-secondary` | `oklch(0.775 0.009 85)` | `#b8b5af` | **9.11:1** |
| `--t-text-muted` | `oklch(0.635 0.011 250)` | `#868b91` | **5.43:1** (4.62:1 on cards) |
| `--t-text-on-solid` | `oklch(0.185 0.012 250)` | `#0f1318` | Ink text on light button |
| `--t-accent` | `oklch(0.760 0.120 58)` | `#ea9d60` | Links — **8.42:1** |
| `--t-accent-hover` | `oklch(0.830 0.100 62)` | `#f7b983` | Hover |
| `--t-accent-active` | `oklch(0.700 0.125 55)` | `#d9884d` | Pressed |
| `--t-accent-subtle` | `oklch(0.290 0.045 50)` | `#3d2416` | Badge ground |
| `--t-accent-subtle-hover` | `oklch(0.345 0.055 52)` | `#50311d` | Badge hover |
| `--t-accent-contrast` | `oklch(0.185 0.012 250)` | `#0f1318` | Text on copper — **8.42:1** |
| `--t-accent-ring` | `oklch(0.760 0.120 58)` | `#ea9d60` | Focus ring — **8.42:1** |
| `--t-line-subtle` | `oklch(0.268 0.013 250)` | `#21272c` | Decorative dividers |
| `--t-line` | `oklch(0.340 0.013 250)` | `#33393f` | Hairlines |
| `--t-line-strong` | `oklch(0.535 0.014 250)` | `#676e75` | Inputs — **3.61:1** / 3.07:1 on cards |
| `--t-solid` | `oklch(0.955 0.006 85)` | `#f2f0ec` | Primary button (inverted) |
| `--t-solid-hover` | `oklch(0.880 0.007 85)` | `#d9d7d2` | **12.96:1** |
| `--t-solid-active` | `oklch(0.820 0.008 85)` | `#c6c4be` | **10.69:1** |
| `--t-positive` | `oklch(0.740 0.100 155)` | `#75be8f` | **8.45:1** |
| `--t-critical` | `oklch(0.700 0.140 25)` | `#e97871` | **6.56:1** |
| `--t-selection-bg` | `oklch(0.360 0.060 52)` | `#56341e` | **9.68:1** |
| `--t-scrim` | `rgb(4 6 8 / 0.65)` | — | Overlay |

### Surface / elevation system

Elevation is expressed as **surface lightness plus border**, with shadow as a third-order cue only. This is why dark mode doesn't look flat: it never relies on drop shadows, which are nearly invisible against `#0f1318`.

| Level | Surface | Border | Shadow | Use |
|---|---|---|---|---|
| 0 — ground | `bg-primary` | — | none | Page |
| 1 — band | `bg-secondary` | `line-subtle` top | none | Alternating sections |
| 2 — resting card | `bg-elevated` | `line` | `shadow-xs` | Project cards, list items |
| 3 — hover / raised | `bg-elevated` + `bg-hover` wash | `line-strong` | `shadow-md` | Card hover |
| 4 — floating | `bg-elevated` | `line` | `shadow-lg` + `shadow-highlight` | Dropdowns, command palette |
| 5 — modal | `bg-elevated` | `line` | `shadow-xl` over `scrim` | Dialogs |
| −1 — sunken | `bg-sunken` | `inset` hairline | none | Code blocks, form wells |

**Accent swap:** copper lives in exactly six tokens. To re-skin the whole site to, say, deep patina teal, change hue `48→195` and re-verify — no component touched. Documented alternates: patina teal `oklch(0.52 0.09 195)`, oxblood `oklch(0.50 0.13 20)`, moss `oklch(0.50 0.10 145)`.

---

## 3. Typography Tokens

### Font stack

| Role | Face | Why | Source |
|---|---|---|---|
| Display | **Newsreader** (variable 200–800, true italic, optical sizing) | A contemporary transitional serif from Production Type. Serif headings on an engineer's site are genuinely uncommon and read as *writes and thinks*, which is what converts clients. Optical sizing keeps 76px display and 20px pull-quotes both correct. | Google Fonts |
| Body / UI | **Schibsted Grotesk** (variable 400–900) | Neutral Scandinavian grotesk with slightly warm terminals. Reads cleanly at 17px, and is not Inter/Geist/Space Grotesk — avoids instant "AI-generated portfolio" recognition. | Google Fonts |
| Mono | **IBM Plex Mono** (400, 500) | Editorial character and real italics, unlike JetBrains Mono which is the default-dev-choice tell. Carries the annotation labels and code samples. | Google Fonts |

**Documented alternates:** display → Fraunces (more expressive) or Instrument Serif (trendier, use with caution); body → Instrument Sans or General Sans; mono → Geist Mono or Commit Mono.

**Loading budget — enforce this.** Three families is the ceiling. Use `next/font/google` with `display: 'swap'`, `subsets: ['latin']`, and **variable axes only** (no static weight list). Load mono at 400/500 only. Self-hosted variable subsets land at roughly 95–130 KB total; if it exceeds that, drop mono to 400 only.

```ts
// app/fonts.ts
import { Newsreader, Schibsted_Grotesk, IBM_Plex_Mono } from 'next/font/google'

export const display = Newsreader({
  subsets: ['latin'], display: 'swap', variable: '--font-display',
  axes: ['opsz'], style: ['normal', 'italic'],
})
export const body = Schibsted_Grotesk({
  subsets: ['latin'], display: 'swap', variable: '--font-body',
})
export const mono = IBM_Plex_Mono({
  subsets: ['latin'], display: 'swap', variable: '--font-mono',
  weight: ['400', '500'],
})
```

### Scale

Fluid `clamp()` only for the three largest steps — everything else is fixed so that UI never drifts between breakpoints. Base 16px.

| Token | Value | Px (min → max) | Use |
|---|---|---|---|
| `--t-text-2xs` | `0.6875rem` | 11 | Mono annotation labels only |
| `--t-text-xs` | `0.75rem` | 12 | Tags, table meta |
| `--t-text-sm` | `0.875rem` | 14 | UI text, buttons, nav |
| `--t-text-base` | `1rem` | 16 | Dense UI, form inputs |
| `--t-text-md` | `1.0625rem` | 17 | **Body prose** |
| `--t-text-lg` | `1.25rem` | 20 | Lead paragraph, card titles |
| `--t-text-xl` | `1.5rem` | 24 | `h4` |
| `--t-text-2xl` | `1.875rem` | 30 | `h3` |
| `--t-text-h2` | `clamp(1.625rem, 1.35rem + 1.35vw, 2.375rem)` | 26 → 38 | `h2` section titles |
| `--t-text-h1` | `clamp(2.125rem, 1.6rem + 1.9vw, 3rem)` | 34 → 48 | `h1` page titles |
| `--t-text-display` | `clamp(2.75rem, 1.75rem + 3.6vw, 4.75rem)` | 44 → 76 | Hero statement, once per page |

### Line height

| Token | Value | Use |
|---|---|---|
| `--t-leading-none` | `1` | Numerals, icon-adjacent labels |
| `--t-leading-tight` | `1.12` | Display serif |
| `--t-leading-snug` | `1.25` | `h1`–`h3` |
| `--t-leading-normal` | `1.5` | UI, buttons, nav |
| `--t-leading-relaxed` | `1.65` | **Body prose** |
| `--t-leading-loose` | `1.8` | Mono code blocks |

### Letter spacing

| Token | Value | Use |
|---|---|---|
| `--t-tracking-tighter` | `-0.03em` | Display serif ≥ 44px |
| `--t-tracking-tight` | `-0.015em` | `h1`, `h2` |
| `--t-tracking-normal` | `0` | Body |
| `--t-tracking-wide` | `0.02em` | Small caps, buttons at 14px |
| `--t-tracking-label` | `0.09em` | **Uppercase mono annotation labels** |
| `--t-tracking-wider` | `0.14em` | Vertical rail / rotated labels |

Optical rule: tracking tightens as size grows, loosens as size shrinks. Never set the display serif at default tracking — it will look rented.

### Weight

| Token | Value | Notes |
|---|---|---|
| `--t-weight-regular` | `400` | Body, and **display serif headings** |
| `--t-weight-medium` | `500` | UI emphasis, buttons, mono labels |
| `--t-weight-semibold` | `600` | `h3`/`h4` in sans contexts |
| `--t-weight-bold` | `700` | Reserve for inline `<strong>` |

**Hard rule:** the display serif is set at 400 (occasionally 500), never bold. Bold serif at 60px is the single fastest way to make an editorial layout look like a template. Emphasis in headings comes from *italic*, not weight.

### Measure

| Token | Value | Use |
|---|---|---|
| `--t-measure-narrow` | `54ch` | Pull quotes, hero sub-copy |
| `--t-measure-prose` | `68ch` | Case study body — the default |
| `--t-measure-wide` | `78ch` | Technical lists, tables |

---

## 4. Spacing & Layout Tokens

### Spacing scale (4px base)

| Token | Value | Px |
|---|---|---|
| `--t-space-0` | `0` | 0 |
| `--t-space-px` | `1px` | 1 |
| `--t-space-0-5` | `0.125rem` | 2 |
| `--t-space-1` | `0.25rem` | 4 |
| `--t-space-1-5` | `0.375rem` | 6 |
| `--t-space-2` | `0.5rem` | 8 |
| `--t-space-3` | `0.75rem` | 12 |
| `--t-space-4` | `1rem` | 16 |
| `--t-space-5` | `1.25rem` | 20 |
| `--t-space-6` | `1.5rem` | 24 |
| `--t-space-8` | `2rem` | 32 |
| `--t-space-10` | `2.5rem` | 40 |
| `--t-space-12` | `3rem` | 48 |
| `--t-space-16` | `4rem` | 64 |
| `--t-space-20` | `5rem` | 80 |
| `--t-space-24` | `6rem` | 96 |
| `--t-space-32` | `8rem` | 128 |
| `--t-space-40` | `10rem` | 160 |
| `--t-space-48` | `12rem` | 192 |

### Rhythm tokens (fluid — use these, not raw values, for page structure)

| Token | Value | Px | Use |
|---|---|---|---|
| `--t-gutter` | `clamp(1.25rem, 0.75rem + 2.5vw, 2.5rem)` | 20 → 40 | Page horizontal padding |
| `--t-space-stack` | `1.5rem` | 24 | Paragraph rhythm |
| `--t-space-block` | `clamp(2rem, 1.5rem + 2vw, 3.5rem)` | 32 → 56 | Between blocks in a section |
| `--t-space-section` | `clamp(4rem, 3rem + 5vw, 8rem)` | 64 → 128 | Between sections |
| `--t-space-section-lg` | `clamp(6rem, 4rem + 8vw, 12rem)` | 96 → 192 | Around hero / final CTA |

### Containers

| Token | Value | Px | Use |
|---|---|---|---|
| `--t-container-narrow` | `42rem` | 672 | Prose, contact form |
| `--t-container-content` | `56rem` | 896 | Case studies, about |
| `--t-container-max` | `72rem` | 1152 | Default page container |
| `--t-container-wide` | `84rem` | 1344 | Full-bleed project grids |

Pattern: `width: min(100% - 2 * var(--t-gutter), var(--t-container-max)); margin-inline: auto;`

### Grid

| Token | Value |
|---|---|
| `--t-grid-cols` | `12` (≥1024px) · `6` (768–1023px) · `4` (<768px) |
| `--t-grid-gap` | `clamp(1rem, 0.5rem + 1.5vw, 2rem)` — 16 → 32 |
| `--t-grid-gap-tight` | `clamp(0.75rem, 0.5rem + 0.75vw, 1rem)` |
| `--t-grid-rail` | `clamp(0px, -4rem + 8vw, 4.5rem)` — left annotation rail, collapses to 0 below ~1024px |

Project cards: 6 columns each at ≥1024, 3 at 768–1023, 4 (full) below. **Give cards a fixed aspect ratio** (`--t-ratio-card: 4 / 3`) so the grid doesn't reflow on hover or when titles wrap to a second line.

### Breakpoints

Aligned to Tailwind defaults except `xs`, so you're never fighting the framework.

| Token | Value |
|---|---|
| `--t-bp-xs` | `30rem` (480px) |
| `--t-bp-sm` | `40rem` (640px) |
| `--t-bp-md` | `48rem` (768px) |
| `--t-bp-lg` | `64rem` (1024px) |
| `--t-bp-xl` | `80rem` (1280px) |
| `--t-bp-2xl` | `96rem` (1536px) |

---

## 5. Radius, Shadow, Border Tokens

### Radius

Near-square is the point. This is a document, not an app shell.

| Token | Value | Use |
|---|---|---|
| `--t-radius-none` | `0` | Hairline rules, full-bleed media |
| `--t-radius-xs` | `2px` | Inline code, small tags |
| `--t-radius-sm` | `4px` | **Buttons, inputs — the default** |
| `--t-radius-md` | `6px` | Cards |
| `--t-radius-lg` | `10px` | Modals, image frames |
| `--t-radius-xl` | `16px` | Large feature media only |
| `--t-radius-full` | `9999px` | Avatar, status dot, pill tags — nothing else |

### Shadow

Light-mode shadows are tinted with the ink hue (`27 33 39`), never pure black — black shadows on warm paper read grey and dirty.

**Light**

| Token | Value |
|---|---|
| `--t-shadow-xs` | `0 1px 1px 0 rgb(27 33 39 / 0.04)` |
| `--t-shadow-sm` | `0 1px 2px 0 rgb(27 33 39 / 0.05), 0 1px 3px -1px rgb(27 33 39 / 0.04)` |
| `--t-shadow-md` | `0 2px 4px -1px rgb(27 33 39 / 0.06), 0 6px 14px -3px rgb(27 33 39 / 0.06)` |
| `--t-shadow-lg` | `0 4px 8px -2px rgb(27 33 39 / 0.06), 0 16px 32px -8px rgb(27 33 39 / 0.10)` |
| `--t-shadow-xl` | `0 24px 56px -16px rgb(27 33 39 / 0.16)` |
| `--t-shadow-highlight` | `inset 0 0 0 1px rgb(27 33 39 / 0.05)` |

**Dark** — deeper, more diffuse, plus a **top inner highlight** which is what actually communicates elevation on near-black.

| Token | Value |
|---|---|
| `--t-shadow-xs` | `0 1px 1px 0 rgb(0 0 0 / 0.30)` |
| `--t-shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.40)` |
| `--t-shadow-md` | `0 2px 6px -1px rgb(0 0 0 / 0.50), 0 8px 20px -6px rgb(0 0 0 / 0.45)` |
| `--t-shadow-lg` | `0 16px 40px -12px rgb(0 0 0 / 0.60)` |
| `--t-shadow-xl` | `0 32px 64px -20px rgb(0 0 0 / 0.70)` |
| `--t-shadow-highlight` | `inset 0 1px 0 0 rgb(242 240 236 / 0.05)` |

### Border & focus

| Token | Value | Notes |
|---|---|---|
| `--t-border-0` | `0` | |
| `--t-border-hairline` | `1px` | Default everywhere |
| `--t-border-2` | `2px` | Active nav marker, blockquote rule |
| `--t-border-4` | `4px` | Left rule on pull quotes |
| `--t-ring-width` | `2px` | |
| `--t-ring-offset` | `2px` | |
| `--t-shadow-focus` | `0 0 0 var(--t-ring-offset) var(--t-bg-primary), 0 0 0 calc(var(--t-ring-offset) + var(--t-ring-width)) var(--t-accent-ring)` | Two-stop ring works on any surface |

Use `:focus-visible` exclusively, and never remove the ring without replacing it. The ring is ≥3:1 in both modes.

---

## 6. Motion Tokens

### Duration

| Token | Value | Use |
|---|---|---|
| `--t-duration-instant` | `80ms` | Press / active feedback |
| `--t-duration-fast` | `140ms` | Hover color, underline, icon shift |
| `--t-duration-normal` | `220ms` | **Default** — most state changes |
| `--t-duration-slow` | `380ms` | Disclosure, menu open, tab slide |
| `--t-duration-slower` | `620ms` | Page / route transition |
| `--t-duration-entrance` | `700ms` | Scroll-reveal, runs once |

### Easing

| Token | Value | Character |
|---|---|---|
| `--t-ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | **Default.** Fast start, long settle |
| `--t-ease-out-soft` | `cubic-bezier(0.33, 1, 0.68, 1)` | Gentler; color and opacity |
| `--t-ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Symmetric; things that reverse |
| `--t-ease-in` | `cubic-bezier(0.55, 0, 1, 0.45)` | Exits only |
| `--t-ease-spring` | `cubic-bezier(0.34, 1.4, 0.64, 1)` | Slight overshoot — micro only |
| `--t-ease-emphasis` | `cubic-bezier(0.2, 0.9, 0.1, 1)` | Hero entrance, long travel |

### Movement & stagger

| Token | Value | Use |
|---|---|---|
| `--t-lift-sm` | `-2px` | Button hover |
| `--t-lift-md` | `-4px` | Card hover |
| `--t-press` | `0.985` | Active scale |
| `--t-reveal-y` | `14px` | Scroll-reveal offset — subtle by design |
| `--t-stagger-tight` | `0.04s` | Character / word stagger |
| `--t-stagger` | `0.07s` | List items — the default |
| `--t-stagger-loose` | `0.12s` | Section blocks |

### GSAP recommendations

**Setup for Next.js.** Use `@gsap/react`'s `useGSAP` hook, which handles cleanup on unmount and in Strict Mode. As of GSAP 3.13 the former Club plugins (SplitText, ScrollSmoother, MorphSVG) are free, so `SplitText` is available for headline reveals without a license.

**Animate only these:** `x`, `y`, `scale`, `rotation`, `opacity`, `clipPath`. These stay on the compositor.

**Never animate:** `width`, `height`, `top`, `left`, `margin`, `boxShadow`, `filter: blur()` on large areas. For a shadow transition, cross-fade the `opacity` of a pseudo-element that carries the shadow. For a "growing underline," animate `scaleX` on a 1px pseudo-element with `transform-origin: left`.

**Ease mapping** — register CustomEase so GSAP and CSS are pixel-identical:

```js
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(CustomEase, ScrollTrigger)

CustomEase.create('tOut',      '0.22, 1, 0.36, 1')
CustomEase.create('tOutSoft',  '0.33, 1, 0.68, 1')
CustomEase.create('tEmphasis', '0.2, 0.9, 0.1, 1')

gsap.defaults({ ease: 'tOut', duration: 0.22 })
```

Native GSAP equivalents if you skip CustomEase: `power3.out` ≈ `--t-ease-out`, `power2.out` ≈ `--t-ease-out-soft`, `power4.out` for hero entrances, `back.out(1.4)` ≈ `--t-ease-spring` (micro only). Avoid `expo.out` — it reads as showy at these durations.

**Motion budget.** At most **three** animated regions per viewport. Scroll reveals use `once: true` — re-animating on scroll-back is the most common way portfolio motion becomes irritating. Use `gsap.quickTo()` for anything driven by pointer position.

```js
// Canonical scroll reveal
gsap.from('[data-reveal]', {
  y: 14, opacity: 0, duration: 0.7, ease: 'tEmphasis', stagger: 0.07,
  scrollTrigger: { trigger: '[data-reveal-group]', start: 'top 80%', once: true },
})
```

**Reduced motion.** Two layers, both required.

```js
const mm = gsap.matchMedia()
mm.add('(prefers-reduced-motion: reduce)', () => {
  gsap.globalTimeline.timeScale(20)   // effectively instant
  ScrollTrigger.getAll().forEach(t => t.kill())
  gsap.set('[data-reveal]', { clearProps: 'all', opacity: 1, y: 0 })
})
```

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  --t-lift-sm: 0px; --t-lift-md: 0px; --t-press: 1; --t-reveal-y: 0px;
}
```

Critical detail: elements that animate in **must not** start at `opacity: 0` in CSS. Set the hidden state from JS (`gsap.set()` inside the no-preference branch) so that with reduced motion or JS disabled, content is simply visible. Otherwise the site is blank for those users.

---

## 7. Component Token Maps

### Button

| Token | Value |
|---|---|
| `--t-btn-height-sm / md / lg` | `2rem` / `2.375rem` / `2.75rem` (32 / 38 / 44) |
| `--t-btn-px-sm / md / lg` | `--t-space-3` / `--t-space-4` / `--t-space-5` |
| `--t-btn-radius` | `--t-radius-sm` |
| `--t-btn-font` | `--t-text-sm`, weight `500`, tracking `--t-tracking-wide` |
| `--t-btn-gap` | `--t-space-2` (icon gap) |
| `--t-btn-transition` | `--t-duration-fast` `--t-ease-out` |

| Variant | Ground | Text | Border | Hover | Active |
|---|---|---|---|---|---|
| **primary** | `--t-solid` | `--t-text-on-solid` | none | `--t-solid-hover` + `translateY(--t-lift-sm)` | `--t-solid-active`, `scale(--t-press)` |
| **secondary** | `transparent` | `--t-text-primary` | `--t-line-strong` | `--t-bg-hover`, border `--t-text-primary` | `--t-bg-sunken` |
| **ghost** | `transparent` | `--t-text-secondary` | none | `--t-bg-hover`, text `--t-text-primary` | `--t-bg-sunken` |
| **accent** | `--t-accent` | `--t-accent-contrast` | none | `--t-accent-hover` | `--t-accent-active` |

Lift on hover for `primary` only. Ghost and secondary change color, not position — otherwise nav areas jitter. Disabled: `opacity: 0.45; pointer-events: none` (never a separate grey token to maintain).

### Card

| Token | Value |
|---|---|
| `--t-card-bg` | `--t-bg-elevated` |
| `--t-card-border` | `--t-border-hairline` solid `--t-line` |
| `--t-card-radius` | `--t-radius-md` |
| `--t-card-padding` | `clamp(1.25rem, 1rem + 1vw, 1.75rem)` |
| `--t-card-shadow` | `--t-shadow-xs` |
| `--t-card-shadow-hover` | `--t-shadow-md` |
| `--t-card-border-hover` | `--t-line-strong` |
| `--t-card-lift` | `--t-lift-md` |
| `--t-card-ratio-media` | `4 / 3` |
| `--t-card-transition` | `--t-duration-normal` `--t-ease-out` |

Whole card is one link (`::after` overlay) so the entire surface is the hit target. Fixed media aspect ratio prevents grid reflow. No nested cards — a card's internals are hairline-separated rows.

### Nav

| Token | Value |
|---|---|
| `--t-nav-height` | `4rem` (64px) |
| `--t-nav-bg` | `color-mix(in oklch, var(--t-bg-primary) 82%, transparent)` |
| `--t-nav-blur` | `blur(12px) saturate(1.4)` |
| `--t-nav-border` | `--t-border-hairline` solid `--t-line-subtle` (bottom, appears on scroll) |
| `--t-nav-link-color` | `--t-text-secondary` |
| `--t-nav-link-color-active` | `--t-text-primary` |
| `--t-nav-marker` | `--t-border-2` solid `--t-accent` |
| `--t-nav-font` | `--t-text-sm`, weight `500` |
| `--t-nav-z` | `50` |

The nav starts transparent and borderless; the background wash and bottom hairline fade in after ~80px of scroll (animate `opacity` on a pseudo-element, not `backdrop-filter`, which is expensive to transition). Active link marked by a 2px copper underline that slides between items with `--t-duration-slow`.

### Tag / Badge

| Token | Value |
|---|---|
| `--t-tag-height` | `1.5rem` (24px) |
| `--t-tag-px` | `--t-space-2` |
| `--t-tag-radius` | `--t-radius-xs` (`--t-radius-full` for status pills) |
| `--t-tag-font` | `--t-text-xs`, `--font-mono`, weight `500`, tracking `0.04em` |
| `--t-tag-bg` | `--t-bg-sunken` |
| `--t-tag-text` | `--t-text-secondary` |
| `--t-tag-border` | `--t-border-hairline` solid `--t-line-subtle` |
| **accent variant** | bg `--t-accent-subtle`, text `--t-accent`, hover bg `--t-accent-subtle-hover` |
| **status variant** | dot `--t-positive` + text `--t-text-secondary` |

Tech-stack tags use the mono face — it does real work here, signaling "these are technical identifiers" rather than marketing words.

### Link

| Token | Value |
|---|---|
| `--t-link-color` | `--t-accent` |
| `--t-link-color-hover` | `--t-accent-hover` |
| `--t-link-underline-color` | `color-mix(in oklch, var(--t-accent) 40%, transparent)` |
| `--t-link-underline-offset` | `0.18em` |
| `--t-link-underline-thickness` | `1px` |
| `--t-link-transition` | `--t-duration-fast` `--t-ease-out` |

Prose links: `text-decoration-thickness: 1px` with `text-underline-offset: 0.18em`, underline at 40% accent, going full-opacity on hover. Navigation and card links are undecorated. External links get a 10px arrow glyph that shifts `x: 2px, y: -2px` on hover — a `--t-duration-fast` micro-interaction that costs nothing and reads as considered.

### Input (contact form)

| Token | Value |
|---|---|
| `--t-input-height` | `2.75rem` (44px — touch target) |
| `--t-input-px` | `--t-space-3` |
| `--t-input-radius` | `--t-radius-sm` |
| `--t-input-bg` | `--t-bg-elevated` |
| `--t-input-bg-disabled` | `--t-bg-sunken` |
| `--t-input-border` | `--t-border-hairline` solid `--t-line-strong` (**≥3:1 verified**) |
| `--t-input-border-hover` | `--t-text-muted` |
| `--t-input-border-focus` | `--t-accent-ring` |
| `--t-input-text` | `--t-text-primary` |
| `--t-input-placeholder` | `--t-text-muted` |
| `--t-input-font` | `--t-text-base` (16px — prevents iOS zoom-on-focus) |
| `--t-input-label` | `--t-text-sm`, weight `500`, color `--t-text-secondary` |
| `--t-input-help` | `--t-text-xs`, color `--t-text-muted` |
| `--t-input-error-border` | `--t-critical` |
| `--t-input-error-text` | `--t-critical`, `--t-text-xs` |
| `--t-input-shadow-focus` | `--t-shadow-focus` |
| `--t-textarea-min-height` | `8rem` |

Labels always visible above the field — never placeholder-as-label. Error state pairs the color change with a text message and `aria-describedby`, so it never depends on color alone. 16px font size is not a style choice; anything smaller triggers Safari's auto-zoom on iOS.

---

## 8. Tailwind Config Extension

### Tailwind v4 (recommended) — `app/globals.css`

The `inline` keyword is load-bearing. Without it, Tailwind resolves `var(--t-*)` at build time against `:root` and bakes in the light value, and your dark mode silently does nothing. Note also that the raw tokens use the `--t-*` namespace while the theme keys use `--color-*` — if both used the same name you'd create a self-reference that breaks the same way.

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

@theme inline {
  /* ---- color: theme-switched, must be inline ---- */
  --color-surface:          var(--t-bg-primary);
  --color-surface-2:        var(--t-bg-secondary);
  --color-surface-sunken:   var(--t-bg-sunken);
  --color-card:             var(--t-bg-elevated);
  --color-hover:            var(--t-bg-hover);

  --color-ink:              var(--t-text-primary);
  --color-ink-2:            var(--t-text-secondary);
  --color-ink-muted:        var(--t-text-muted);
  --color-ink-on-solid:     var(--t-text-on-solid);

  --color-accent:           var(--t-accent);
  --color-accent-hover:     var(--t-accent-hover);
  --color-accent-active:    var(--t-accent-active);
  --color-accent-tint:      var(--t-accent-subtle);
  --color-accent-tint-hover:var(--t-accent-subtle-hover);
  --color-accent-contrast:  var(--t-accent-contrast);
  --color-ring:             var(--t-accent-ring);

  --color-line:             var(--t-line);
  --color-line-subtle:      var(--t-line-subtle);
  --color-line-strong:      var(--t-line-strong);

  --color-solid:            var(--t-solid);
  --color-solid-hover:      var(--t-solid-hover);
  --color-solid-active:     var(--t-solid-active);

  --color-positive:         var(--t-positive);
  --color-critical:         var(--t-critical);
  --color-scrim:            var(--t-scrim);

  /* ---- shadows: theme-switched, must be inline ---- */
  --shadow-xs:        var(--t-shadow-xs);
  --shadow-sm:        var(--t-shadow-sm);
  --shadow-md:        var(--t-shadow-md);
  --shadow-lg:        var(--t-shadow-lg);
  --shadow-xl:        var(--t-shadow-xl);
  --shadow-highlight: var(--t-shadow-highlight);
  --shadow-focus:     var(--t-shadow-focus);

  /* ---- fonts ---- */
  --font-display: var(--font-display), ui-serif, Georgia, serif;
  --font-body:    var(--font-body), ui-sans-serif, system-ui, sans-serif;
  --font-mono:    var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace;
  --font-sans:    var(--font-body), ui-sans-serif, system-ui, sans-serif;

  /* ---- type scale (static: plain values fine) ---- */
  --text-2xs: 0.6875rem;   --text-2xs--line-height: 1.4;
  --text-xs:  0.75rem;     --text-xs--line-height: 1.45;
  --text-sm:  0.875rem;    --text-sm--line-height: 1.5;
  --text-base:1rem;        --text-base--line-height: 1.5;
  --text-md:  1.0625rem;   --text-md--line-height: 1.65;
  --text-lg:  1.25rem;     --text-lg--line-height: 1.45;
  --text-xl:  1.5rem;      --text-xl--line-height: 1.3;
  --text-2xl: 1.875rem;    --text-2xl--line-height: 1.25;
  --text-h2:  clamp(1.625rem, 1.35rem + 1.35vw, 2.375rem);
  --text-h2--line-height: 1.25;  --text-h2--letter-spacing: -0.015em;
  --text-h1:  clamp(2.125rem, 1.6rem + 1.9vw, 3rem);
  --text-h1--line-height: 1.2;   --text-h1--letter-spacing: -0.015em;
  --text-display: clamp(2.75rem, 1.75rem + 3.6vw, 4.75rem);
  --text-display--line-height: 1.12;
  --text-display--letter-spacing: -0.03em;

  /* ---- leading / tracking / weight ---- */
  --leading-tight: 1.12;  --leading-snug: 1.25;
  --leading-normal: 1.5;  --leading-relaxed: 1.65;  --leading-loose: 1.8;

  --tracking-tighter: -0.03em; --tracking-tight: -0.015em;
  --tracking-normal: 0;        --tracking-wide: 0.02em;
  --tracking-label: 0.09em;    --tracking-wider: 0.14em;

  --font-weight-regular: 400;  --font-weight-medium: 500;
  --font-weight-semibold: 600; --font-weight-bold: 700;

  /* ---- spacing additions (v4 keeps its 0.25rem base scale) ---- */
  --spacing-gutter:     clamp(1.25rem, 0.75rem + 2.5vw, 2.5rem);
  --spacing-block:      clamp(2rem, 1.5rem + 2vw, 3.5rem);
  --spacing-section:    clamp(4rem, 3rem + 5vw, 8rem);
  --spacing-section-lg: clamp(6rem, 4rem + 8vw, 12rem);
  --spacing-rail:       clamp(0px, -4rem + 8vw, 4.5rem);

  /* ---- containers ---- */
  --container-narrow:  42rem;
  --container-content: 56rem;
  --container-max:     72rem;
  --container-wide:    84rem;

  /* ---- radius ---- */
  --radius-xs: 2px;  --radius-sm: 4px;  --radius-md: 6px;
  --radius-lg: 10px; --radius-xl: 16px;

  /* ---- motion ---- */
  --ease-out:      cubic-bezier(0.22, 1, 0.36, 1);
  --ease-out-soft: cubic-bezier(0.33, 1, 0.68, 1);
  --ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1);
  --ease-in:       cubic-bezier(0.55, 0, 1, 0.45);
  --ease-spring:   cubic-bezier(0.34, 1.4, 0.64, 1);
  --ease-emphasis: cubic-bezier(0.2, 0.9, 0.1, 1);

  --animate-duration-instant: 80ms;
  --animate-duration-fast:    140ms;
  --animate-duration-normal:  220ms;
  --animate-duration-slow:    380ms;
  --animate-duration-slower:  620ms;
  --animate-duration-entrance:700ms;

  /* ---- breakpoints ---- */
  --breakpoint-xs: 30rem;

  /* ---- misc ---- */
  --aspect-card: 4 / 3;
}
```

Resulting utilities: `bg-surface`, `bg-card`, `text-ink`, `text-ink-muted`, `border-line`, `border-line-strong`, `text-accent`, `bg-accent-tint`, `ring-ring`, `shadow-md`, `text-display`, `tracking-label`, `py-section`, `px-gutter`, `max-w-content`, `rounded-sm`, `ease-out`, `aspect-card`.

### Tailwind v3 — `tailwind.config.ts`

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface:   { DEFAULT: 'var(--t-bg-primary)', 2: 'var(--t-bg-secondary)', sunken: 'var(--t-bg-sunken)' },
        card:      'var(--t-bg-elevated)',
        hover:     'var(--t-bg-hover)',
        ink:       { DEFAULT: 'var(--t-text-primary)', 2: 'var(--t-text-secondary)', muted: 'var(--t-text-muted)', 'on-solid': 'var(--t-text-on-solid)' },
        accent:    { DEFAULT: 'var(--t-accent)', hover: 'var(--t-accent-hover)', active: 'var(--t-accent-active)', tint: 'var(--t-accent-subtle)', 'tint-hover': 'var(--t-accent-subtle-hover)', contrast: 'var(--t-accent-contrast)' },
        line:      { DEFAULT: 'var(--t-line)', subtle: 'var(--t-line-subtle)', strong: 'var(--t-line-strong)' },
        solid:     { DEFAULT: 'var(--t-solid)', hover: 'var(--t-solid-hover)', active: 'var(--t-solid-active)' },
        positive:  'var(--t-positive)',
        critical:  'var(--t-critical)',
        ring:      'var(--t-accent-ring)',
        scrim:     'var(--t-scrim)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        sans:    ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        '2xs':  ['0.6875rem', { lineHeight: '1.4' }],
        xs:     ['0.75rem',   { lineHeight: '1.45' }],
        sm:     ['0.875rem',  { lineHeight: '1.5' }],
        base:   ['1rem',      { lineHeight: '1.5' }],
        md:     ['1.0625rem', { lineHeight: '1.65' }],
        lg:     ['1.25rem',   { lineHeight: '1.45' }],
        xl:     ['1.5rem',    { lineHeight: '1.3' }],
        '2xl':  ['1.875rem',  { lineHeight: '1.25' }],
        h2:     ['clamp(1.625rem, 1.35rem + 1.35vw, 2.375rem)', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        h1:     ['clamp(2.125rem, 1.6rem + 1.9vw, 3rem)',       { lineHeight: '1.2',  letterSpacing: '-0.015em' }],
        display:['clamp(2.75rem, 1.75rem + 3.6vw, 4.75rem)',    { lineHeight: '1.12', letterSpacing: '-0.03em' }],
      },
      fontWeight: { regular: '400', medium: '500', semibold: '600', bold: '700' },
      lineHeight: { tight: '1.12', snug: '1.25', normal: '1.5', relaxed: '1.65', loose: '1.8' },
      letterSpacing: { tighter: '-0.03em', tight: '-0.015em', normal: '0', wide: '0.02em', label: '0.09em', wider: '0.14em' },
      spacing: {
        gutter:       'clamp(1.25rem, 0.75rem + 2.5vw, 2.5rem)',
        block:        'clamp(2rem, 1.5rem + 2vw, 3.5rem)',
        section:      'clamp(4rem, 3rem + 5vw, 8rem)',
        'section-lg': 'clamp(6rem, 4rem + 8vw, 12rem)',
        rail:         'clamp(0px, -4rem + 8vw, 4.5rem)',
      },
      maxWidth: { narrow: '42rem', content: '56rem', page: '72rem', wide: '84rem', prose: '68ch' },
      borderRadius: { xs: '2px', sm: '4px', md: '6px', lg: '10px', xl: '16px' },
      borderWidth: { hairline: '1px' },
      boxShadow: {
        xs: 'var(--t-shadow-xs)', sm: 'var(--t-shadow-sm)', md: 'var(--t-shadow-md)',
        lg: 'var(--t-shadow-lg)', xl: 'var(--t-shadow-xl)',
        highlight: 'var(--t-shadow-highlight)', focus: 'var(--t-shadow-focus)',
      },
      transitionDuration: {
        instant: '80ms', fast: '140ms', normal: '220ms',
        slow: '380ms', slower: '620ms', entrance: '700ms',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'out-soft': 'cubic-bezier(0.33, 1, 0.68, 1)',
        'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
        in: 'cubic-bezier(0.55, 0, 1, 0.45)',
        spring: 'cubic-bezier(0.34, 1.4, 0.64, 1)',
        emphasis: 'cubic-bezier(0.2, 0.9, 0.1, 1)',
      },
      screens: { xs: '30rem' },
      aspectRatio: { card: '4 / 3' },
      translate: { 'lift-sm': '-2px', 'lift-md': '-4px' },
      scale: { press: '0.985' },
    },
  },
}
export default config
```

**v3 caveat worth knowing before you commit:** because these colors are `var()` references to OKLCH values, Tailwind v3's opacity modifiers (`bg-accent/50`) will not work — v3 needs numeric channels to inject `<alpha-value>`. Either use `color-mix(in oklch, var(--t-accent) 50%, transparent)` in a small set of utilities, or use v4, where opacity modifiers work with `var()` colors natively. **Prefer v4 for a greenfield build.**

---

## 9. CSS Variables Root Block

Drop this in `app/globals.css` **above** the `@theme inline` block. It is framework-independent — it works standalone with plain CSS too.

```css
/* ============================================================
   LEDGER — design tokens
   Raw layer. Theme-switched values live here; the Tailwind
   @theme inline block maps them to utilities.
   All contrast ratios verified against WCAG 2.x.
   ============================================================ */

:root {
  color-scheme: light;

  /* ---- surfaces ---- */
  --t-bg-primary:           oklch(0.985 0.004 85);   /* #fbfaf7 */
  --t-bg-secondary:         oklch(0.966 0.006 85);   /* #f6f3ef */
  --t-bg-sunken:            oklch(0.945 0.008 85);   /* #efece7 */
  --t-bg-elevated:          oklch(1 0 0);            /* #ffffff */
  --t-bg-hover:             oklch(0.955 0.007 85);   /* #f2f0eb */

  /* ---- text ---- */
  --t-text-primary:         oklch(0.245 0.015 250);  /* #1b2127  15.55:1 */
  --t-text-secondary:       oklch(0.445 0.014 250);  /* #4e555c   7.24:1 */
  --t-text-muted:           oklch(0.520 0.012 250);  /* #646a70   5.24:1 */
  --t-text-on-solid:        oklch(1 0 0);            /* #ffffff  16.24:1 */

  /* ---- accent (copper) ---- */
  --t-accent:               oklch(0.530 0.128 48);   /* #a5501d   5.34:1 */
  --t-accent-hover:         oklch(0.480 0.132 45);   /* #973f0a   6.64:1 */
  --t-accent-active:        oklch(0.440 0.130 44);   /* pressed */
  --t-accent-subtle:        oklch(0.955 0.022 60);   /* #fcede2 */
  --t-accent-subtle-hover:  oklch(0.935 0.028 58);   /* #f9e5d8 */
  --t-accent-contrast:      oklch(1 0 0);            /* #ffffff   5.58:1 */
  --t-accent-ring:          oklch(0.620 0.140 50);   /* #c7692c   3.67:1 */

  /* ---- lines ---- */
  --t-line-subtle:          oklch(0.932 0.005 85);   /* #eae8e5 */
  --t-line:                 oklch(0.865 0.008 85);   /* #d5d2cd */
  --t-line-strong:          oklch(0.650 0.010 85);   /* #928f88   3.09:1 */

  /* ---- solid action (ink) ---- */
  --t-solid:                oklch(0.245 0.015 250);  /* #1b2127 */
  --t-solid-hover:          oklch(0.320 0.015 250);  /* #2d343a  12.09:1 */
  --t-solid-active:         oklch(0.280 0.015 250);  /* #232a30  13.92:1 */

  /* ---- signals ---- */
  --t-positive:             oklch(0.500 0.085 155);  /* #36714e   5.54:1 */
  --t-critical:             oklch(0.520 0.150 25);   /* #af3c3a   5.70:1 */

  /* ---- misc ---- */
  --t-selection-bg:         oklch(0.900 0.050 60);   /* #f8d7be  11.95:1 */
  --t-scrim:                rgb(27 33 39 / 0.45);

  /* ---- shadows (ink-tinted, never pure black) ---- */
  --t-shadow-xs: 0 1px 1px 0 rgb(27 33 39 / 0.04);
  --t-shadow-sm: 0 1px 2px 0 rgb(27 33 39 / 0.05), 0 1px 3px -1px rgb(27 33 39 / 0.04);
  --t-shadow-md: 0 2px 4px -1px rgb(27 33 39 / 0.06), 0 6px 14px -3px rgb(27 33 39 / 0.06);
  --t-shadow-lg: 0 4px 8px -2px rgb(27 33 39 / 0.06), 0 16px 32px -8px rgb(27 33 39 / 0.10);
  --t-shadow-xl: 0 24px 56px -16px rgb(27 33 39 / 0.16);
  --t-shadow-highlight: inset 0 0 0 1px rgb(27 33 39 / 0.05);

  /* ============ MODE-INDEPENDENT TOKENS ============ */

  /* type */
  --t-text-2xs: 0.6875rem; --t-text-xs: 0.75rem;  --t-text-sm: 0.875rem;
  --t-text-base: 1rem;     --t-text-md: 1.0625rem; --t-text-lg: 1.25rem;
  --t-text-xl: 1.5rem;     --t-text-2xl: 1.875rem;
  --t-text-h2: clamp(1.625rem, 1.35rem + 1.35vw, 2.375rem);
  --t-text-h1: clamp(2.125rem, 1.6rem + 1.9vw, 3rem);
  --t-text-display: clamp(2.75rem, 1.75rem + 3.6vw, 4.75rem);

  --t-leading-none: 1;      --t-leading-tight: 1.12; --t-leading-snug: 1.25;
  --t-leading-normal: 1.5;  --t-leading-relaxed: 1.65; --t-leading-loose: 1.8;

  --t-tracking-tighter: -0.03em; --t-tracking-tight: -0.015em;
  --t-tracking-normal: 0;        --t-tracking-wide: 0.02em;
  --t-tracking-label: 0.09em;    --t-tracking-wider: 0.14em;

  --t-weight-regular: 400; --t-weight-medium: 500;
  --t-weight-semibold: 600; --t-weight-bold: 700;

  --t-measure-narrow: 54ch; --t-measure-prose: 68ch; --t-measure-wide: 78ch;

  /* spacing */
  --t-space-px: 1px;      --t-space-0-5: 0.125rem; --t-space-1: 0.25rem;
  --t-space-1-5: 0.375rem;--t-space-2: 0.5rem;     --t-space-3: 0.75rem;
  --t-space-4: 1rem;      --t-space-5: 1.25rem;    --t-space-6: 1.5rem;
  --t-space-8: 2rem;      --t-space-10: 2.5rem;    --t-space-12: 3rem;
  --t-space-16: 4rem;     --t-space-20: 5rem;      --t-space-24: 6rem;
  --t-space-32: 8rem;     --t-space-40: 10rem;     --t-space-48: 12rem;

  --t-gutter:          clamp(1.25rem, 0.75rem + 2.5vw, 2.5rem);
  --t-space-stack:     1.5rem;
  --t-space-block:     clamp(2rem, 1.5rem + 2vw, 3.5rem);
  --t-space-section:   clamp(4rem, 3rem + 5vw, 8rem);
  --t-space-section-lg:clamp(6rem, 4rem + 8vw, 12rem);

  /* layout */
  --t-container-narrow: 42rem;  --t-container-content: 56rem;
  --t-container-max: 72rem;     --t-container-wide: 84rem;
  --t-grid-cols: 12;
  --t-grid-gap: clamp(1rem, 0.5rem + 1.5vw, 2rem);
  --t-grid-gap-tight: clamp(0.75rem, 0.5rem + 0.75vw, 1rem);
  --t-grid-rail: clamp(0px, -4rem + 8vw, 4.5rem);
  --t-ratio-card: 4 / 3;

  /* radius & border */
  --t-radius-none: 0;  --t-radius-xs: 2px; --t-radius-sm: 4px;
  --t-radius-md: 6px;  --t-radius-lg: 10px; --t-radius-xl: 16px;
  --t-radius-full: 9999px;
  --t-border-0: 0; --t-border-hairline: 1px; --t-border-2: 2px; --t-border-4: 4px;
  --t-ring-width: 2px; --t-ring-offset: 2px;
  --t-shadow-focus:
    0 0 0 var(--t-ring-offset) var(--t-bg-primary),
    0 0 0 calc(var(--t-ring-offset) + var(--t-ring-width)) var(--t-accent-ring);

  /* motion */
  --t-duration-instant: 80ms;  --t-duration-fast: 140ms;
  --t-duration-normal: 220ms;  --t-duration-slow: 380ms;
  --t-duration-slower: 620ms;  --t-duration-entrance: 700ms;

  --t-ease-out:      cubic-bezier(0.22, 1, 0.36, 1);
  --t-ease-out-soft: cubic-bezier(0.33, 1, 0.68, 1);
  --t-ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1);
  --t-ease-in:       cubic-bezier(0.55, 0, 1, 0.45);
  --t-ease-spring:   cubic-bezier(0.34, 1.4, 0.64, 1);
  --t-ease-emphasis: cubic-bezier(0.2, 0.9, 0.1, 1);

  --t-lift-sm: -2px; --t-lift-md: -4px;
  --t-press: 0.985;  --t-reveal-y: 14px;
  --t-stagger-tight: 0.04s; --t-stagger: 0.07s; --t-stagger-loose: 0.12s;

  /* z-index */
  --t-z-base: 0; --t-z-raised: 10; --t-z-sticky: 30;
  --t-z-nav: 50; --t-z-overlay: 70; --t-z-modal: 80; --t-z-toast: 90;
}

.dark {
  color-scheme: dark;

  --t-bg-primary:           oklch(0.185 0.012 250);  /* #0f1318 */
  --t-bg-secondary:         oklch(0.218 0.013 250);  /* #161b20 */
  --t-bg-sunken:            oklch(0.150 0.012 250);  /* #080c10 */
  --t-bg-elevated:          oklch(0.252 0.014 250);  /* #1d2329 */
  --t-bg-hover:             oklch(0.240 0.013 250);  /* #1b2025 */

  --t-text-primary:         oklch(0.955 0.006 85);   /* #f2f0ec  16.38:1 */
  --t-text-secondary:       oklch(0.775 0.009 85);   /* #b8b5af   9.11:1 */
  --t-text-muted:           oklch(0.635 0.011 250);  /* #868b91   5.43:1 */
  --t-text-on-solid:        oklch(0.185 0.012 250);  /* #0f1318 */

  --t-accent:               oklch(0.760 0.120 58);   /* #ea9d60   8.42:1 */
  --t-accent-hover:         oklch(0.830 0.100 62);   /* #f7b983 */
  --t-accent-active:        oklch(0.700 0.125 55);   /* #d9884d */
  --t-accent-subtle:        oklch(0.290 0.045 50);   /* #3d2416 */
  --t-accent-subtle-hover:  oklch(0.345 0.055 52);   /* #50311d */
  --t-accent-contrast:      oklch(0.185 0.012 250);  /* #0f1318   8.42:1 */
  --t-accent-ring:          oklch(0.760 0.120 58);   /* #ea9d60   8.42:1 */

  --t-line-subtle:          oklch(0.268 0.013 250);  /* #21272c */
  --t-line:                 oklch(0.340 0.013 250);  /* #33393f */
  --t-line-strong:          oklch(0.535 0.014 250);  /* #676e75   3.61:1 */

  --t-solid:                oklch(0.955 0.006 85);   /* #f2f0ec */
  --t-solid-hover:          oklch(0.880 0.007 85);   /* #d9d7d2  12.96:1 */
  --t-solid-active:         oklch(0.820 0.008 85);   /* #c6c4be  10.69:1 */

  --t-positive:             oklch(0.740 0.100 155);  /* #75be8f   8.45:1 */
  --t-critical:             oklch(0.700 0.140 25);   /* #e97871   6.56:1 */

  --t-selection-bg:         oklch(0.360 0.060 52);   /* #56341e   9.68:1 */
  --t-scrim:                rgb(4 6 8 / 0.65);

  /* dark elevation = surface lightness + top inner highlight */
  --t-shadow-xs: 0 1px 1px 0 rgb(0 0 0 / 0.30);
  --t-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.40);
  --t-shadow-md: 0 2px 6px -1px rgb(0 0 0 / 0.50), 0 8px 20px -6px rgb(0 0 0 / 0.45);
  --t-shadow-lg: 0 16px 40px -12px rgb(0 0 0 / 0.60);
  --t-shadow-xl: 0 32px 64px -20px rgb(0 0 0 / 0.70);
  --t-shadow-highlight: inset 0 1px 0 0 rgb(242 240 236 / 0.05);
}

/* ---------------- base layer ---------------- */

*, *::before, *::after { box-sizing: border-box; }

html {
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
  scroll-padding-top: calc(4rem + var(--t-space-4));
}

body {
  margin: 0;
  background: var(--t-bg-primary);
  color: var(--t-text-primary);
  font-family: var(--font-body), ui-sans-serif, system-ui, sans-serif;
  font-size: var(--t-text-md);
  line-height: var(--t-leading-relaxed);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-variant-numeric: tabular-nums;
}

h1, h2, h3, h4 {
  font-family: var(--font-display), ui-serif, Georgia, serif;
  font-weight: var(--t-weight-regular);
  line-height: var(--t-leading-snug);
  letter-spacing: var(--t-tracking-tight);
  text-wrap: balance;
  margin: 0;
}

p { text-wrap: pretty; margin: 0; }

::selection { background: var(--t-selection-bg); color: var(--t-text-primary); }

:focus-visible {
  outline: none;
  box-shadow: var(--t-shadow-focus);
  border-radius: var(--t-radius-sm);
}

/* the signature detail: numbered spec annotation + hairline rule */
.section-label {
  display: flex;
  align-items: baseline;
  gap: var(--t-space-3);
  font-family: var(--font-mono), ui-monospace, monospace;
  font-size: var(--t-text-2xs);
  font-weight: var(--t-weight-medium);
  letter-spacing: var(--t-tracking-label);
  text-transform: uppercase;
  color: var(--t-text-muted);
  padding-bottom: var(--t-space-3);
  border-bottom: var(--t-border-hairline) solid var(--t-line);
  margin-bottom: var(--t-space-block);
}
.section-label__index { color: var(--t-accent); font-variant-numeric: tabular-nums; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  :root { --t-lift-sm: 0px; --t-lift-md: 0px; --t-press: 1; --t-reveal-y: 0px; }
}
```

Pair this with `next-themes` (`attribute="class"`) so the `.dark` class is applied before paint and there's no flash.

---

## 10. Anti-Patterns

**Token system**

1. **Never reference a primitive from a component.** `text-gray-500` or a raw hex in a component file is the failure mode this whole system exists to prevent. If the role you need doesn't exist, add a semantic token first, then use it.
2. **Never put a theme-switched value in a plain `@theme` block.** It bakes in the light value at build time and dark mode silently stops working while every individual file still looks correct. Theme-switched values go in `:root`/`.dark` and are mapped with `@theme inline`.
3. **Never name a raw token the same as its Tailwind theme key.** `@theme inline { --color-accent: var(--color-accent) }` self-references and resolves to nothing useful. That's why the raw layer is `--t-*`.
4. **Don't add a third neutral ramp or a second accent hue.** The palette's discipline is the whole aesthetic. New emphasis needs come out of the type and spacing scales, not new colors.
5. **Don't expand the scales.** If a spacing value isn't on the scale, the layout is wrong, not the scale. Same for type sizes — twelve steps is already generous.
6. **Don't mix color spaces between modes.** Both themes are OKLCH so that `color-mix()` and alpha blends behave identically. A stray hex in `.dark` will make transitions muddy.

**Visual**

7. **No card inside a card.** Nested elevation destroys the hierarchy. Internal grouping uses hairlines and space.
8. **No bold display serif.** 400 weight, italic for emphasis. Bold Newsreader at 60px looks like a template.
9. **No pill-shaped buttons.** `--t-radius-sm`. `--t-radius-full` is for avatars, status dots, and pill tags only.
10. **Don't use copper as a background wash.** It's ink-on-paper accent: links, 2px markers, small badge grounds, and one button variant. Large copper fields make the site look like a warning label.
11. **Don't skip elevation levels.** Ground → resting card → modal. Jumping from level 0 to `--t-shadow-xl` reads as an error.
12. **Don't let the mono face escape its job.** Annotations, tags, code, numerals. Mono body copy signals "developer who has never worked with a designer."

**Motion**

13. **Don't animate layout properties.** No `width`, `height`, `top`, `left`, `margin`, or `boxShadow`. Cross-fade a pseudo-element for shadow; `scaleX` a 1px element for underlines.
14. **Don't hide content in CSS for JS to reveal.** Starting at `opacity: 0` in a stylesheet means a blank page for reduced-motion, no-JS, and failed-hydration users. Set the hidden state from GSAP inside the `no-preference` branch.
15. **Don't re-trigger scroll reveals.** `once: true`. Re-animating on scroll-back is the fastest way to make a portfolio feel cheap.
16. **Don't exceed three animated regions per viewport,** and don't use motion to cover slow loading. If a section needs animation to feel alive, the layout needs work instead.
17. **Don't use `--t-ease-spring` on anything large.** Overshoot on a full-width element reads as a bug. Micro-elements only, ≤8px of travel.

**Responsive**

18. **Don't let hover states change layout size.** Cards lift with `translateY` and change border color; they never grow. Media keeps `--t-ratio-card` so the grid can't reflow.
19. **Don't set form inputs below 16px.** iOS Safari auto-zooms, which is a broken-feeling contact form — the highest-stakes component on a client-facing site.
20. **Don't use `vw` units without `clamp()`.** Every fluid token here has explicit min and max bounds. Unbounded `vw` breaks at 320px and at 2560px.

---

**Implementation order I'd suggest:** paste Section 9, then Section 8, then build the section-label + hairline primitive and one project card. If those two elements feel right in both modes, the rest of the site is assembly.

I've settled on the final color value and contrast ratio, so now I'm putting together the complete spec across all ten sections while keeping it readable. I'm also weighing naming conventions for the custom property prefix, trying to find something that reads naturally rather than awkward.

I'm deciding between calling the system "Foundry" or "Ledger," landing on "Ledger" since it fits the technical, spec-sheet feel. For the token prefix, I'm settling on `--t-` since it's short, neutral, and avoids collision with Tailwind's own namespace, while still mapping cleanly from the brief's requested `--color-*` names.

Since the user explicitly asked for `--color-bg-primary` style names, I want to honor that directly while also explaining the Tailwind v4 constraint — presenting the plain-CSS version using their exact requested names, and noting the rename needed if building with Tailwind v4.

I'm settling on a single canonical raw token namespace using `--t-*`, with a clear note that the brief's `--color-*` names map directly to it, giving one source of truth that works standalone or with Tailwind. I'll use a 12-column grid and write the component tokens compactly but thoroughly, then move into GSAP recommendations — registering CustomEase to match the CSS easing curves, using quickTo for cursor tracking, sensible ScrollTrigger defaults, and SplitText for headlines, noting that GSAP 3.13+ made all plugins free after the Webflow acquisition, plus mentioning the useGSAP hook from @gsap/react for Next.js integration.

I'm also defining a motion budget of at most three animated regions per viewport with entrance animations firing once, and I'll tie the anti-patterns section back to the core skill. Now I'm drafting the Tailwind v3 config extending the theme with colors and font sizes that reference the CSS variables.

Since shadows vary per theme, I realize they need to go in the raw layer plus the inline theme mapping, similar to the pattern for other themed tokens. I'll make sure to include the hairline rule and "01 / WORK" label detail since that's the memorable visual touch, then write out the complete recipe.
