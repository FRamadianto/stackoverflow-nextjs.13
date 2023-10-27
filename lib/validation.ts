import * as z from "zod";

export const QuestionSchema = z.object({
   title: z.string().min(5).max(130),
   explanation: z.string().min(5).max(130),
   tags: z.array(z.string().min(1).max(20)).min(1).max(3),
  });