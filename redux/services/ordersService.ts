import { createOrder } from "@/lib/actions/order.actions";
import type { ActionReturnType, FlowerOrderInterface } from "@/lib/types";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "orders",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    createOrder: builder.mutation<
      ActionReturnType & { orderId: number | null },
      { order: FlowerOrderInterface }
    >({
      queryFn: async ({ order }) => {
        try {
          console.log("Creating order...");
          const data = await createOrder(order);
          return { data };
        } catch (error) {
          console.log("Order services error: ", error);
          return {
            data: {
              message: "Something went wrong",
              success: false,
              orderId: null,
            },
          };
        }
      },
    }),
  }),
});
export const { useCreateOrderMutation } = ordersApi;
