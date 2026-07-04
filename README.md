# Optimal Təkər Mərkəzi — Premium Landing Page

A production-ready, bilingual (AZ/RU) marketing site for a premium tire
service center in Baku. Built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, shadcn/ui-pattern primitives, Framer Motion, and Lucide icons.

---

## 1. Getting started

This code was authored in an offline sandbox, so dependencies have **not**
been installed or built here. On your machine, with internet access:

```bash
npm install
npm run dev      # http://localhost:3000 → redirects to /az
```

```bash
npm run build && npm run start   # production build
npm run typecheck                # tsc --noEmit
npm run lint                     # next lint
```

Node.js 18.18+ is required.

---

## 2. Project structure

```
app/
  [lang]/               ← locale segment: "az" (default) | "ru"
    layout.tsx          ← root layout (html/body, fonts, JSON-LD, header/footer)
    page.tsx            ← assembles all sections for the home page
    opengraph-image.tsx ← dynamically generated OG/Twitter card per locale
    not-found.tsx        ← localized 404
  globals.css
  icon.svg              ← favicon (Next.js file convention)
  sitemap.ts            ← /sitemap.xml (both locales, hreflang alternates)
  robots.ts             ← /robots.txt
middleware.ts           ← redirects "/" to the preferred locale (az/ru)

components/
  layout/                header.tsx, footer.tsx, language-switcher.tsx
  sections/               hero, about, services, why-choose-us, gallery,
                          reviews, contact — one file per landing section
  shared/                 logo.tsx, alignment-reticle.tsx (signature motif),
                          reveal.tsx (scroll animation), section-heading.tsx,
                          tread-divider.tsx, floating-actions.tsx (mobile
                          call/WhatsApp bar)
  ui/                     button.tsx, card.tsx, badge.tsx — shadcn-pattern
                          primitives (cva-based variants)

lib/
  i18n/
    config.ts             locale list, default locale, guards
    types.ts               the `Dictionary` type — the contract every
                          locale file must satisfy
    dictionaries/az.ts     Azerbaijani copy (primary)
    dictionaries/ru.ts     Russian copy (secondary)
    get-dictionary.ts      server-only dictionary loader
  constants.ts             phone numbers, WhatsApp, address, map links —
                          the single source of truth for contact info
  seo.ts                   schema.org AutomotiveBusiness JSON-LD generator
  utils.ts                 `cn()` className merge helper
```

**Adding a third language** (e.g. English) means: add `"en"` to
`lib/i18n/config.ts`, add `lib/i18n/dictionaries/en.ts` satisfying the
`Dictionary` type, and register it in `get-dictionary.ts`. No component
changes required — every section reads only from the dictionary.

---

## 3. Design system (why it looks the way it does)

**Palette** — obsidian black, off-white canvas, graphite grays, and a
single warm accent, "Optimal Orange" (`#FF5A1F`) — the color of a torque
mark. A hairline of diagnostic blue is reserved for focus rings only, per
the brief's "very small amount of blue if needed."

**Typography** — Golos Text (display, geometric, full Cyrillic support)
paired with Inter (body, highly legible in both AZ and RU). Large,
tight-tracked display sizes on the hero; a restrained type scale
elsewhere.

**Signature element** — the brand mark and the large ambient graphic in
the hero are both built from the same idea: a segmented ring with a
single accent tick, echoing a **Hunter Road Force Elite alignment
readout**. It's used in the logo, the hero background, and the tread-mark
divider in "Why Choose Us" — one consistent, subject-specific motif rather
than decoration for its own sake.

**Placeholders** — Gallery and background imagery are intentionally
art-directed gradients (not gray boxes) so the site never looks broken
before real photography is dropped in. See `public/images/README.md` for
where to add real assets.

---

## 4. SEO checklist (already implemented)

- Per-locale `<title>`, meta description, canonical + `hreflang` alternates
- Dynamic Open Graph / Twitter card images (`opengraph-image.tsx`, no
  static asset dependency)
- `schema.org` `AutomotiveBusiness` JSON-LD (address, phone, hours,
  services, brands) in `lib/seo.ts`
- Semantic headings (`h1` in hero, `h2` per section), landmark elements
  (`header`, `main`, `footer`, `nav`)
- `sitemap.xml` and `robots.txt` via Next.js file conventions
- `next/font` with `display: swap` for both Latin and Cyrillic subsets

**Before launch:**
1. Replace the approximate coordinates in `lib/constants.ts` (`GEO`) with
   the exact rooftop lat/lng from Google Business Profile.
2. Replace `info@optimaltekar.az` with the real email address.
3. Verify `SITE_URL` in `lib/constants.ts` once the domain is live, and
   submit `sitemap.xml` to Google Search Console.
4. Swap gallery/hero placeholders for real photography (see §3).

---

## 5. Accessibility & performance

- Visible focus rings (`:focus-visible`) on every interactive element
- `prefers-reduced-motion` respected globally (animations collapse to
  near-instant)
- Semantic landmarks and descriptive `aria-label`s on icon-only controls
- System font stacks as fallbacks; fonts load with `swap` (no invisible
  text)
- No client JS on sections that don't need it — `Hero`, `Header`, and
  `Reveal` are the only client components; everything else renders on the
  server
- Images (once added) should use `next/image` for automatic AVIF/WebP and
  lazy loading — `next.config.mjs` is already configured for it

---

## 6. What's intentionally out of scope

Per the brief: no authentication, dashboard, admin panel, payments,
product catalog, database, or CMS. This is a static marketing page. The
Google Maps embed uses an unauthenticated `google.com/maps?q=...&output=embed`
URL, so no API key or billing account is required.
