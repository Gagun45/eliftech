'use server'

import prisma from "../prisma";
import type { ActionReturnType, FlowerOrderInterface } from "../types";

export const createOrder = async (
  order: FlowerOrderInterface
): Promise<ActionReturnType> => {
  try {
    const { email, orderItems, phone, totalPrice } = order;
    const newOrder = await prisma.order.create({
      data: {
        email,
        phone,
        totalPrice,
        orderItems: {
          create: orderItems.map((item) => ({
            flowerTitle: item.flowerTitle,
            amount: item.amount,
            price: item.price,
            shopTitle: item.shopTitle,
          })),
        },
      },
    });
    if (!newOrder) return { message: "Something went wrong", success: false };
    return { message: "Order created", success: true };
  } catch (error) {
    console.log("Create order error: ", error);
    return { message: "Something went wrong", success: false };
  }
};
