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

export const orderSchema = z.object({
  email: z.email(),
  phone: z.string().regex(/^\+?[1-9]\d{5,20}$/, {
    message: "Enter valid phone number within 5-20 symbols range",
  }),
});

export const searchOrderSchema = z.object({
  email: z.email(),
  phone: z.string().regex(/^\+?[1-9]\d{5,20}$/, {
    message: "Enter valid phone number within 5-20 symbols range",
  }),
});
