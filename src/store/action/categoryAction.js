import axios from "axios";
import { setCategories, setLoading } from "../slice/categorySlice";

export const fetchAllCategories = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));

            const response = await axios.get("https://dummyjson.com/products/categories")

            dispatch(setCategories(response.data));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false))
        }
    }
}