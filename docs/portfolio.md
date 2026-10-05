# Portfolio

The portfolio landing page and every case study use `data/portfolio.ts`.
Existing URLs are preserved by the shared `app/[locale]/portfolio/[slug]/page.tsx` route.

## Add a project

1. Put real product screenshots in `public/portfolio/<slug>/`.
2. Add a `PortfolioProject` object to the `projects` array in `data/portfolio.ts`.
3. Include the challenge, solution, features, services, technology, and qualitative impact.
4. Set `featured: true` to show an editorial block, or `false` to show a smaller project card.
5. Set `order` to control listing order and the next-project link.

The route, metadata, sitemap, and next-project navigation update from the data.
The homepage retains its existing presentation and `lib/landing-data.ts` entries.
The five supporting projects reuse their existing gallery data from that file.

## Images and impact

- Set `variant: "mobile"` on portrait app screens. Desktop is the default.
- Add `secondaryImage` for a desktop preview with a mobile screen overlay.
- Set `wide: true` on a gallery image for a full-width showcase.
- Provide a meaningful `alt` description. Screenshots retain their proportions.
- Image failure shows an accessible fallback within the reserved frame.
- Add `impact.value` only when a verified client metric is available. Omitting it renders a qualitative outcome.

## Validation

Run `npm run lint`, `npm run build`, and `npx tsc --noEmit`.
After changing route files, use `npx next typegen` before a standalone type check.
Check desktop, tablet, mobile, all project links, an unknown slug, and image fallbacks.
GSAP animations and hover motion are gated by `prefers-reduced-motion`.
Portfolio styles are scoped under `.work` in `app/[locale]/portfolio/portfolio.css`.

## Languages

Pages live under `app/[locale]/`. `/id` is the default and `/en` is English.
Unprefixed links redirect to Indonesian; public screenshot URLs stay unchanged.
Add both translations for new copy in `lib/i18n/id.json` and `lib/i18n/en.json`.
Use `useTranslations()` in client UI and `getTranslator(locale)` in server code.
Use `LocaleLink` for internal page links so navigation keeps the current language.
Screenshot pixels and client/product names remain as supplied; captions and alternative text are translated.
