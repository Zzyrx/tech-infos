import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Plus de champ niche — mono-niche, defini dans site-config.ts
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readingTime: z.number().optional(),
    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).optional(),
    affiliateProducts: z.array(z.object({
      name: z.string(),
      link: z.string().url(),
      description: z.string(),
    })).optional(),
    relatedSlugs: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
