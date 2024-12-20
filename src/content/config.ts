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
});

const members = defineCollection({
	type: 'content',
	schema: z.object({
		fullname: z.string(),
		github: z.string(),
		twitter: z.string(),
		phone: z.string(),
		email: z.string(),
		avatar: z.string(),
	})
});

export const collections = { press, departments, members };
