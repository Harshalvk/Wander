import { z } from "zod";

const SignupSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});

const SigninSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(64),
});

export { SigninSchema, SignupSchema };
