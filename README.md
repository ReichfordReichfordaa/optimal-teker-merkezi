# Optimal Teker Merkezi

This is a bilingual landing page for Optimal Teker Merkezi, a tire service center in Baku.

The site is built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons. It supports Azerbaijani and Russian content through locale-based routes.

## Requirements

- Node.js 18.18 or newer
- npm

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000/az
```

The root route redirects to the preferred language.

## Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Checks

Run TypeScript checks:

```bash
npm run typecheck
```

Run linting:

```bash
npm run lint
```

## Main Features

- Azerbaijani and Russian language support
- Responsive landing page
- Premium floating header navigation
- Mobile navigation menu
- Contact links for phone, WhatsApp, directions, and map
- SEO metadata, sitemap, robots file, and local business schema
- Accessible focus states and reduced motion support

## Project Structure

```text
app/
  [lang]/
    layout.tsx
    page.tsx
    not-found.tsx
    opengraph-image.tsx
  globals.css
  sitemap.ts
  robots.ts

components/
  layout/
    header.tsx
    footer.tsx
    language-switcher.tsx
  sections/
    about.tsx
    contact.tsx
    gallery.tsx
    hero.tsx
    reviews.tsx
    services.tsx
    why-choose-us.tsx
  shared/
  ui/

lib/
  i18n/
    config.ts
    dictionaries/
    get-dictionary.ts
    types.ts
  constants.ts
  seo.ts
  utils.ts
```

## Languages

Supported locales:

- `az`
- `ru`

To add a new language:

1. Add the locale to `lib/i18n/config.ts`.
2. Add a dictionary file in `lib/i18n/dictionaries/`.
3. Register the dictionary in `lib/i18n/get-dictionary.ts`.
4. Make sure the new dictionary follows the `Dictionary` type in `lib/i18n/types.ts`.

## Contact Data

Business contact information is stored in:

```text
lib/constants.ts
```

Update this file when phone numbers, map links, address, email, or opening hours change.

## SEO

The project includes:

- Per-language page metadata
- Canonical and alternate language URLs
- Open Graph image route
- `sitemap.xml`
- `robots.txt`
- Local business JSON-LD schema

Before launch, confirm:

- The final production domain in `lib/constants.ts`
- The exact business address
- The correct phone numbers
- The correct email address
- The exact map coordinates
- Real business photos, if available

## Design Notes

The visual system uses a dark base, off-white surfaces, graphite tones, and a warm orange accent. The header is intentionally minimal, floating, and glass-like. The hero section is kept unchanged.

The site should feel clear, direct, and premium without unnecessary decoration.

## Scope

This project is a marketing website. It does not include:

- Admin panel
- Authentication
- Payment system
- Database
- Product catalog
- CMS

