import z from "zod";

export const ShopSchema = z.object({
  title: z.string().min(1, "Title is required"),
  flowerIds: z.array(z.number().int()).optional(),
});

export const FlowerSchema = z.object({
  title: z.string().min(1, "Title is required"),
  shopId: z.number().int(),
  price: z
    .number()
    .int()
    .refine((val) => val >= 1 && val <= 2000, {
      message: "Price must be between 1 and 2000",
    }),
});
