import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./auth";
import productSlice from "./products/productSlice";
import { apiSlice } from "../api/apiSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    products: productSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
