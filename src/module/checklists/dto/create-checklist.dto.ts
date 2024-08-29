import { z } from 'zod';

export const CreateChecklistSchema = z.object({
  name: z.string().min(1, 'Username is required'),
});

export type CreateChecklistDto = z.infer<typeof CreateChecklistSchema>;
