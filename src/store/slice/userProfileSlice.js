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
        }
    }
});

export const { setLoading, setUserData } = userProfileSlice.actions;
export default userProfileSlice.reducer;