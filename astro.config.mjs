// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://lirabuilders.com',
  base: process.env.BASE_PATH || '/',
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});
