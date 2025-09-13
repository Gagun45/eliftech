import type z from "zod";
import type {
  CouponSchema,
  FlowerSchema,
  orderSchema,
  searchOrderSchema,
  ShopSchema,
} from "./zod-schemas";
import type { Prisma } from "@prisma/client";

export type CreateShopType = z.infer<typeof ShopSchema>;
export type CreateFlowerType = z.infer<typeof FlowerSchema>;
export type CreateOrderType = z.infer<typeof orderSchema>;
export type SearchOrderType = z.infer<typeof searchOrderSchema>;
export type CreateCouponType = z.infer<typeof CouponSchema>;

export type ActionReturnType = { success: boolean; message: string };

export type ShopType = Prisma.ShopGetPayload<{
  include: { flowers: true; _count: { select: { flowers: true } } };
}>;
export type FlowerType = Prisma.FlowerGetPayload<object>;

export interface CartItem {
  flower: FlowerType;
  amount: number;
  shopTitle: string;
}

export interface SortFlowersInterface {
  value: string;
  label: string;
}
export interface FlowerOrderItem {
  flowerTitle: string;
  shopTitle: string;
  amount: number;
  price: number;
}
export interface FlowerOrderInterface {
  address: string;
  email: string;
  phone: string;
  totalPrice: number;
  couponCode: string;
  orderItems: FlowerOrderItem[];
}

export interface OrderReturnInterface {
  id: number;
  address: string;
  email: string;
  phone: string;
  priceBeforeDiscount: number;
  priceAfterDiscount: number;
  discount: number;
  orderItems: FlowerOrderItem[];
}
