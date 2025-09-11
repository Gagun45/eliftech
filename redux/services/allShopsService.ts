import { getAllShops } from "@/lib/actions/shop.actions";
import type { ShopType } from "@/lib/types";
import { createApi, type BaseQueryFn } from "@reduxjs/toolkit/query/react";

const serverActionBaseQuery: BaseQueryFn<void, unknown, unknown> = async () => {
  try {
    const data = await getAllShops();
    return { data };
  } catch (error) {
    return { error };
  }
};

export const allShopsApi = createApi({
  reducerPath: "allShops",
  baseQuery: serverActionBaseQuery,
  endpoints: (builder) => ({
    getShops: builder.query<{ success: boolean; shops: ShopType[] }, void>({
      query: () => undefined,
    }),
  }),
});

export const { useGetShopsQuery } = allShopsApi;
