import { configureStore } from "@reduxjs/toolkit";
import cart from './cartSlice';
import product from './prodSlice'

export const store = configureStore({
  reducer: {
    product,
    cart
  }
})