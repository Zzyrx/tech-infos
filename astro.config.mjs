// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// La valeur du site est mise a jour par site-config.ts au runtime,
// mais Astro a besoin d'une valeur statique ici pour le build.
// Placeholder — mettre a jour avec le vrai domaine tech-infos
const SITE_URL = 'https://tech-infos.fr';

export default defineConfig({
  site: SITE_URL,
  integrations: [tailwind(), sitemap()],
  output: 'static',
});
