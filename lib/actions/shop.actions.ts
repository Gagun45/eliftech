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

export const getSingleShopByShopId = async ({
  shopId,
  page,
  perPage,
}: {
  shopId: number;
  page: number;
  perPage: number;
}): Promise<{ shop: ShopType | null }> => {
  try {
    const skip = (page - 1) * perPage;
    const shop = await prisma.shop.findUniqueOrThrow({
      where: { id: shopId },
      include: {
        flowers: { take: perPage, skip },
        _count: { select: { flowers: true } },
      },
    });
    return { shop };
  } catch (error) {
    console.log("Get single shop by shop id error: ", error);
    return { shop: null };
  }
};

export const getAllShops = async (): Promise<{
  shops: ShopType[];
}> => {
  try {
    const shops = await prisma.shop.findMany({
      include: { flowers: true, _count: { select: { flowers: true } } },
    });
    return { shops };
  } catch (err) {
    console.log("Get all shops error: ", err);
    return { shops: [] };
  }
};
