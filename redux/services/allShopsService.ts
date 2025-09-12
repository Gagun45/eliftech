import { createNewShop, getAllShops } from "@/lib/actions/shop.actions";
import type { ActionReturnType, ShopType } from "@/lib/types";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const allShopsApi = createApi({
  reducerPath: "allShops",
  tagTypes: ["Shops"],
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getShops: builder.query<{ shops: ShopType[] }, void>({
      queryFn: async () => {
        try {
          const data = await getAllShops();
          return { data };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["Shops"],
    }),
    createShop: builder.mutation<ActionReturnType, { title: string }>({
      queryFn: async ({ title }) => {
        try {
          const data = await createNewShop({ title });
          return { data };
        } catch {
          return { data: { message: "Something went wrong", success: false } };
        }
      },
      invalidatesTags: ["Shops"],
    }),
  }),
});

export const { useGetShopsQuery, useCreateShopMutation } = allShopsApi;
