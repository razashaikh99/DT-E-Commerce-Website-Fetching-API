import { SetAddToCart } from "../slice/cartSlice"

export const addToCart = (product) => {
    return (dispatch) => {
        dispatch(SetAddToCart(product));
    }
}