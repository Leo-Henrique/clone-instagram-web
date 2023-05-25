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
        logout: () => ({ isAuthenticated: false, token: null, user: null }),
    },
});

export const { signIn, logout } = authSlice.actions;

export const signInThunk = data => dispatch => {
    dispatch(signIn(data));
    localStorage.setItem("token", JSON.stringify(data.token));
};

export const logoutThunk = () => dispatch => {
    dispatch(logout());
    localStorage.removeItem("token");
};
export default authSlice.reducer;
