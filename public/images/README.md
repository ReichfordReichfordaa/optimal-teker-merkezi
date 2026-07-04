# Real photography goes here

The Hero background and Gallery section currently render art-directed
placeholders (gradients + the alignment-reticle motif) instead of photos,
so the page never looks broken while real assets are pending.

When photography is ready, drop files here and:

1. Hero — replace the placeholder `<div>` background in
   `components/sections/hero.tsx` with a `next/image` (or `<video>`) element.
2. Gallery — replace the gradient tiles in `components/sections/gallery.tsx`
   with `next/image` components pointing at files in this folder.

Recommended: 1600px+ wide, consistent lighting, landscape orientation for
the hero/gallery, and a well-lit workshop/storefront shot for the
`AutomotiveBusiness` schema image in `lib/seo.ts`.
