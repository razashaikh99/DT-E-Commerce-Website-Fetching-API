import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./slice/productSlice";
import productDetailReducer from "./slice/productDetailSlice"
import cartReducer from "./slice/cartSlice"
import categoriesReducer from "./slice/categorySlice";
import categoryProductsReducer from "./slice/categoryProductsSlice";
import featureProductReducer from "./slice/featureProductSlice";
import loginReducer from "./slice/loginSlice"
import userProfileReducer from "./slice/userProfileSlice"

const store = configureStore({
    reducer: {
        products: productReducer,
        selectedProduct: productDetailReducer,
        cartProduct: cartReducer,
        categories: categoriesReducer,
        categoryProducts: categoryProductsReducer,
        featureProduct: featureProductReducer,
        loginSlice: loginReducer,
        userProfile: userProfileReducer,
    },
});

export default store;