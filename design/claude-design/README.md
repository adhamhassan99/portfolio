# Claude Design HTML Exports

Place Claude Design HTML exports here before implementation.

## Expected files

| File | Maps to route |
|---|---|
| `index.html` (or `homepage.html`) | `/` |
| `case-study-ai-studio.html` | `/work/ai-studio` |
| `case-study-saudi-real-estate.html` | `/work/saudi-real-estate` |
| `case-study-flowlens.html` | `/work/flowlens` |
| `404.html` | `/not-found` |

Include any shared CSS, fonts, or asset folders alongside the HTML.

## Implementation reference

The build executor reads these as **visual source of truth** alongside:

- `docs/content-inventory.md` — copy
- `docs/design-system/ledger-spec.md` — tokens
- `docs/claude-design-motion-spec.md` — Motion micro-interactions
