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

export const { signIn, logout, update } = authSlice.actions;

export const signInThunk = data => dispatch => {
    dispatch(signIn(data));
    localStorage.setItem("token", JSON.stringify(data.token));
};

export const logoutThunk = () => dispatch => {
    dispatch(logout());
    localStorage.removeItem("token");
};

export const updateUser = updatedData => dispatch => {
    dispatch(update(updatedData));
    dispatch(
        api.util.updateQueryData("auth", false, draft => ({
            ...draft,
            ...updatedData,
        }))
    );
};

export default authSlice.reducer;
