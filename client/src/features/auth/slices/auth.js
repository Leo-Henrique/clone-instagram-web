import { createSlice } from "@reduxjs/toolkit";
import api from "../../../app/api";
import { showErrorMessage } from "../../../app/slices/message";

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

export const updateUser = updatedData => async dispatch => {
    if (updatedData) {
        dispatch(update(updatedData));
        dispatch(
            api.util.updateQueryData("auth", null, draft => ({
                ...draft,
                ...updatedData,
            }))
        );
        return;
    }

    try {
        const { data } = await dispatch(
            api.endpoints.auth.initiate(null, { forceRefetch: true })
        );

        dispatch(update(data));
    } catch (error) {
        dispatch(
            showErrorMessage({
                text: "Não foi possível atualizar as informações.",
                suggestReload: true,
            })
        );
    }
};

export default authSlice.reducer;
