import z from "zod";

export const ShopSchema = z.object({
  title: z.string().min(1, "Title is required"),
  flowerIds: z.array(z.number().int()).optional(),
});

export const FlowerSchema = z.object({
  title: z.string().min(1, "Title is required"),
  shopId: z.number().int(),
});
