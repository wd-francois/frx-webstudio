# FRX Web Studio

Marketing website for FRX Web Studio, built with [Astro](https://astro.build).

## Commands

| Command           | Action                                        |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Start dev server at http://localhost:4321     |
| `npm run build`   | Type-check and build the static site to `dist/` |
| `npm run preview` | Preview the production build locally          |

## Editing content

- **Business details, contact info, form key, currency:** `src/config/site.ts`
- **Services, packages/prices, process steps, FAQs:** `src/data/content.ts`
- **Founder photo:** `src/assets/profile.jpg`
- **Colours & fonts:** tokens at the top of `src/styles/global.css`

## Contact form

The form uses [Netlify Forms](https://docs.netlify.com/manage/forms/setup/): Netlify detects it
at deploy time (enable **Form detection** under Forms in the Netlify dashboard) and lists submissions there.
Add an email notification under Forms → Form notifications to get each enquiry in your inbox.

## Deploying

`npm run build` outputs a fully static site in `dist/` — deploy to Netlify, Vercel,
Cloudflare Pages or any static host. Update `site` in `astro.config.mjs` and
`public/robots.txt` to your live domain first.
