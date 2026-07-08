# Wood Eye Clinic — Session Handoff

Condensed state of the redesign so a new session can continue without re-reading the full chat.

## Project
- **Wood Eye Clinic** — Next.js 15 (App Router) + Tailwind v4, TypeScript. Optometry site for Pontotoc, MS.
- **Branch:** `claude/wood-eye-hero-redesign-flgzys` → **PR #1** (open, base `main`). Commit + push every change here.
- **Verify loop:** `npm run build` → `npm start` on a port → Playwright screenshots launched with SwiftShader GPU flags
  (`--use-gl=angle --use-angle=swiftshader --enable-gpu-rasterization`) because the sandbox otherwise doesn't rasterize
  `backdrop-filter`. Google Maps tiles never load in-sandbox but work in real browsers.
- Screenshot tip: `html{scroll-behavior:auto}` and neutralize `.reveal-blur` (`filter:none;opacity:1;transform:none`) or
  scroll in steps + wait for reveals to settle, otherwise captures look blurry mid-animation.

## Assets (all in `/public`)
- Real photos from the client's Google Drive + chat, optimized to WebP with `sharp`:
  - `/img/doctors/{wood,maynard,warren}.webp`, `/img/staff/*.webp` (10 staff)
  - lifestyle: `hero.webp` (USA boutique team), `team-boutique.webp`, `exam.webp`, `eyewear-wall.webp`, `doctors-*.webp`
  - `site-bg.webp` (blurred fixed backdrop; source `scratchpad/dl/paste-1.jpg`)
- Logos: `logo.webp` (dark, header), `logo-light.webp` (white+blue, footer).
- Real bios/services confirmed against the client's Word doc — `lib/site.ts` content is accurate.

## Design system (`app/globals.css`)
- **Fixed backdrop:** `.site-bg` = blurred team photo, fixed behind everything, light darker scrim (~0.58–0.64), visible
  until the footer. Warm feel.
- **Glass classes:** `.glass-surface` (base ~0.64→0.46 fill, bright rim `::after`, sheen `::before`), `.glass-strong`
  (~0.92 opaque), `.glass-tint`, `.glass-liquid` (menu bar — very translucent, bent-glass bevel + shine + rim,
  `blur(28px) brightness(1.38)`), `.glass-pane` (translucent real glass for service cards), `.glass-chip`, `.glass-btn`,
  `.glass-dark`. `.text-readable` = light text-shadow halo (now only on small captions).
- **CRITICAL gotchas:**
  - Never add a manual `-webkit-backdrop-filter` line — the CSS minifier treats it as an alias and "last wins" DROPS the
    standard `backdrop-filter`, killing all blur. Keep only the standard property.
  - `filter` / `will-change` / `isolation:isolate` on an element EXCLUDES it from a sticky ancestor's backdrop blur (this
    is why the hero once didn't frost behind the header — fixed by removing `isolate`; reveals use `filter:none`, not
    `blur(0)`).

## Key components
- `Hero.tsx` — full-bleed (`id="hero"`, `-mt-[92px]` to sit behind header). Blurred photo backdrop + an **SVG pair of
  glasses whose two lenses show the sharp photo** while the rest is blurred ("see clearly"). White headline.
- `Header.tsx` — `.glass-liquid` pill nav with **dropdowns** (Services = all services w/ icons; About = doctors/team).
  **Scroll text color:** white over hero, dark once scrolled past (tracks `#hero` rect). Mobile accordion.
- `ServiceCard.tsx` + home Services section — **sticky stacked cards** (each pins, next scrolls over it), `.glass-pane`
  real translucent glass, NO colors.
- `Photo.tsx` — glass-framed image, blur→focus on scroll reveal (user loves this).
- `MapSection.tsx` — global, rendered before the footer on every page: large map + floating glass info card.
- `Reveal.tsx` — blur-to-clear scroll reveal (kept; user likes it).
- Team/doctors pages, About, `PageHero`, `CtaBand`, `Footer`, `BrandMarquee` — all use real photos + glass.

## Current visual state (latest commits)
- Backdrop made warmer/less-frosty, then **all text that sat on the bare backdrop was moved onto frosted glass panels**
  (home section intros, "See clearly again", About copy, `PageHero`, map header) for legibility.
- Net look: glass panels floating over a warm, softly-blurred team-photo backdrop; menu bar is Apple-style liquid glass
  with bent edges; service cards are stacked real-glass panels.

## User preferences learned
- Loves: blur-to-focus on scroll, the "glasses/see-clearly" concept, real translucent glass (not flat white), warm photo
  backdrop, stacked cards.
- Dislikes: faded/washed text on glass, plain white opaque cards, the old vision-slider (removed), colored cards.
- No em dashes anywhere on the site.

## Open items / possible next steps
- PR #1 not merged. **1 moderate Dependabot alert** on `main` (unrelated) still open.
- The glass-card CSS the user referenced earlier was never provided (only JSX) — matched with our glass instead.
- Not yet done: photos on the `/services` detail pages; optional rotating/second backdrop photo; optionally overlay the
  nav directly on the hero image.
