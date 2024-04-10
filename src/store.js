import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from './content/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})