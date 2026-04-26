import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL?.trim() ?? 'https://rishabh0282.vercel.app';
const integrations = [mdx(), sitemap()];

export default defineConfig({
  site,
  integrations,
  vite: {
    plugins: [tailwindcss()],
  },
});
