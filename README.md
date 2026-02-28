# Wasatch Cement & Concrete Supply

Bilingual (English and Spanish) marketing website built with Astro, React Islands, Tailwind CSS, and TypeScript. The site is optimized for SEO, accessibility, and performance with a pure white background, global color tokens, and scroll reveal animations that respect reduced-motion preferences.

## Features

- Full i18n with static routes at `/en/` and `/es/`
- React Island quote request form
- Global color tokens in `src/styles/global.css`
 - Global color tokens in `src/styles/tokens.css`

# Development

- Install: `npm install`
- Dev server: `npm run dev`
- Type check: `npm run astro -- check`
- Build: `npm run build`
- Preview (static): open files in `dist/` or run a local server

# Project Structure

- Layout: `src/layouts/BaseLayout.astro`
- Components:
  - `src/components/Navbar.astro`
  - `src/components/Footer.astro`
  - `src/components/LanguageSwitcher.tsx`
  - `src/components/Reveal.tsx`
  - `src/components/Button.tsx`
  - `src/components/ProjectGrid.tsx`
  - `src/components/Modal.tsx`
  - `src/components/QuoteDrawer.tsx`
- Pages (URL-prefixed i18n):
  - English: `src/pages/en/...`
  - Spanish: `src/pages/es/...`
- Data:
  - `src/data/projects.ts`
  - `src/data/locations.ts`
- Styles:
  - Tokens: `src/styles/tokens.css`
  - Global: `src/styles/global.css`

# i18n

- Translation files:
  - `src/i18n/en.json`
  - `src/i18n/es.json`
- Utilities: `src/i18n/index.ts`
  - `getLangFromPath(pathname): "en" | "es"`
  - `t(lang, key, params?)`: supports nested keys and interpolation with `{{param}}`
  - Falls back to English for missing keys
- Add new strings by editing the JSON files and referencing via `t(lang, "path.to.key")`

# Hero Slider Media

- Data: `src/data/heroSlides.ts` exports three slides with i18n keys and links.
- Videos (placeholders): `public/videos/hero-1.mp4`, `hero-2.mp4`, `hero-3.mp4`
- Posters (placeholders): `public/images/hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`
- Replace each placeholder with production assets using the same filenames, or update the `videoSrc`/`posterSrc` fields in `src/data/heroSlides.ts` to point to your files.
- Recommended: MP4 H.264 clips ~5–10s, and 1920×1080 poster JPGs.

# Tokens

- Change colors in `src/styles/tokens.css` under the `@theme` block.
- Utilities exposed in Tailwind:
  - Backgrounds: `bg-bg`, `bg-surface`, `bg-primary`, `bg-secondary`
  - Text: `text-text`, `text-brand`, `text-primary-foreground`, `text-secondary-foreground`
  - Borders: `border-muted`
  - Focus rings: `focus-visible:ring-primary focus-visible:ring-offset-bg`

# SEO

- Per-page title/description set via `BaseLayout` props.
- OpenGraph & Twitter meta included in `BaseLayout`.
- JSON-LD LocalBusiness added in `BaseLayout`.
- Sitemap via `@astrojs/sitemap`; robots in `public/robots.txt`.
- IntersectionObserver-based reveal animations with reduced-motion support
- SEO-friendly metadata and accessible structure

## Project Structure

```text
/
├── public/
├── src
│   ├── components
│   │   └── QuoteForm.tsx
│   ├── i18n
│   │   └── translations.ts
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   ├── [lang]/index.astro
│   │   └── index.astro
│   └── styles
│       └── global.css
└── package.json
```

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build |
| `npm run astro -- check` | Run Astro type checking |

## Localization

- English: `http://localhost:4321/en/`
- Spanish: `http://localhost:4321/es/`

Edit text content in `src/i18n/translations.ts`.
