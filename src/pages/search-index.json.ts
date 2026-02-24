// src/pages/search-index.json.ts
// Index JSON pour la recherche Fuse.js (mono-niche)
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles');

  const index = articles.map(article => {
    const slug = article.id.replace(/\.md$/, '');
    return {
      title: article.data.title,
      description: article.data.description,
      slug: `/${slug}`,
    };
  });

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
