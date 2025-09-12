import { createOrder } from "@/lib/actions/order.actions";
import type { ActionReturnType, FlowerOrderInterface } from "@/lib/types";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "orders",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    createOrder: builder.mutation<
      ActionReturnType,
      { order: FlowerOrderInterface }
    >({
      queryFn: async ({ order }) => {
        try {
          const data = await createOrder(order);
          return { data };
        } catch {
          return { data: { message: "Something went wrong", success: false } };
        }
      },
    }),
  }),
});
export const { useCreateOrderMutation } = ordersApi;
