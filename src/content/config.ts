import { defineCollection, z, reference } from 'astro:content';

const team = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      title: z.string(),
      image: image(),
      bgImage: image(),
      bio: z.string(),
      experience: z
        .array(
          z.object({
            year: z.string(),
            role: z.string(),
            description: z.string(),
          })
        )
        .default([]),
      socialLinks: z
        .object({
          twitter: z.string().url().optional(),
          linkedin: z.string().url().optional(),
          website: z.string().url().optional(),
        })
        .optional(),
    }),
});

const objectives = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      bgImage: image(),
    }),
});

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      publishDate: z.coerce.date(),
      readTime: z.string(),
      category: reference('categories'),
      image: image(),
      excerpt: z.string(),
    }),
});

const categories = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
  }),
});

const donations = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      amount: z.number(),
      title: z.string(),
      description: z.string(),
      image: image(),
      stripePriceId: z.string(),
    }),
});

export const collections = { team, objectives, blog, categories, donations };
