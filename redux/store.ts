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

let isFirstRun = 1;

store.subscribe(() => {
  console.log(isFirstRun)
  if (isFirstRun < 25) {
    isFirstRun += 1;
    return;
  }
  console.log('updating store')
  const state = store.getState();
  const cartItems = state.cart.cartItems ?? [{ amount: 2 }];
  try {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  } catch {}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
