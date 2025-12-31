import axios from "axios";
import { setLoading, setUserData } from "../slice/userProfileSlice"
import getToken from '../../utils/utils'

export const fetchUserProfileData = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));

            const response = await axios.get("https://dummyjson.com/auth/me",
                {
                    headers: {
                        'Authorization': `Bearer ${getToken}`
                    }
                }
            )
            dispatch(setUserData(response.data))
            console.log(response.data);

        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false))
        }
    }
}