import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
}

const editProfileSlice = createSlice({
    name: "editProfile",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    }
});

export const { setLoading } = editProfileSlice.actions;
export default editProfileSlice.reducer;