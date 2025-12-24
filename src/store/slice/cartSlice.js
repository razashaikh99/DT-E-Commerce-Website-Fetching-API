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
                existing.qty += (product.qty || 1);
            } else {
                state.cartItems.push({
                    ...product,
                    qty: product.qty || 1
                });
            }
        },
        RemoveFromCart: (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter(
                item => item.id !== id
            );
        },
        IncreaseQuantity: (state, action) => {
            const item = state.cartItems.find(i => i.id === action.payload);
            if (item) item.qty += 1;
        },
        DecreaseQuantity: (state, action) => {
            const item = state.cartItems.find(i => i.id === action.payload);
            if (item && item.qty > 1) item.qty -= 1;
        }
    }
});


export const { SetAddToCart, RemoveFromCart, IncreaseQuantity, DecreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;