import { z } from 'zod';

export const RegisterAuthSchema = z.object({
  email: z.string().min(1, 'Email is required').email(),
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});

export type RegisterAuthDto = z.infer<typeof RegisterAuthSchema>;
