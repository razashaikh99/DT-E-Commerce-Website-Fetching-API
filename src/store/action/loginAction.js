import axios from "axios";
import { setLoading, setUser } from "../slice/LoginSlice"
import { toast } from "react-toastify";

export const fetchLoginApi = () => {

    return async (dispatch) => {
        try {
            dispatch(setLoading(true));

            const response = await axios.get("https://dummyjson.com/auth/login")

            dispatch(setUser(response.data.user));
        } catch (error) {
            console.log(error);
            toast.error(`${error} Something went wrong`);
        } finally {
            dispatch(setLoading(false));
            toast.success("Login Successfully!")
        }
    }
}