import { z, defineCollection } from 'astro:content';

const worksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    isCompleted: z.boolean(),
    imgSrc: z.string(),
    imgAlt: z.string(),
    description: z.array(z.string()),
    features: z.array(z.string()),
    completedDate: z.string(),
    developmentTime: z.string(),
    tags: z.array(z.string()),
    tools: z.array(z.string()),
    githubLink: z.string(),
    demoLink: z.string(),
  }),
});

export const collections = {
  works: worksCollection,
};
