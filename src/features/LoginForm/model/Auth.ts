import { z } from 'zod';

const Auth = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export { Auth };
