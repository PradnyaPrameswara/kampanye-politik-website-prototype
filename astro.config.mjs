import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://civicunity.org',
  output: 'static',
  integrations: [
    react(),
    tailwind(),
    sitemap(),
  ],
  redirects: {
    '/product/5':   '/donate/5',
    '/product/10':  '/donate/10',
    '/product/25':  '/donate/25',
    '/product/50':  '/donate/50',
    '/product/100': '/donate/100',
    '/blogcategory/advocacy':  '/blog/category/advocacy',
    '/blogcategory/community': '/blog/category/community',
    '/blogcategory/policy':    '/blog/category/policy',
    '/checkout':               '/donate/50',
  },
});
