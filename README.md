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

The form posts to [Web3Forms](https://web3forms.com) (free, no server needed).
Get an access key for your email address and paste it into `form.accessKey` in `src/config/site.ts`.

## Deploying

`npm run build` outputs a fully static site in `dist/` — deploy to Netlify, Vercel,
Cloudflare Pages or any static host. Update `site` in `astro.config.mjs` and
`public/robots.txt` to your live domain first.
