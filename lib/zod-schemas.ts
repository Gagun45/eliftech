import z from "zod";

export const createShopSchema = z.object({
  title: z.string().min(1, "Title is required"),
  flowerIds: z.array(z.number().int()).optional(),
});
