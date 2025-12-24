import { RemoveFromCart, SetAddToCart, IncreaseQuantity, DecreaseQuantity } from "../slice/cartSlice"

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

export const increaseQuantity = (id) => {
    return (dispatch) => {
        dispatch(IncreaseQuantity(id));
    };
};

export const decreaseQuantity = (id) => {
    return (dispatch) => {
        dispatch(DecreaseQuantity(id));
    };
};
