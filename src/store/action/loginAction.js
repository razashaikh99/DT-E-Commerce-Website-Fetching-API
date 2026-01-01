import axios from "axios";
import { setLoading, setUser } from "../slice/loginSlice"
import { toast } from "react-toastify";
import { setToken } from "../../utils/utils";

export const fetchLoginApi = (payload, navigate) => {

    return async (dispatch) => {
        try {
            dispatch(setLoading(true));

            const response = await axios.post("https://dummyjson.com/auth/login",
                payload,
                {
                    headers: { 'Content-Type': 'application/json' },
                })

            dispatch(setUser(response));
            setToken(response?.data?.accessToken)
            setUser(response)
            toast.success("Login Successfully!");
            navigate("/");
        } catch (error) {
            console.log(error.response?.data);
            toast.error(error.response?.data?.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
}