
# CurbEase — Bin Cleaning First (Astro + Netlify)

- GA4: `G-CE57NMTBW9` embedded in `src/layouts/Base.astro`.
- Stripe links discovered from your archives are wired where possible:
{
  "BASIC": null,
  "STANDARD": null,
  "PREMIUM": null,
  "BIN_ONE_TIME": null,
  "BIN_QUARTERLY": null
}

## Deploy
1. Create or open Netlify site linked to your GitHub repo.
2. Replace repo contents with this folder.
3. Netlify builds automatically.

## Update Stripe or GA4
- Edit `src/pages/*.astro` CTA hrefs.
- Edit GA4 in `src/layouts/Base.astro`.

## Notes
- Netlify Forms: `contact`, `commercial-quote`.
- Sitemap/robots: in `/public`.
- Assets: `/public/assets`.
