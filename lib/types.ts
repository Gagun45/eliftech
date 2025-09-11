import type z from "zod";
import type { createShopSchema } from "./zod-schemas";

export type CreateShopType = z.infer<typeof createShopSchema>