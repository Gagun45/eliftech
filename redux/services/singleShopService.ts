import { createNewFlower } from "@/lib/actions/flower.actions";
import { getSingleShopByShopId } from "@/lib/actions/shop.actions";
import type { ActionReturnType, ShopType } from "@/lib/types";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const singleShopApi = createApi({
  reducerPath: "singleShop",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["singleShops"],
  endpoints: (builder) => ({
    getSingleShop: builder.query<
      { shop: ShopType | null },
      { shopId: number; page: number; perPage: number; sortOptionValue: string }
    >({
      queryFn: async ({ page, perPage, shopId, sortOptionValue }) => {
        try {
          const shop = await getSingleShopByShopId({
            shopId,
            page,
            perPage,
            sortOptionValue,
          });
          return { data: shop };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["singleShops"],
    }),
    createFlower: builder.mutation<
      ActionReturnType,
      { price: number; shopId: number; title: string }
    >({
      queryFn: async ({ price, shopId, title }) => {
        try {
          const data = await createNewFlower({ price, shopId, title });
          return { data };
        } catch {
          return { data: { message: "Something went wrong", success: false } };
        }
      },
      invalidatesTags: ["singleShops"],
    }),
  }),
});

export const { useGetSingleShopQuery, useCreateFlowerMutation } = singleShopApi;
