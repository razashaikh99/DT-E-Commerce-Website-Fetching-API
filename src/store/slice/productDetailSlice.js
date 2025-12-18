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
    }
});

export const { setSelectedProduct } = productDetailSlice.actions;
export default productDetailSlice.reducer;
