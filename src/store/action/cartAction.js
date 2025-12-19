import { RemoveFromCart, SetAddToCart } from "../slice/cartSlice"

export const addToCart = (product) => {
    return (dispatch) => {
        dispatch(SetAddToCart(product));
    };
};

export const removeFromCart = (id) => {
    return (dispatch) => {
        dispatch(RemoveFromCart(id));
    };
};

