import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    userData: null,
}

const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setLogout: (state) => {
            state.userData = null;
            state.token = null;
        }
    }
});

export const { setLoading, setUserData, setLogout } = userProfileSlice.actions;
export default userProfileSlice.reducer;