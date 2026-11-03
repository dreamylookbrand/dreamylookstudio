import { defineConfig } from 'vite';
import { renderPage } from './src/render.js';
import { headTags } from './src/seo.js';

// Pre-renders the page HTML + SEO tags from the same modules the site uses,
// so crawlers see full content without running JavaScript.
const prerender = () => ({
  name: 'dreamy-prerender',
  transformIndexHtml: {
    order: 'pre',
    handler: (html) => html.replace('<!--SEO-->', headTags()).replace('<!--APP-->', renderPage()),
  },
});

export default defineConfig({
  plugins: [prerender()],
  build: { target: 'es2020', assetsInlineLimit: 0 },
});
