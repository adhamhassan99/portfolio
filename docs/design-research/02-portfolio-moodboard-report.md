# Portfolio Moodboard & Inspiration Report
### Indie developer / senior engineer sites that attract clients — researched Aug 2026

**Method note:** Every site below was loaded in a real browser at 1440×900 and its computed styles extracted from the DOM. Fonts, hex values, type scales, and animation libraries are measured, not estimated. Where my findings differ from published write-ups, it's because the sites have been redesigned since those articles — I've used what's live today.

---

## 1. Executive Summary

**Five patterns that win for senior-engineer client portfolios in 2026.**

**1. The type scale has gone flat — and the flatness *is* the flex.**
The most respected design-engineer sites have abandoned the giant hero headline entirely. On `samuelkraft.com` the `<h1>` computes to **14px, weight 500** — identical to body text. On `paco.me` it's **16px, weight 500**. On `emilkowal.ski` there is **no `<h1>` at all**. The name is treated as a label, not a billboard. This reads as confidence: someone who doesn't need to shout. Compare the client-acquisition sites, which still use display type (`srivvs.com` at 72px/700, `nkuek.dev` at 72px/300) — the split is almost perfectly along the line of "am I selling, or am I being known?"

**2. Warm off-white has replaced both pure white and dark mode as the credibility ground.**
Three independent sites converged on nearly the same background: `emilkowal.ski` and `samuelkraft.com` both at **#FDFDFC**, `rauno.me` at **#EDEDED**, `matvoyce.tv` at **#FFFEF8**, `nkuek.dev` at a warm `oklch(0.985 0.001 106.423)`. Paired with warm-neutral ink (**#21201C**, **#1B1B18**) rather than pure black. Dark-navy-with-teal now reads as a template; warm paper reads as editorial.

