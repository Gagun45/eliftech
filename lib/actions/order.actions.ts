"use server";

import prisma from "../prisma";
import type {
  ActionReturnType,
  FlowerOrderInterface,
  FlowerOrderInterfaceWithId,
} from "../types";

export const createOrder = async (
  order: FlowerOrderInterface
): Promise<ActionReturnType & { orderId: number | null }> => {
  try {
    const { email, orderItems, phone, totalPrice, address } = order;
    const newOrder = await prisma.order.create({
      data: {
        email,
        phone,
        address,
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
    if (!newOrder)
      return { message: "Something went wrong", success: false, orderId: null };
    return { message: "Order created", success: true, orderId: newOrder.id };
  } catch (error) {
    console.log("Create order error: ", error);
    return { message: "Something went wrong", success: false, orderId: null };
  }
};

export const getOrderById = async ({ orderId }: { orderId: number }) => {
  try {
    const order = await prisma.order.findUniqueOrThrow({
      where: { id: orderId },
      include: { orderItems: true },
    });
    return { order };
  } catch {
    return { error: "Something went wrong" };
  }
};

export const getOrdersByEmailAndPhone = async ({
  email,
  phone,
}: {
  email: string;
  phone: string;
}): Promise<{
  success: boolean;
  orders: FlowerOrderInterfaceWithId[];
}> => {
  try {
    const orders = await prisma.order.findMany({
      where: { email, phone },
      include: { orderItems: true },
    });
    return { success: true, orders };
  } catch (error) {
    console.log("Get orders by email and phone error: ", error);
    return { success: false, orders: [] };
  }
};
