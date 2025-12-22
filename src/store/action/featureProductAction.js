import axios from 'axios';
import { setLoading, setProducts } from '../slice/featureProductSlice';

export const fetchFeatureProducts = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));

            const response = await axios.get("https://dummyjson.com/products")

            dispatch(setProducts(response.data.products.slice(8, 16)));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        };
    };
};