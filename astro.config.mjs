// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: set this to the production domain before launch so canonical URLs
  // and the sitemap resolve correctly.
  site: 'https://squeejit.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
