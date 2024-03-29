import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    localStorage.removeItem("signInWarning");

    if (data.token) localStorage.setItem("token", JSON.stringify(data.token));
};

export const logoutThunk = redirect => dispatch => {
    dispatch(logout());
    dispatch(api.util.resetApiState());
    localStorage.removeItem("token");
    redirect();
};

export const updateUser = createAsyncThunk(
    `${authSlice.name}/updateUser`,
    (updatedData, { dispatch }) => {
        const manualUpdate = resolve => {
            dispatch(update(updatedData));
            dispatch(
                api.util.updateQueryData("auth", null, draft => ({
                    ...draft,
                    ...updatedData,
                }))
            );
            resolve();
        };
        const autoUpdate = async (resolve, reject) => {
            try {
                const { data } = await dispatch(
                    api.endpoints.auth.initiate(null, { forceRefetch: true })
                );

                dispatch(update(data));
                resolve();
            } catch (error) {
                dispatch(
                    showErrorMessage({
                        text: "Não foi possível atualizar as informações.",
                        suggestReload: true,
                    })
                );
                reject();
            }
        };

        return new Promise(updatedData ? manualUpdate : autoUpdate);
    }
);

export default authSlice.reducer;
