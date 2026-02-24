// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';
import { siteConfig } from '../data/site-config';

export const GET: APIRoute = () => {
  const sitemapUrl = new URL('/sitemap-index.xml', siteConfig.domain).href;
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
};
