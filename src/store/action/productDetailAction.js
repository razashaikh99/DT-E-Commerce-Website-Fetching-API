import { clearSelectedProduct, setSelectedProduct } from "../slice/productDetailSlice"

export const selectProduct = (product) => {
    return (dispatch) => {
        dispatch(setSelectedProduct(product));
    };
};

export const clearProduct = () => {
    return (dispatch) => {
        dispatch(clearSelectedProduct());
    };
};