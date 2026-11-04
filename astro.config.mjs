// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Live URL (used for canonical URLs + sitemap). Change when a custom domain is connected.
  site: 'https://frx-webstudio.netlify.app',
  integrations: [sitemap({ filter: (page) => !page.includes('/pricing') && !page.includes('/about') })],
});
