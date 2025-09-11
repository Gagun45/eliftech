"use server";

import type { Prisma } from "@prisma/client";
import prisma from "../prisma";
import type { ActionReturnType, CreateShopType } from "../types";

export const createNewShop = async (
  values: CreateShopType
): Promise<ActionReturnType> => {
  try {
    const { title } = values;
    await prisma.shop.create({ data: { title } });
    return { success: true, message: "New shop created" };
  } catch (err) {
    console.log("Create new shop error: ", err);
    return { success: false, message: "Something went wrong" };
  }
};

export const getAllShops = async (): Promise<{
  shops: Prisma.ShopGetPayload<{ select: { title: true; id: true } }>[];
}> => {
  try {
    const shops = await prisma.shop.findMany({
      select: { title: true, id: true },
    });
    return { shops };
  } catch (err) {
    console.log("Get all shops error: ", err);
    return { shops: [] };
  }
};
