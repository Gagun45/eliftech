import type z from "zod";
import type { FlowerSchema, ShopSchema } from "./zod-schemas";
import type { Prisma } from "@prisma/client";

export type CreateShopType = z.infer<typeof ShopSchema>;
export type CreateFlowerType = z.infer<typeof FlowerSchema>;
export type ActionReturnType = { success: boolean; message: string };

export type ShopType = Prisma.ShopGetPayload<{ include: { flowers: true } }>;
export type FlowerType = Prisma.FlowerGetPayload<object>;
