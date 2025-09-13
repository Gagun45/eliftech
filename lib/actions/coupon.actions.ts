"use server";

import type { Coupon } from "@prisma/client";
import prisma from "../prisma";
import type { ActionReturnType } from "../types";
import { nanoid } from "nanoid";

export const createCoupon = async ({
  discountPercentage,
  label,
}: {
  label: string;
  discountPercentage: number;
}): Promise<ActionReturnType> => {
  try {
    const code = nanoid(8);
    const newCoupon = await prisma.coupon.create({
      data: { code, discountPercentage, label },
    });
    if (!newCoupon) return { message: "Something went wrong", success: false };
    return { message: "Coupon created", success: true };
  } catch (error) {
    console.log("Create coupon error: ", error);
    return { message: "Something went wrong", success: false };
  }
};

export const getCouponByCouponCode = async ({
  couponCode,
}: {
  couponCode: string;
}): Promise<{ coupon: Coupon | null }> => {
  try {
    const coupon = await prisma.coupon.findUnique({
      where: { code: couponCode },
    });
    return { coupon };
  } catch (error) {
    console.log("Get coupon by coupon code error: : ", error);
    return { coupon: null };
  }
};
