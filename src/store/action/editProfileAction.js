import { toast } from "react-toastify";
import { setLoading } from "../slice/editProfileSlice"

export const updateUserProfile = (payload, userId) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));

            const response = await axios.put(`https://dummyjson.com/users/${userId}`,
                payload,
                {
                    // headers: { 'Content-Type': 'multipart/form-data' },
                    headers: { 'Content-Type': 'application/json' },
                }
            )
        } catch (error) {
            console.log(error.response?.data);
            toast.error(error.response?.data?.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
}