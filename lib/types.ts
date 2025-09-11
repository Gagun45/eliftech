import type z from "zod";
import type { createShopSchema } from "./zod-schemas";
import type { Prisma } from "@prisma/client";

export type CreateShopType = z.infer<typeof createShopSchema>;
export type ActionReturnType = { success: boolean; message: string };

export type ShopType = Prisma.ShopGetPayload<{
  select: { id: true; title: true };
}>;
