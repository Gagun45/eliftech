import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { allShopsApi } from "./services/allShopsService";
import { singleShopApi } from "./services/singleShopService";

export const store = configureStore({
  reducer: {
    [allShopsApi.reducerPath]: allShopsApi.reducer,
    [singleShopApi.reducerPath]: singleShopApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(allShopsApi.middleware)
      .concat(singleShopApi.middleware),
});

setupListeners(store.dispatch);
