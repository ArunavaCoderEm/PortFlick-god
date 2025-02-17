import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email("Invalid email format"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username must be at most 50 characters"),
  phone: z.string().length(10, "Phone number must be exactly 10 digits"),
  avatar: z.string().url("Invalid avatar URL"),
  clerkid: z.string().min(1, "Clerk ID must be at least 1 characters"),
});
