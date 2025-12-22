import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./slice/productSlice";
import productDetailReducer from "./slice/productDetailSlice"
import cartReducer from "./slice/cartSlice"
import categoriesReducer from "./slice/categorySlice";
import categoryProductsReducer from "./slice/categoryProductsSlice";

const store = configureStore({
    reducer: {
        products: productReducer,
        selectedProduct: productDetailReducer,
        cartProduct: cartReducer,
        categories: categoriesReducer,
        categoryProducts: categoryProductsReducer,
    },
});

export default store;