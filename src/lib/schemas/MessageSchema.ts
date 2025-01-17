import { z } from "zod";

export const messageSchema = z.object({
  name: z.string().min(1, {
    message: "Name is reqired",
  }),
  email: z.string().email(),
  message: z.string().min(1, {
    message: "Content is reqired",
  }),
});

export type MessageSchema = z.infer<typeof messageSchema>;
