import { z } from 'zod';

export const LoginAuthSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});

export type LoginAuthDto = z.infer<typeof LoginAuthSchema>;
