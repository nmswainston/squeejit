# Image assets

Drop production photography here, then point the matching `<ImageSlot>` at it
by adding a `src` prop — the placeholder disappears with no other changes.

Expected files (see the root README for art direction on each):

- `hero.jpg` — bottle in use against a muddy windshield, vertical crop
- `problem.jpg` — a windshield caked opaque
- `step-01.jpg`, `step-02.jpg`, `step-03.jpg` — the squirt/scrub/squeegee sequence
- `product-cutout.png` — bottle on transparent background
- `before.jpg`, `after.jpg` — identical framing, locked tripod
- `scale.jpg` — bottle beside a size reference
- `og.jpg` — 1200x630 social sharing card

Export at roughly 2x the displayed size and compress. WebP is preferred where
the client's toolchain can produce it.
