import { defineCollection, z } from 'astro:content';

const press = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		//pubDate: z.coerce.date(),
		pubDate: z.string(),
	}),
});

const departments = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		email: z.string(),
	}),
})

export const collections = { press, departments };
