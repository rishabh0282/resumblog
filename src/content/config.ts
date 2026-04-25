import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    excerpt: z.string(),
    draft: z.boolean().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    colorScheme: z.enum(['dark', 'light']).default('dark'),
    hasInteractiveComponents: z.boolean().default(false),
  }),
});

export const collections = { blog };
