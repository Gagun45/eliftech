import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { allShopsApi } from "./services/allShopsService";

export const store = configureStore({
  reducer: {
    [allShopsApi.reducerPath]: allShopsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allShopsApi.middleware),
});

setupListeners(store.dispatch);
