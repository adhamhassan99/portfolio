# Saudi Real Estate Marketplace — gallery assets

`srem-1.webp` … `srem-5.webp` are the App Store preview images (460×997, ≈9:19.5) rendered by the
gallery on `/work/saudi-real-estate`.

## Adding or replacing slides

Slide order, `alt` text, and captions live in the `media` block of the `saudi-real-estate` entry in
`lib/content/projects.ts`. The gallery adapts to any slide count.

Two options per slide:

- **Store art** (current assets) — already contains its own device mockup and headline. Set
  `framed: false` and leave `caption` unset so the gallery doesn't draw a second phone or repeat
  the headline.
- **Raw screenshot** — a bare capture with no mockup. Leave `framed` unset: the gallery wraps it in
  a CSS iPhone frame with a Dynamic Island. Add `caption` (and optionally `highlight`, a substring
  rendered in the accent colour) to get the App Store-style headline above the frame.

Portrait `9:19.5` crops cleanly; other ratios still fill the card via `object-cover` but may lose
edges. Use WebP, PNG, or JPEG — SVG works too and bypasses image optimization automatically.

## Cover card

`media.cover` renders an optional first card with `title`, `subtitle`, and an `icon` path. The icon
is omitted today because no app-icon asset is available; drop one in this folder and point
`cover.icon` at it to bring it back.
