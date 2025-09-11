import type z from "zod";
import type { createShopSchema } from "./zod-schemas";

export type CreateShopType = z.infer<typeof createShopSchema>;
export type ActionReturnType = { success: boolean; message: string };
