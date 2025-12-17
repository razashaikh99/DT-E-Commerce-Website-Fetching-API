import axios from 'axios';
import { setLoading, setProducts } from '../slice/productSlice';

export const fetchAllProducts = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));

            const response = await axios.get("https://dummyjson.com/products")

            dispatch(setProducts(response.data.products));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false))
        };
    };
};