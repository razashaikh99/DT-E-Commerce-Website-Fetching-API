import { setSelectedProduct, increaseQuantity,  decreaseQuantity, setQuantity, resetQuantity } from "../slice/productDetailSlice"

export const selectProduct = (product) => {
    return (dispatch) => {
        dispatch(setSelectedProduct(product));
    };
};

export const increaseProductQuantity = () => {
    return (dispatch) => {
        dispatch(increaseQuantity());
    };
};

export const decreaseProductQuantity = () => {
    return (dispatch) => {
        dispatch(decreaseQuantity());
    };
};

export const setProductQuantity = () => {
    return (dispatch) => {
        dispatch(setQuantity());
    };
};

export const resetProductQuantity = () => {
    return (dispatch) => {
        dispatch(resetQuantity());
    };
};