// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with your live domain before deploying (used for canonical URLs + sitemap)
  site: 'https://frxwebstudio.com',
  integrations: [sitemap({ filter: (page) => !page.includes('/pricing') && !page.includes('/about') })],
});
