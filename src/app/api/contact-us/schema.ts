import { z } from "zod";

export const contactPostSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});
