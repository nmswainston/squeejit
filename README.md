# Squeejit product page

Single-product marketing site for Squeejit, an all-in-one trailside windshield
cleaner: a bottle of cleaner with a scrubber pad and squeegee bonded to the
body, made for clearing mud off an offroad windshield without a bucket, a hose
or a towel.

**Status: structure and styling complete, awaiting real content.** All copy,
photography, pricing and reviews on the page are placeholders. See
[Before launch](#before-launch) for the sign-off list.

## Stack

| | |
|---|---|
| Framework | [Astro](https://astro.build) 7, static output, near-zero client JS |
| Styling | [Tailwind CSS](https://tailwindcss.com) 4, via the Vite plugin |
| Fonts | Barlow Condensed (display) + Inter (body), from Google Fonts |
| Interactivity | ~60 lines of vanilla JS across three small inline scripts |

No React, no client framework. The whole page ships as static HTML plus one
small CSS file, which keeps it fast on the phone-over-cell-signal traffic a
product like this actually gets.

## Commands

```sh
npm install
npm run dev       # dev server at localhost:4321
npm run build     # static output to dist/
npm run preview   # serve the production build locally
npm run check     # Astro + TypeScript diagnostics
```

## Project structure

```
src/
├── data/product.ts        # ALL page copy lives here, except the menu
├── data/nav.ts            # the menu (its own file so a menu change is easy to spot)
├── styles/global.css      # design tokens (colors, fonts, textures)
├── layouts/BaseLayout.astro
├── pages/index.astro      # section order
├── components/            # Nav, Footer, buttons, icons, image slots
└── sections/              # the 12 page sections, one file each
```

Two files carry almost all the intent:

- **`src/data/product.ts`**: every headline, paragraph, spec, price and FAQ
  answer. Editing wording never means touching markup.
- **`src/styles/global.css`**: the `@theme` block at the top defines the
  entire palette and type scale. Change the brand blue there and it updates
  everywhere; nothing else in the codebase hardcodes a color.

## Page layout

A long-scroll narrative, which is the pattern that converts for a single SKU.
One page, one product, the CTA repeated at intervals rather than a catalog:

1. **Hero**: headline, price-free CTA, trust markers
2. **Problem**: the mud-blind windshield
3. **How it works**: Squirt / Scrub / Squeegee *(the key section)*
4. **Anatomy**: annotated product callouts
5. **Features**: six benefit tiles
6. **Demo**: before/after comparison slider
7. **Built for**: vehicle types
8. **Specs**: dimensions and materials
9. **Reviews**: social proof
10. **Buy**: three bundle options
11. **FAQ**: objection handling
12. **Final CTA**: closing band

A sticky buy bar slides up on mobile once the hero scrolls past, and tucks
itself away over the buy section so two CTAs never compete.

## Design direction

Gunmetal base (not pure black, since it reads flat on phones), the blue from the
bottle label as the primary accent, hazard orange as a sparing secondary.
Condensed uppercase display type, angled section edges instead of flat
horizontal breaks, faint topographic contour texture. The reference points are
Yeti and RZR, not soft DTC minimalism.

## Photography needed

Every image on the page is currently a labeled placeholder describing the shot
that belongs there. Run `npm run dev` and scroll to see them all in context.
The page's quality is gated on this more than on anything in the code:

| Shot | Notes |
|---|---|
| Hero | Bottle in a gloved hand, mid-squeegee, clean stripe through a muddy windshield. Vertical crop. |
| Problem | A windshield caked opaque, shot from the driver's seat. |
| Steps 1 to 3 | Squirt / scrub / squeegee. Same rig, same light, so they read as a sequence. |
| Product cutout | Bottle on transparent or seamless background, scrubber and squeegee edge visible. Needs to be sharp. |
| Before / after | Identical framing on a locked tripod. The comparison slider breaks without it. |
| Scale | Bottle beside a common object, or in a UTV door pocket. |
| Social card | 1200x630 at `public/images/og.jpg`. |

## Before launch

- [ ] Replace all placeholder copy in `src/data/product.ts`
- [ ] Supply photography (table above) and drop files in `public/images/`
- [ ] **Replace the placeholder reviews with real, attributable ones**. Invented
      testimonials are an FTC problem, not just a credibility one
- [ ] Confirm pricing, SKUs and the shipping/returns terms
- [ ] Measure a production unit and confirm every spec figure
- [ ] Answer the freeze-point FAQ (currently marked TODO)
- [ ] Connect checkout (see below)
- [ ] Set the real domain in `astro.config.mjs` (`site`)
- [ ] Add real favicon and OG image
- [ ] Write and link Privacy, Terms, and Shipping & Returns pages

Every open item is also marked with a `TODO(client)` or `TODO(commerce)`
comment at the relevant spot in the code:

```sh
grep -rn "TODO(" src/
```

## Checkout

Not connected. The buy buttons in `src/sections/Buy.astro` are deliberately
rendered `disabled` with a "checkout not yet connected" note, so the page can
be shared for review without anyone mistaking it for a live store.

When the client picks a platform:

- **Shopify**: swap each button for a buy-button embed keyed to the variant ID
- **Stripe**: make each an `<a>` pointing at a payment link

The structured data in `src/pages/index.astro` deliberately omits `offers` and
`aggregateRating` until pricing is final and reviews are real; publishing either
early puts unverified claims into search results.

## Accessibility and performance notes

- Semantic landmarks, a skip link, and visible focus rings throughout
- The before/after slider is a real `<input type="range">`, so it works with a
  keyboard and with touch for free
- The FAQ uses native `<details>`, so no JS, and it works before hydration
- Reveal-on-scroll is progressive enhancement; content is visible if JS fails
- `prefers-reduced-motion` disables all animation and smooth scrolling
