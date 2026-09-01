# Anti-Patterns — Canonical List

All design and engineering docs reference this file. Do not duplicate bans elsewhere.

## Visual

- Purple/violet gradients or neon accent colors
- Gradient backgrounds
- Drop shadows on content cards (nav shadow only)
- Border-radius above 8px on structural elements
- Card-in-card layouts
- Skills progress bars
- Logo walls without permission
- Stock photos or generic 3D hero scenes

## Copy & Voice

- "Passionate developer" and similar clichés
- Startup-bro energy
- Vague hero copy with no positioning statement

## Motion

- Custom cursor replacement
- Parallax backgrounds
- Page-load spinners or fake preloaders
- Typing effects on headlines
- Particle systems or WebGL hero scenes
- Lenis or smooth-scroll hijacking
- More than 3 approved motion moments per page
- SplitText on body copy or navigation
- Animating the LCP element (hero `h1`) with opacity 0 initial state

## Technical

- Off-palette hex codes or unauthorized fonts
- Tailwind v3 config syntax under v4 project
- Second animation library alongside GSAP
- Client-only rendering of above-the-fold content
- Dark mode toggle without SSR flash prevention

## Content

- Invented client names, metrics, or availability without `[PLACEHOLDER]` markers
- Case studies without at least one verifiable outcome
