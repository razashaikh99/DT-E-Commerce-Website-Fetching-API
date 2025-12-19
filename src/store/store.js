import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./slice/productSlice";
import productDetailReducer from "./slice/productDetailSlice"
import cartReducer from "./slice/cartSlice"
import categoriesReducer from "./slice/categorySlice";

const store = configureStore({
    reducer: {
        products: productReducer,
        selectedProduct: productDetailReducer,
        cartProduct: cartReducer,
        categories: categoriesReducer,
    },
});

export default store;