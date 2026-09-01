# Design Tokens — Index

**Canonical spec:** [`ledger-spec.md`](./ledger-spec.md) — the **Ledger** design system from [Design tokens research](a6b533cc-7e79-4b11-90f8-5d2bed5c141b).

This file previously held an interim rust/Instrument Sans token set. It is superseded by Ledger, which includes:

- **35 WCAG-verified color pairs** (computed OKLCH → sRGB, not estimated)
- **Technical editorial direction:** cool ink on warm paper (light), warm white on cool ink (dark), copper accent
- **Typography:** Newsreader (display, regular weight only), Schibsted Grotesk (body), IBM Plex Mono (annotations)
- **Signature detail:** numbered section labels (`01 / SELECTED WORK`) over hairline rules
- **Tailwind v4:** raw `--t-*` tokens in `:root`/`.dark`, mapped via `@theme inline` (required for dark mode)
- **Primary buttons:** ink solid (not copper fill) — copper reserved for links and live states

## Quick reference — semantic mapping

| Designer language | Raw token (`--t-*`) | Tailwind utility |
|---|---|---|
| Paper | `--t-bg-primary` | `bg-surface` |
| Ink text | `--t-text-primary` | `text-ink` |
| Copper link | `--t-accent` | `text-accent` |
| Hairline | `--t-line` | `border-line` |
| Section label | `--t-text-label` | `text-label` |
| Input border | `--t-line-strong` | `border-line-strong` |
| Focus ring | `--t-accent-ring` | `ring-accent` |

Full tables, component maps, `@theme inline` block, and v3 fallback config: see `ledger-spec.md` Sections 2–9.

## Implementation order (from Ledger spec)

1. Paste Section 9 (`:root`/`.dark`) into `app/globals.css`
2. Paste Section 8 (`@theme inline`) above component styles
3. Build section-label + hairline primitive and one project row
4. If those feel right in both modes, the rest is assembly
