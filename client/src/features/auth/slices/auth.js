import { createSlice } from "@reduxjs/toolkit";
import api from "../../../app/api";

const initialState = {
    isAuthenticated: false,
    token: localStorage.token ? JSON.parse(localStorage.token) : null,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signIn: (state, { payload }) => ({
            ...state,
            ...payload,
            isAuthenticated: true,
        }),
        logout: () => initialState,
        update: (state, { payload }) => ({
            ...state,
            user: { ...state.user, ...payload },
        }),
    },
});

const { signIn, logout, update } = authSlice.actions;

export const signInThunk = data => dispatch => {
    dispatch(signIn(data));

    if (data.token) localStorage.setItem("token", JSON.stringify(data.token));
};

export const logoutThunk = () => dispatch => {
    dispatch(logout());
    dispatch(api.util.resetApiState());
    localStorage.removeItem("token");
};

export const updateUser = updatedData => dispatch => {
    dispatch(update(updatedData));
    dispatch(
        api.util.updateQueryData("auth", null, draft => ({
            ...draft,
            ...updatedData,
        }))
    );
};

export default authSlice.reducer;
