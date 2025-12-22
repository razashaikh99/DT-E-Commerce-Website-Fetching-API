import axios from "axios";
import { setCategoryProducts, setLoading } from "../slice/categoryProductsSlice";

export const fetchProductsByCategory = (category) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));

            const response = await axios.get(`https://dummyjson.com/products/category/${category}`)

            dispatch(setCategoryProducts(response.data.products));

        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        }
    }
}