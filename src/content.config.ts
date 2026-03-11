import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articlesSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  part: z.number(),
  totalParts: z.number(),
  slug: z.string(),
  place: z.string().optional(),
  stain: z.string().optional(),
  season: z.string().optional(),
  recommendedProducts: z.array(z.object({
    name: z.string(),
    url: z.string().optional(),
    image: z.string().optional(),
    price: z.string().optional(),
  })).optional(),
  image: z.string().optional(),
});

const articles = defineCollection({
  loader: glob({
    base: './src/content/articles',
    pattern: '**/*.md',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: articlesSchema,
});

export const collections = {
  articles,
};
