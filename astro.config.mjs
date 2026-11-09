// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Live URL (used for canonical URLs + sitemap).
  site: 'https://frxwebstudio.com',
  // Inline the (small) CSS so it doesn't block first paint.
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (page) => !page.includes('/pricing') && !page.includes('/about') })],
});
