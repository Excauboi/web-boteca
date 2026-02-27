import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://laboteca.es',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});