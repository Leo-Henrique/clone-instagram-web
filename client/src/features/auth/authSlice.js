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
export const authenticate = ({ request, form }) => async dispatch => {
    const { data } = await request(form);

    if (data) {
        dispatch(signIn(data));
        localStorage.setItem("token", JSON.stringify(data.token));
    }
};

export default authSlice.reducer;
