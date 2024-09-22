import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    carts: []
}

// card slice
const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {

        //add to cart
        addToCart: (state, action) => {

            const ItemIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
            if (ItemIndex >= 0) {
                state.carts[ItemIndex].qnty += 1
            } else {
                const temp = { ...action.payload, qnty: 1 }
                state.carts = [...state.carts, temp]
            }
        },

        // remove particuller item
        removeToCart: (state, action) => {
            const data = state.carts.filter((elm) => elm.id !== action.payload)
            state.carts = data
        },

        // remove single item
        removeSingleItem: (state, action) => {
            const ItemIndex_Dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id)
            if (state.carts[ItemIndex_Dec].qnty >= 1) {
                state.carts[ItemIndex_Dec].qnty -= 1
            }
        },

        // clear cart
        clearCart: (state, action) => {
            state.carts = [];
        }
    }
})

export const { addToCart, removeToCart, removeSingleItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;