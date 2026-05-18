# PromptEdit Landing Page Redesign

This project is a front-end response to the hiring challenge for a design-focused front-end developer at `ContentCreator.com` / `PromptEdit`.

The challenge asked for a performant sales page redesign that could better sell the marketplace, improve clarity, and show stronger design and UX thinking for a creator-focused product.

## Project Goal

The goal of this redesign was not just to make the page look better, but to make the experience feel more intentional, more memorable, and easier to understand.

This concept rethinks the landing page as a guided story:

- first, it frames the pain of tool overload
- then, it positions PromptEdit as the cleaner alternative
- then, it expands the value of the broader ecosystem: AI tools, plugins, creator assets, pricing, proof, and FAQ
- finally, it closes with a stronger CTA and a more distinct visual identity

## Design Approach

The visual direction is inspired by a mix of:

- brutalist composition
- modern product marketing sites
- editorial pacing
- bold contrast and oversized typography

I intentionally moved away from a more generic SaaS layout and tried to give the page stronger personality through:

- high-contrast section backgrounds
- large typographic statements
- layered grids, panels, stripes, and geometric forms
- scroll-driven storytelling
- sharper visual segmentation between sections

I also used the brand colors from the PromptEdit logo as the core palette, then introduced a complementary accent to create stronger contrast, more vibrant surfaces, and a more recognizable rhythm across the page.

## UX Intent

This version simplifies the message and organizes the offer into a clearer progression.

A few important decisions:

- reduce cognitive load by clarifying the “too many tools vs one creator stack” message
- give each section a distinct role instead of repeating the same visual treatment
- make navigation more useful with direct section anchors and smooth scroll
- improve responsiveness and mobile behavior
- make the landing feel more like a premium product experience than a static promo page

## Notes On Scope

This version is intentionally a strong exploratory direction, not a final brand-perfect solution.

Some of the copy and structure are still necessarily generic because the strongest version of this experience would depend on tighter collaboration with the product owner and the broader team:

- to better understand product priorities
- to align more precisely with conversion strategy
- to adapt the storytelling to the real business goals
- to personalize the experience around the most important user segments

Because of that, I see this as a solid design and implementation foundation with room for deeper refinement.

## What Was Implemented

- Nuxt-based landing page implementation
- Tailwind-driven visual system
- semantic color tokens instead of direct color usage
- section-by-section visual differentiation
- GSAP-powered motion and scroll presentation
- improved mobile responsiveness
- smoother section navigation
- SEO metadata using native Nuxt head utilities
- console credit signature for authorship

## Tech Stack

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS
- GSAP

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Final Thoughts

I believe this is a meaningful improvement over a more conventional landing page approach because it introduces:

- stronger visual identity
- clearer story structure
- more deliberate pacing
- a more product-led feel

At the same time, I also think it can still be pushed further with more product context, tighter owner feedback, and deeper iteration around conversion, mobile behavior, and the long-term visual language of PromptEdit.

Developed by: Vicente Chiriguaya  
https://vicentechiriguaya.com
