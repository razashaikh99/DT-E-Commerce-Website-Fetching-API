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
        RemoveFromCart: (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter(
                item => item.id !== id
            );
        }
    }
});


export const { SetAddToCart, RemoveFromCart } = cartSlice.actions;
export default cartSlice.reducer;