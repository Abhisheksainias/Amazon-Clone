import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";

// create Store
export const store = configureStore({
    reducer: {
        allCart: cartSlice,
    }
})