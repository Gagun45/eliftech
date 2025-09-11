"use server";

import prisma from "../prisma";
import type { ActionReturnType, CreateFlowerType } from "../types";

export const createNewFlower = async (
  values: CreateFlowerType
): Promise<ActionReturnType> => {
  try {
    const { title, shopId } = values;
    await prisma.flower.create({
      data: { title, shopId },
    });
    return { success: true, message: "New flower created" };
  } catch (err) {
    console.log("Create new flower error: ", err);
    return { success: false, message: "Something went wrong" };
  }
};
