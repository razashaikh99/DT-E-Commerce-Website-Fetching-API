import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: "addToCart",
    initialState,
    reducers: {
        SetAddToCart: (state, action) => {
            const product = action.payload;
            const existing = state.cartItems.find(item => item.id === product.id);
            if (existing) {
                existing.qty += 1;
            } else {
                state.cartItems.push({ ...product, qty: 1 })
            }
        },
    }
});


export const { SetAddToCart } = cartSlice.actions;
export default cartSlice.reducer;