import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedItem: null,
    quantity: 1,
    maxQuantity: 10,
}

const productDetailSlice = createSlice({
    name: "selectedProduct",
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedItem = action.payload;
            state.quantity = 1;
            state.maxQuantity = action.payload.stock;

            // if (action.payload?.stock && action.payload.stock < 10) {
            //     state.maxQuantity = action.payload.stock;
            // } else {
            //     state.maxQuantity = 10;
            // }
        },
        increaseQuantity: (state) => {
            if (state.quantity < state.maxQuantity) {
                state.quantity += 1;
            }
        },
        decreaseQuantity: (state) => {
            if (state.quantity > 1) {
                state.quantity -= 1;
            }
        },
        setQuantity: (state, action) => {
            const value = parseInt(action.payload);
            if (!isNaN(value) && value >= 1 && value <= state.maxQuantity) {
                state.quantity = value
            }
        },
        resetQuantity: (state) => {
            state.quantity = 1;
        }
    }
});

export const { setSelectedProduct, increaseQuantity, decreaseQuantity, setQuantity, resetQuantity } = productDetailSlice.actions;
export default productDetailSlice.reducer;
