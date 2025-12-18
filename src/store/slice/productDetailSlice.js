import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedItem: null,
}

const productDetailSlice = createSlice({
    name: "selectedProduct",
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedItem = action.payload;
        },
        clearSelectedProduct: (state) => {
            state.selectedItem = null;
        }
    }
});

export const { setSelectedProduct, clearSelectedProduct } = productDetailSlice.actions;
export default productDetailSlice.reducer;
