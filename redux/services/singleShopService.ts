import { getSingleShopByShopId } from "@/lib/actions/shop.actions";
import type { ShopType } from "@/lib/types";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const singleShopApi = createApi({
  reducerPath: "singleShop",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getSingleShop: builder.query<
      { shop: ShopType | null },
      { shopId: number; page: number; perPage: number }
    >({
      queryFn: async ({ page, perPage, shopId }) => {
        try {
          const shop = await getSingleShopByShopId({
            shopId,
            page,
            perPage,
          });
          return { data: shop };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { useGetSingleShopQuery } = singleShopApi;
