import { setSelectedProduct } from "../slice/productDetailSlice"

export const selectProduct = (product) => {
    return (dispatch) => {
        dispatch(setSelectedProduct(product));
    };
};