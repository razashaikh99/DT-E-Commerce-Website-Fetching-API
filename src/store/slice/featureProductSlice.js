import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
};

const featureProductSlice = createSlice({
    name: "featureProductSlice",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setProducts, setLoading } = featureProductSlice.actions;
export default featureProductSlice.reducer;