import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        token: localStorage.token ? JSON.parse(localStorage.token) : null,
        user: null,
    },
    reducers: {
        signIn: (state, { payload }) => ({
            ...state,
            ...payload,
            isAuthenticated: true,
        }),
    },
});

export const { signIn } = authSlice.actions;
export const authenticate = data => dispatch => {
    dispatch(signIn(data));
    localStorage.setItem("token", JSON.stringify(data.token));
}
export default authSlice.reducer;
