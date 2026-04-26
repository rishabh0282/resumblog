import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL?.trim();
const integrations = [mdx(), ...(site ? [sitemap()] : [])];

export default defineConfig({
  ...(site ? { site } : {}),
  integrations,
  vite: {
    plugins: [tailwindcss()],
  },
});
