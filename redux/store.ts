import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { allShopsApi } from "./services/allShopsService";
import { singleShopApi } from "./services/singleShopService";
import cartReducer from "./slices/cartSlice";
import { ordersApi } from "./services/ordersService";

export const store = configureStore({
  reducer: {
    [allShopsApi.reducerPath]: allShopsApi.reducer,
    [singleShopApi.reducerPath]: singleShopApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(allShopsApi.middleware)
      .concat(singleShopApi.middleware)
      .concat(ordersApi.middleware),
});

setupListeners(store.dispatch);

let prevCartItems = store.getState().cart.cartItems;

store.subscribe(() => {
  const currentCartItems = store.getState().cart.cartItems;

  if (currentCartItems !== prevCartItems) {
    prevCartItems = currentCartItems;
    try {
      localStorage.setItem("cart", JSON.stringify(currentCartItems ?? []));
      console.log("Cart updated to: ", currentCartItems);
    } catch {}
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
