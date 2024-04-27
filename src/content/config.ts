// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        id: z.string(),
        headline: z.string(),
        company: z.string(),
        project: z.string(),
        featured: z.boolean(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }).optional(),
        tags: z.array(z.string()).optional()
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
};