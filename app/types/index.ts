import { z } from 'zod';
import readingTime from 'utils/readingTime';

export const strapiResponseSchema = <TData extends z.ZodSchema>(data: TData) =>
  z.object({
    data: z.array(data),
    meta: z.object({
      pagination: z.object({
        page: z.number(),
        pageSize: z.number(),
        pageCount: z.number(),
        total: z.number(),
      }),
    }),
  });

export const tagSchema = z.object({
  id: z.number(),
  attributes: z.object({
    name: z.string(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
  }),
});

export type Tag = z.infer<typeof tagSchema>;

export const postSchema = z.object({
  id: z.number(),
  attributes: z
    .object({
      title: z.string(),
      slug: z.string(),
      content: z.string(),
      subtitle: z.string().optional(),
      createdAt: z.string().datetime(),
      updatedAt: z.string().datetime(),
      publishedAt: z.string().datetime(),
      tags: z.object({
        data: z.array(tagSchema),
      }),
    })
    .transform((value) => ({
      ...value,
      readingTime: readingTime(value.content),
      tags: value.tags.data,
    })),
});

export type Post = z.infer<typeof postSchema>;
