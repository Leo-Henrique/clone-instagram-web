import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        token: localStorage.token ? JSON.parse(localStorage.token) : null,
        user: null,
    },
    reducers: {
        signIn: (state, { payload }) => ({ isAuthenticated: true, ...payload }),
    },
});

export const { signIn } = authSlice.actions;
export default authSlice.reducer;
