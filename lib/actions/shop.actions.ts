"use server";

import prisma from "../prisma";
import type { ActionReturnType, CreateShopType, ShopType } from "../types";

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
  shops: ShopType[];
}> => {
  try {
    const shops = await prisma.shop.findMany({ include: { flowers: true } });
    return { shops };
  } catch (err) {
    console.log("Get all shops error: ", err);
    return { shops: [] };
  }
};