**3. Two text colors, one accent, and the accent is almost never used.**
`leerob.com` uses exactly **two** text colors (#282828, #676767) and **zero** accent. `emilkowal.ski`: two (#21201C, #63635E). `samuelkraft.com`: two (#1B1B18, #706F6C). `paco.me`: two (#3A3A3A, #000). Where an accent exists it's rationed to a handful of elements — Brittany Chiang's teal #5EEAD4 appeared on only **2 elements** out of ~210 text nodes I sampled. Restraint in color is doing the same work as restraint in motion.

**4. Conversion comes from information architecture, not visual design.**
The single most hireable site in the sample (`srivvs.com`) is not the best-looking one. It wins on structure: services *with explicit disqualifiers*, anonymised case studies with real metrics, a four-phase process, an ICP statement, a stack list annotated with years-in-production, an FAQ, and a response-time promise. Its section headings are conversational and pre-counted — "Six things I do well, and a few I don't", "Three projects I'm happy to talk about", "Four phases, no surprises", "Things people ask before they hit reply". Nothing about that requires animation.

**5. One memorable detail beats a memorable site.**
The distinctive sites each have exactly one thing you'd describe to a colleague. Rauno's is the **sentence-as-hero** — his `<h1>` is a running sentence with links inline ("Rauno Freiberg is an Estonian interaction designer working with Vercel and Devouring Details"), followed by a litany: "Make it fast. Make it beautiful. Make it consistent. Make it carefully. Make it timeless. Make it soulful. Make it." Brittany's is a **600px cursor-following spotlight**. Nick Kuek's is an **"In the Wild" section** cataloguing micro-interactions he shipped into production. None of these is a whole design language — each is a single idea.

**The gap in the market:** nothing in my sample scores highly on all three axes simultaneously. `srivvs.com` converts but looks like a well-executed template. `rauno.me` is unforgettable but has no path to an inquiry. That intersection — distinctive, hireable, restrained — is unoccupied, and it's precisely where this brief points.

---

## 2. Anti-Patterns to Avoid

**The Brittany Chiang clone.** Her v4 repo shows **8,266 stars and 4,227 forks** — the most-forked developer portfolio on GitHub, and her README explicitly asks people to stop passing it off as their own. Navy `#0A192F` + mint `#64FFDA` + sticky left column + numbered section headings is no longer a design choice, it's a recognisable fork. Any enterprise buyer who has screened developers has seen it fifty times.

**"Hi, I'm [Name] 👋 — Full-Stack Developer."** Waves, gradient-text names, and job-title-as-tagline. Compare `srivvs.com`'s hero: *"Java engineer who ships AI products fast."* One is an introduction; the other is a claim someone can buy.

**Project grids with no outcome.** A wall of cards showing a Spotify clone, a weather app, and a Todo MVC. Clients don't buy technologies, they buy resolved situations. The case-study structure that actually converts is situation → complication → approach → measurable result, and the result section should be the longest.

**Skill bars and percentage proficiency.** "React ████████░░ 80%" is unfalsifiable and reads as junior. `nkuek.dev` handles skills better by annotating each one in mono like a code comment — `React // the foundation`, `CSS // where the craft lives`. `srivvs.com` handles it better still by listing *years shipped in production* and stating "the years number is how long I've shipped it in production, not how long I've read about it."

**Decorative WebGL.** A rotating 3D blob unrelated to any client problem costs load time and signals "I found a tutorial." WebGL earns its place only when the craft *is* the product being sold — which is true for `matvoyce.tv` (a motion designer) and defensible for `nkuek.dev` (a design engineer whose shaders are the portfolio), and true for almost no backend or platform consultant.

**Fade-up-on-scroll applied to every element.** When everything animates, the animation carries no information and the page feels slow and unresponsive to fast scrollers. Reveal budget should be spent on section entrances, not paragraphs.

**Missing commercial signals.** No availability status, no indication of engagement size or shape, no process, no response-time expectation, and a contact form that goes into the void. `srivvs.com` closes with "I reply within 24 hours, usually same day in UK hours" — that single sentence removes more friction than any animation.

**No disqualifier.** Sites that claim to do everything read as desperate. Stating who you're *not* for ("This isn't a fit for pre-revenue startups or engagements under $X") is the strongest trust signal a solo operator has, and almost nobody does it.

**Autoplaying audio or forced smooth-scroll hijacking.** Interface sounds and Lenis-driven scroll inertia delight a design audience and irritate a CTO evaluating you on a laptop in a meeting.

---

## 3. Moodboard — Profiled Sites

### Scores at a glance

| Site | Tier | Distinctiveness | Hireability | Animation restraint |
|---|---|---|---|---|
| srivvs.com | Direct | 3 | **5** | 4 |
| brittanychiang.com | Direct | 3 | 4 | **5** |
| nkuek.dev | Aspirational | **5** | 4 | 2 |
| emilkowal.ski | Adjacent | 4 | 3 | **5** |
| rauno.me | Aspirational | **5** | 2 | **5** |
| leerob.com | Adjacent | 3 | 3 | **5** |
| samuelkraft.com | Adjacent | 3 | 3 | **5** |
| paco.me | Adjacent | 3 | 3 | **5** |
| joshwcomeau.com | Adjacent | **5** | 3 | 2 |
| matvoyce.tv | Aspirational | **5** | 3 | 1 |

*Animation restraint: 5 = perfect subtlety, 1 = maximal motion. Hireability is scored against **this brief** — an enterprise/SaaS client buyer — so a motion artist's site scores low even though it's superbly effective for its own audience.*

---

### srivvs.com — *the conversion blueprint*
**Positioning:** Capability-led, unambiguously commercial. "Independent Technology Studio."
**Visual register:** Technical, dark, corporate-adjacent.
**Typography:** Geist (sans) paired with Playfair Display (editorial serif accent). H1 at **72px / weight 700 / −1.8px tracking**: *"Java engineer who ships AI products fast."*
**Color:** Dark ground, high-contrast light text, minimal chroma.
**Layout:** Hero claim → "Independent, hands-on, accountable" (no agency layers, no junior handoffs) → services **with anti-services** → three case studies, anonymised but with real architecture decisions and metrics → four-phase process → ICP → annotated stack → essays → FAQ → closing CTA.
**Motion:** Minimal. A ⌘K command palette is present — a technical wink that costs nothing visually.
**Memorable vs generic:** The *copy* is memorable, the visuals aren't. Section headings pre-count their contents and sound like speech. The offer of "one paid week — I read your code, talk to your team, and write a brief that says what we're building, what we're not, and why" is a productised entry point most consultants never articulate.
**Hireability signals:** Services, disqualifiers, 14 case studies, process, pricing posture, FAQ, "Book a 30-min call", 24-hour response promise. Essentially every signal available.

### brittanychiang.com — *the restrained technical standard*
**Positioning:** Capability-led, credibility-first (employment-oriented rather than client-oriented).
**Visual register:** Dark technical, minimal.
**Typography:** Inter throughout, single family. H1 **48px / 700 / −1.2px**. Body 16px. Section labels set in small uppercase.
**Color:** Ground `#0F172A` (slate-900), body `#94A3B8`, headings `#E2E8F0`, accent `#5EEAD4` — the accent appears on **2 of ~210** sampled text nodes.
**Layout:** Two-column. Sticky `<header>` at **48% width** holding name, title, tagline, section nav and socials; the right column scrolls through About → Experience → Projects → Writing. Experience is the hero, not a project grid — job title, company, dates, impact summary, tech tags.
**Motion:** A `pointer-events-none` layer at z-30 painting `radial-gradient(600px at [cursor], rgba(29,78,216,0.15), transparent 80%)` with a 300ms transition — a soft blue spotlight tracking the mouse. Plus card hover lift, nav indicator width transition, and scroll-spy. **No animation library loaded at all** — this is CSS transitions and a few lines of JS.
**Memorable vs generic:** The spotlight is the one detail. Unfortunately the rest has been forked into ubiquity.
**Hireability:** Deep experience timeline, named employers (Apple, Klaviyo, Upstatement), named client work. But no services, no testimonials, no CTA — it converts recruiters, not clients.

### nkuek.dev — *craft as the argument*
**Positioning:** Brand-led, craft-maximal.
**Visual register:** Editorial-technical hybrid, light.
**Typography:** Three families — Poppins (sans), Source Code Pro (mono), Libre Baskerville (serif). H1 **72px / weight 300 / −2.16px** — large and *thin*, which reads editorial rather than shouty.
**Color:** Warm near-white ground, greys `#525252` / `#737373`, accent `#2D7D9A` (muted teal-blue).
**Layout:** Hero → Projects → **"In the Wild"** → "Crafting with…" → CTA "Let's build something beautiful."
**Motion:** Two `<canvas>` elements, WebGPU compute shaders, React Three Fiber, GSAP-choreographed transitions. Heavy — but the motion *is* the deliverable being sold.
**Memorable vs generic:** Two ideas worth stealing. **"In the Wild"** catalogues micro-interactions shipped into production — a scroll-driven video dissolve, a 404 page with a sliding-puzzle easter egg, a fluid simulation inside a button. It reframes small craft as portfolio-worthy evidence. And the nav contains **live tools** — Easing Curator, Shader Playground, Keyframe Sequencer — so the proof is playable, not screenshotted.
**Hireability:** High for design-engineering work, lower for enterprise platform work.

### emilkowal.ski — *the confidence of no headline*
**Positioning:** Brand-led, product-led (sells an animation course).
**Typography:** One sans family, 16px body. **No `<h1>` element exists on the page.**
**Color:** Ground `#FDFDFC`, ink `#21201C`, muted `#63635E`. Two text colors, no accent.
**Layout:** A slim announcement banner at the very top ("Enrollment for my animation course is open! 10 days left") → a "Today" paragraph → Projects → Writing → Newsletter → More. Every list item is title + one-line description, nothing more.
**Motion:** Extremely subtle — appropriate, given he wrote *"You Don't Need Animations"* and teaches at animations.dev.
**Memorable vs generic:** The refusal to have a hero. The persistent top banner is a quietly effective conversion device that doesn't interrupt anything.

### rauno.me — *the sentence-as-hero*
**Positioning:** Brand-led, pure craft.
**Typography:** A single custom face. H1 **32px / weight 500 / normal tracking**.
**Color:** Ground `#EDEDED` — a warm grey, deliberately not white. Ink `#171717` and `#000`. No accent.
**Layout:** The H1 *is* the bio, a running sentence with links woven in. Beneath it, "History of Software Design", Projects, and the manifesto: *"Make it fast. Make it beautiful. Make it consistent. Make it carefully. Make it timeless. Make it soulful. Make it."*
**Motion:** Interaction micro-details, no heavy libraries.
**Memorable vs generic:** The most distinctive site in the sample, achieved with zero visual effects. Personality is carried entirely by sentence construction and rhythm.
**Hireability:** Lowest in the sample — no services, no CTA, no case studies. Pure reputation play, which works when you're staff at Vercel and won't work for a consultant.

### leerob.com — *authority via typography*
**Positioning:** Brand-led through writing and authority.
**Typography:** **Iowan Old Style** — a *system* serif, no webfont downloaded. Body **17px**. H1 **42.4px / 600 / −0.848px**, and the H1 is simply `@leerob`.
**Color:** Pure white, `#282828` ink, `#676767` muted. Two colors, no accent, no borders beyond hairlines.
**Layout:** Single narrow column. Bio with a **Default / Long toggle**. Notes and Blogs as year-stamped lists.
**Motion:** None detected.
**Memorable vs generic:** Serif-on-white for an ML engineer is itself the differentiator — it signals writer before coder. The bio-length toggle is a small, genuinely original idea.
**Hireability:** Advisory positioning stated in prose with an email address inline. No case studies — authority substitutes for proof.

### samuelkraft.com — *radical smallness*
**Typography:** Inter. **Body 14px, H1 14px / weight 500.** Completely flat scale.
**Color:** `#FDFDFC` ground, `#1B1B18` ink, `#706F6C` muted — the same warm palette as emilkowal.ski.
**Layout:** Bio paragraph → Projects → Posts. Projects are named for the products and employers they belong to (Glaze by Raycast, Raycast Focus, Bitrefill, Tracklib), which does more credibility work than any thumbnail.
**Memorable vs generic:** Leans generic on its own, but the smallness-as-confidence move is worth understanding.

### paco.me — *thesis in two words*
**Typography:** Söhne + Inter. H1 **16px / 500**, body 16px — flat again.
**Color:** White, `#3A3A3A` and `#000`. Two colors.
**Layout:** Opens *"Crafting interfaces."* then Building / Projects / Writing / **Now** / Connect.
**Memorable vs generic:** The two-word opening thesis, and the "Now" section as a liveness signal.

### joshwcomeau.com — *the instructive opposite*
**Typography:** Wotfard (custom sans) + Cartograph CF (mono).
**Color:** A full named token system — `--color-primary: #4242FA` (electric indigo), `--color-secondary: #E60067` (hot pink), `--color-decorative: #63BCE9`, text `#0A0C10`. The existence of a token literally named *decorative* tells you the whole philosophy.
**Layout:** A content hub — Articles & Tutorials, Browse by Category, Popular, Interactive Courses.
**Motion:** Spring physics, embedded interactive demos, easter eggs.
**Why it's here:** It's the cautionary boundary. Maximum personality, and it works beautifully for an educator selling courses to developers. Aimed at a VP of Engineering evaluating a contractor, the same choices would read as unserious. Steal the **token architecture**, not the palette.

### matvoyce.tv — *the ceiling, and why not to go there*
**Positioning:** Brand-led, motion-first. Awwwards Site of the Day (Jan 2025), GSAP Site of the Year 2025 nominee.
**Typography:** F37 Judge and F37 Judge Extended — a display serif in two widths, no body face to speak of.
**Color:** `#FFFEF8` warm cream ground.
**Motion:** **Lenis** smooth scroll confirmed loaded, plus a GSAP motion system and a `<canvas>`. The DOM reveals every menu letter duplicated (`W W O O R R K K`) — the signature of a character-level roll/flip built with SplitText, where each glyph holds two copies that swap on hover.
**Layout:** Statement hero — *"Type designer & animator, working for brands globally. UK based / Working globally"* — with a full-screen kinetic menu overlay, closing on *"Always open for new projects and collaborations."*
**Why it's here:** It defines the upper bound of motion craft, and the duplicated-glyph technique is genuinely stealable at a fraction of the intensity. The availability line is a good pattern at any register.

---

## 4. Visual Pattern Library

### Hero layouts

**The sentence hero** *(rauno.me)* — The H1 is a complete grammatical sentence, 28–36px, weight 500, with 3–5 inline links to employers, projects, and collaborators. It replaces headline + subhead + bio with a single object and is the highest distinctiveness-per-byte device found in this research. It works because the links let a reader self-serve credibility without a logo wall.

**The claim hero** *(srivvs.com)* — 64–72px, weight 700, tight negative tracking around −1.8px, two lines, containing a role, an outcome, and a qualifier: *"Java engineer who ships AI products fast."* Directly beneath it, a trust line ("Independent, hands-on, accountable") and a primary CTA. This is the highest-converting shape and the least distinctive.

**The label hero** *(samuelkraft.com, paco.me, emilkowal.ski)* — Name set at body size, weight 500, followed immediately by a 2–4 sentence bio. No display type anywhere on the page. Reads as quiet seniority; risks invisibility without a compensating detail elsewhere.

**The split-static hero** *(brittanychiang.com)* — A sticky left column at ~48% viewport width carrying identity, nav, and socials permanently on screen, while the right column scrolls content. Excellent for keeping a CTA and section nav persistently available; now heavily forked, so it needs re-skinning to escape the association.

### Project & case study cards

**The row, not the grid.** The credible sites present work as full-width horizontal rows — date or client on the left, title and one-line outcome centre, tech tags right — rather than as a masonry of screenshots. Rows scan faster, hold more text, and don't demand pretty thumbnails for NDA'd work.

**Employer-named projects** *(samuelkraft.com)* — Titling entries "Glaze by Raycast" rather than "Project 03" transfers brand credibility for free.

**Anonymised case studies with real internals** *(srivvs.com)* — Explicitly stating "names and exact numbers are anonymised because most of these clients sign NDAs, but the architecture decisions, trade-offs and metrics are real," then offering to walk through production code on a call. This converts an NDA constraint into a trust signal.

**The micro-interaction catalogue** *(nkuek.dev "In the Wild")* — A section of small shipped details, each with a one-sentence description of the problem it solved. Ideal for a senior engineer whose best work is invisible infrastructure: it gives you portfolio units when you can't show screenshots.

### Navigation

**Uppercase section labels with an animated indicator** *(brittanychiang.com)* — Small-caps, wide tracking, a short rule that grows on hover and on scroll-spy. Cheap, legible, sturdy.

**No nav at all** *(leerob.com, samuelkraft.com, paco.me)* — Single-column pages where H2s do the wayfinding. Viable only under roughly two screens of content.

**Tools as nav items** *(nkuek.dev)* — Interactive artifacts promoted into the navigation. Strong proof-of-skill device; only worth it if the tool is genuinely useful.

**⌘K command palette** *(srivvs.com)* — Invisible until invoked, instantly legible to a technical audience. High signal, near-zero visual cost.

### Footer & CTA

**The read-this-far close** *(srivvs.com)* — *"If you've read this far, we should probably talk"*, followed by what happens next ("a 30-minute call, I'll ask you four questions, you'll know within ten minutes whether I'm the right fit"), and a response-time promise. It rewards attention and removes ambiguity in three sentences.

**The availability line** *(matvoyce.tv)* — *"Always open for new projects and collaborations."* One sentence answering the question every visiting buyer has.

**The persistent banner** *(emilkowal.ski)* — A slim top-of-page strip carrying the current offer with urgency. Survives scroll position and doesn't interrupt.

### Animation recipes

**Cursor spotlight** *(brittanychiang.com, verified in CSS)* — A fixed, `pointer-events-none` layer at high z-index painting `radial-gradient(600px at [mouseX] [mouseY], rgba(29,78,216,0.15), transparent 80%)`, with a 300ms transition to smooth the tracking. Requires no library. The 15% alpha is the reason it reads as atmosphere rather than gimmick.

**Character-level glyph roll** *(matvoyce.tv, verified in DOM)* — Each letter wrapped with two stacked copies inside an `overflow: hidden` box; on hover the pair translates vertically by 100% with a per-character stagger of 15–25ms. Reserve for a single nav or one link — applied broadly it becomes noise.

**Line-by-line clip reveal** — GSAP SplitText by line, each line masked and translated up from ~0.6em with `stagger: 0.08` and `power3.out` over ~700ms, fired once on load. The standard editorial entrance; the discipline is firing it once rather than on every scroll pass.

**Hairline draw** — Section rules and card underlines animating `scaleX` from 0 to 1 with `transform-origin: left` over ~400ms on ScrollTrigger enter. Nearly free, and it makes a restrained layout feel authored.

**Spring hover on rows** — Transform-only lift of 2–4px plus a border-color shift, on a spring rather than a linear ease. Animating only `transform` and `opacity` keeps it on the GPU.

**Reduced motion as a parallel design.** The Codrops write-ups from practitioners converge on this: `prefers-reduced-motion` should deliver a real, designed, degraded version that conveys the same intent — not a blanket disable. Worth building in from the start rather than retrofitting.

---

## 5. Recommended Direction

### The strategic move

Take **srivvs.com's information architecture** — the thing that actually converts — and dress it in **emilkowal.ski / rauno.me's visual restraint** — the thing that signals taste. Then add **one** nkuek-grade craft artifact as the memorable detail. Nobody in the sample is doing this combination, and it resolves the memorability × hireability tension directly: the *structure* carries hireability, the *restraint* carries credibility, and a single artifact carries memorability. None of the three has to compromise the others.

### Tone adjectives
**Quiet · Exact · Warm-technical · Unhurried · Candid**

"Candid" is doing specific work: the disqualifier ("here's who I'm not for"), the honest stack list, and the response-time promise are the differentiators available to a solo operator that an agency structurally cannot match.

### Typography direction

A **two-family system with a near-flat scale and exactly one display moment.**

- **Primary sans:** a neutral grotesque with a real Display cut — Geist, ABC Diatype, or Söhne. Used at **16–17px** for body with generous leading around 1.6.
- **Mono:** Berkeley Mono, Commit Mono, or Geist Mono. Reserved strictly for *metadata* — dates, tech tags, client labels, section numbers, code. Never for body copy. This is where the "technical" register lives, and rationing it is what keeps it from feeling like a terminal theme.
- **Scale:** H2 and H3 sit at 18–20px, barely above body, following the samuelkraft/paco principle. The page has **one** display moment — the hero, at 56–64px, weight 500–600, tracking around −2%. One display moment reads as editorial; three read as a landing page template.
- **Optional third:** an editorial serif for pull-quotes and testimonials *only*, following srivvs.com's Playfair pairing. Include it only if you'll have real testimonials.

Set the hero at **weight 500, not 700**. Nick Kuek's 72px/300 demonstrates that large-and-light reads considered where large-and-bold reads salesy.

### Color direction

**Warm off-white ground, warm-neutral ink, one rationed signal color.**

- Ground `#FDFDFC` · Elevated surface `#F7F7F5` · Hairline `#E8E8E4`
- Ink `#1B1B18` · Muted `#706F6C` · Faint `#A1A09A`
- **Accent: a desaturated ochre or deep amber** (something around `#B4622A`–`#C4711F`), or an ink-blue if warmth feels wrong.

Two arguments for warm-neutral over dark navy. First, `#0F172A` + `#5EEAD4` is now the single most-forked look in developer portfolios and will read as "cloned the popular one" to anyone who has screened engineers. Second, warm paper is the register of consultancies and editorial publications — exactly the credibility association this brief needs.

**Discipline rule: the accent appears fewer than ten times on the page.** Brittany Chiang's teal hit 2 of ~210 text nodes. Reserve it for the primary CTA, the availability dot, link underlines on hover, and nothing else. A dark mode is optional and should be a warm near-black (`#191918`), never navy.

### Layout architecture

Single column, roughly 640–720px measure, left-aligned, with full-bleed hairline rules separating sections. Sections in this order:

1. **Sentence hero.** Your bio as a running sentence with inline links to employers and named clients — rauno.me's structure carrying srivvs.com's claim. Beneath it, an availability line with a small live status dot and a single primary CTA.
2. **Trust strip.** Client or employer wordmarks in muted grey at ~40% opacity, or a single line of named companies if logos aren't cleared.
3. **Selected work — three case studies, not nine.** Full-width rows. Each opens with the *outcome* in the first line, then situation → complication → approach → result. Anonymise where NDAs require it and say so explicitly.
4. **How I work.** Your process in three or four named phases. This is where enterprise buyers de-risk you, and it's the section solo engineers most often omit.
5. **What I do — and what I don't.** Services with an explicit disqualifier paragraph. The highest-leverage section on the page.
6. **Stack, annotated.** Each technology with years shipped in production, in mono. No proficiency bars.
7. **Writing.** Three or four pieces, year-stamped. Evidence of thinking, which is what senior buyers are actually purchasing.
8. **The craft artifact.** One interactive thing. See below.
9. **FAQ.** Five or six real pre-sales objections, answered plainly — pricing posture, timezone, availability, engagement shape, what happens if it goes wrong.
10. **Close.** Read-this-far CTA, what the first call looks like, response-time promise, direct email address.

### Three memorable details to steal

**1. The sentence hero with inline credibility** *(adapted from rauno.me)*. Replace the headline/subhead/bio stack with one sentence where employers, clients, and projects are links. Distinctive, self-serving on proof, and costs nothing to render. Extend it with rauno's litany device — a short rhythmic list of working principles, three to five lines, each a fragment. It's the cheapest personality in web design and it's pure copywriting.

**2. "In the Wild" — a shipped-details catalogue** *(adapted from nkuek.dev)*. Six to eight small things you've shipped that nobody would put in a case study: a migration that took zero downtime, a build reduced from eleven minutes to ninety seconds, an error boundary that changed a support queue. One line each, mono metadata. This is the answer to "my best work is backend and I have no screenshots," and I saw no consultant site doing it.

**3. The honest disqualifier** *(adapted from srivvs.com)*. A short, plainly-set paragraph naming who you're not for. Set it in the editorial serif, slightly larger than body, as a deliberate typographic pause in the page. It's simultaneously the strongest trust device and a distinctive layout moment.

### Three animation moments

Total motion budget: **three moments, nothing else animates.** Everything below animates only `transform` and `opacity`, and ships a designed reduced-motion variant.

**1. Hero line reveal — once, on load.**
GSAP SplitText splitting the hero sentence by **line** (not character — character-level here would read as flashy). Each line masked in an `overflow: hidden` wrapper, translating up from `0.6em` with `opacity` 0→1. `stagger: 0.08`, `ease: "power3.out"`, `duration: 0.7`. The inline links fade their underlines in 200ms *after* the line settles, so the credibility reads as a second beat. Fires once per session, never on scroll return.
*Reduced motion:* opacity-only fade at 300ms, no translation.

**2. Case study row hover — the informational reveal.**
On row hover, a GSAP timeline: the hairline beneath the row draws `scaleX` 0→1 from the left over 400ms `power2.out`; the mono metadata (year, client, stack) slides in from `x: -8px` with a 40ms stagger; the row lifts 2px on a spring. The point is that hovering *reveals information* rather than decorating — it rewards the cursor with content, which is a craft signal a technical buyer will register.
*Reduced motion:* metadata appears instantly, hairline still draws (a 400ms scaleX is vestibularly harmless).

**3. Section entrance — the hairline and the sticky label.**
ScrollTrigger fires each section's rule to draw `scaleX` 0→1 over 500ms as it enters at 85% viewport, while the section label sets in mono in the left margin and stays pinned through the section, cross-fading to the next label on exit. Where you have metrics, numerals count up once over 900ms with `ease: "power1.out"`.
*Reduced motion:* rules appear at full width, labels swap without cross-fade, numerals render final values.

**Explicitly excluded:** smooth-scroll hijacking (Lenis), page transition overlays, WebGL, interface sounds, custom cursors, magnetic buttons, per-element scroll fades. Every one of these appears in the aspirational tier and every one of them reduces hireability for an enterprise buyer.

---

## 6. Reference URLs

**Profiled in-browser (design tokens extracted):**
- https://srivvs.com — Sri Vardhan, independent technology studio
- https://brittanychiang.com — Brittany Chiang, senior frontend engineer, Klaviyo
- https://nkuek.dev — Nick Kuek, design engineer
- https://emilkowal.ski — Emil Kowalski, Linear web team
- https://rauno.me — Rauno Freiberg, staff design engineer, Vercel
- https://leerob.com — Lee Robinson, ML at SpaceX, ex-Vercel
- https://samuelkraft.com — Samuel Kraft, design engineer, Raycast
- https://paco.me — Paco Coursey, webmaster at Linear
- https://www.joshwcomeau.com — Josh W. Comeau, educator
- https://matvoyce.tv — Mat Voyce, type designer & animator (Awwwards SOTD)

**Additional candidates surfaced during research:**
- https://www.aaezekiel.co — Ezekiel Adewumi, product engineer (personal-OS / feed layout)
- https://sammii.dev — Sammii Kellow, AI product engineer (terminal-portfolio via npx)
- https://v4.brittanychiang.com — the archived v4, 8,266★ / 4,227 forks
- https://uncommonstudio.com.au — Uncommon Studio (Awwwards SOTD + Developer Award)

**Technique and methodology sources:**
- https://tympanus.net/codrops/2026/05/06/from-shader-uniforms-to-clip-path-wipes-how-gsap-drives-my-portfolio/ — GSAP-driven portfolio architecture; reduced motion as parallel design
- https://tympanus.net/codrops/2026/07/15/the-architecture-behind-trionn-coordinating-gsap-three-js-lenis-and-web-audio/ — GSAP + ScrollTrigger + SplitText system design, `useGSAP` cleanup
- https://www.hontran.dev/blog/mat-voyce-case-study-award-winning-portfolio — build breakdown of the kinetic-typography portfolio
- https://github.com/educlopez/design-bites/blob/main/design-mds/leerob.io/DESIGN.md — prior teardown of leerob.io *(note: describes an earlier STIX Two Text revision; the live site now uses Iowan Old Style)*
- https://onepagelove.com/brittany-chiang — typeface and technique listing
- https://soloclientstack.com/consultant-website-copywriting — consultant homepage structure, the "who it's NOT for" section, CTA architecture
- https://www.verlua.com/blog/website-case-study-examples — case-study structure for conversion
- https://stratcommunications.com/how-to-write-a-case-study-that-actually-converts/ — situation/complication/solution/results framework
