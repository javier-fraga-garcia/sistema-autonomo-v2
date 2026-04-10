import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/articles" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      cover: image(),
      coverAlt: z.string(),
      draft: z.boolean(),
    }),
});

export const collections = { articles };
