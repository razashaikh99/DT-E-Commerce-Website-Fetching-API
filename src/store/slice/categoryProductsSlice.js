import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false 
};

const categoryProductsSlice = createSlice({
    name: "categoryProducts",
    initialState,
    reducers: {
        setCategoryProducts: (state, action) => {
            state.products = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setCategoryProducts, setLoading } = categoryProductsSlice.actions;
export default categoryProductsSlice.reducer;