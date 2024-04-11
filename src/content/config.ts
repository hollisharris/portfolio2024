// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const workCollection = defineCollection({
    type: 'content',
    schema: z.object({
        slug: z.string(),
        headline: z.string(),
        company: z.date(),
        project: z.string(),
        featured: z.boolean(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: workCollection,
};