import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "./Reducers";

export const Store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
