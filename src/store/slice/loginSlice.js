import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    user: null,
}

const loginSlice = createSlice({
    name: "loginSlice",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        onLogout: (state) => {
            state.user = null,
            state.token = null
        }
    }
});

export const { setLoading, setUser } = loginSlice.actions;
export default loginSlice.reducer;