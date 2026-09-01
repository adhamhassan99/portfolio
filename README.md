# Adham Abdelwahab — Portfolio

Senior full-stack engineer portfolio built with Next.js 16, Tailwind CSS v4 (Ledger design system), and Motion.

## Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io/) 9+

## Commands

```bash
# Install dependencies
pnpm install

# Development (Turbopack)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint

# E2E tests (requires build first)
pnpm build && pnpm test:e2e
```

## Project structure

- `app/` — Next.js App Router pages and global styles
- `components/` — UI primitives, layout, and homepage sections
- `lib/content/` — Static content from `docs/content-inventory.md`
- `lib/motion/` — Motion animation variants
- `design/claude-design/` — HTML design reference (source of truth for layout)
- `docs/` — Content inventory, Ledger spec, motion spec

## Deploy

Static export (`output: "export"`) — no secrets required; contact is email-only for v1.

### Cloudflare Pages

1. Connect this repo in the [Cloudflare Pages dashboard](https://dash.cloudflare.com/?to=/:account/pages).
2. Use these build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `pnpm install && pnpm build`
   - **Build output directory:** `out`
   - **Node.js version:** 20
3. Deploy.

### Vercel

Also works on [Vercel](https://vercel.com) with the default Next.js preset.

## Design system

Ledger tokens live in `app/globals.css` (`:root`/`.dark` raw layer + `@theme inline` Tailwind v4 mapping). See `docs/design-system/ledger-spec.md`.
