import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./slice/productSlice";
import productDetailReducer from "./slice/productDetailSlice"
import cartReducer from "./slice/cartSlice"

const store = configureStore({
    reducer: {
        products: productReducer,
        selectedProduct: productDetailReducer,
        cartProduct: cartReducer
    },
});

export default store;