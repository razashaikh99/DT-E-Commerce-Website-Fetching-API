import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./slice/productSlice";
import productDetailReducer from "./slice/productDetailSlice"

const store = configureStore({
    reducer: {
        products: productReducer,
        selectedProduct: productDetailReducer,
    },
});

export default store;