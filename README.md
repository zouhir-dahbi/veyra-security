# Veyra Security Systems — Website

Marketing site for Veyra Security Systems, a professional security-camera and access-control company serving homeowners and businesses throughout Northern Virginia.

Built with **Astro** + **Tailwind CSS**, with light interactivity from **Alpine.js** (CDN). Ships as a static site to GitHub Pages.

## Tech stack

- **Astro** — component-based static site generator (no per-page duplication; header/footer/sections written once)
- **Tailwind CSS** — compiled via `@astrojs/tailwind` (a real build, not the CDN)
- **Alpine.js** — small runtime for nav dropdowns, mobile menu, FAQ accordions, and the dynamic contact form
- **Space Grotesk** (display) + **Inter** (body) via Google Fonts

## Project structure

```
veyra-security/
├── src/
│   ├── layouts/BaseLayout.astro       # <head>, header, footer, global scripts
│   ├── components/                    # Header, Footer, Hero sections, ProcessSteps,
│   │                                  #   CtaBanner, FaqAccordion, PageHeader
│   ├── data/
│   │   ├── nav.ts                     # single source of truth for navigation
│   │   └── serviceAreas.ts            # all 12 city pages' differentiated content
│   ├── pages/
│   │   ├── index.astro                # home
│   │   ├── residential.astro
│   │   ├── commercial.astro
│   │   ├── services.astro
│   │   ├── about.astro / projects.astro / resources.astro / contact.astro
│   │   └── service-areas/
│   │       ├── index.astro            # service-area hub
│   │       └── [city].astro           # ONE template -> 12 city pages from serviceAreas.ts
│   └── styles/global.css              # Tailwind layers + component classes
├── public/images/                     # logo + photography (served as-is)
├── .github/workflows/deploy.yml       # GitHub Pages build + deploy
└── astro.config.mjs
```

Adding or editing a service-area page = editing `src/data/serviceAreas.ts`. No new file needed.

## Commands

```bash
npm install       # install dependencies
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build to ./dist
npm run preview   # preview the built site
```

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with Astro and publishes `./dist`. In the repo settings, set **Pages → Source → GitHub Actions**.

- **User/organization page or custom domain:** no changes needed (`base` stays `/`).
- **Project page** (`username.github.io/veyra-security`): set `SITE_URL` and `BASE_PATH` env vars in the workflow's build step (commented placeholders are already there), e.g. `BASE_PATH=/veyra-security`. All internal links and asset paths are already `base`-aware.

## Before publishing — regulatory / content checklist

This site intentionally ships without certain content until real, verified information exists. **Do not replace these with fabricated info:**

- [ ] Replace the Formspree placeholder in `src/pages/contact.astro` (`action="https://formspree.io/f/YOUR_FORM_ID"`) with a real form handler. Static hosting can't process form submissions server-side.
- [x] Phone number wired in (header call button, footer, contact page) — single-sourced in `src/data/site.ts`. Still add a real email address.
- [ ] Projects and Resources pages were removed until there's real content — re-add `src/pages/projects.astro` / `resources.astro` and their `src/data/nav.ts` + footer links when ready.
- [ ] Do **not** add "Licensed," "Insured," "Certified," "Bonded," "Authorized," or "Approved" anywhere until verified documentation exists.
- [ ] Do **not** add reviews/testimonials until they are real.
- [ ] Do **not** add a street address or "located in [city]" language unless a real business location is confirmed.
- [ ] Confirm which of the 12 service-area cities are actually authorized/intended before launch.
- [ ] Set the production domain (`SITE_URL`), then re-enable a sitemap (`@astrojs/sitemap`) and add its URL to `public/robots.txt`.
- [ ] Add analytics / Google Business Profile once accounts exist.

## Notes

- The previous hand-written static HTML version is preserved in `_legacy-static/` (git-ignored) for reference and can be deleted once you're happy with the Astro build.

## License

Copyright 2026 Veyra Security Systems. All rights reserved.
