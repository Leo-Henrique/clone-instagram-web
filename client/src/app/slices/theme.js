import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: null,
    reducers: {
        setTheme: (state, { payload }) => payload,
    },
});

export const { setTheme } = themeSlice.actions;

export const setInitialTheme = () => (dispatch, getState) => {
    const { isAuthenticated } = getState().auth;

    if (!isAuthenticated) return dispatch(setTheme("light"));

    const userPreference = localStorage.theme;

    if (userPreference) return dispatch(setTheme(userPreference));

    const getDevicePreference = () => {
        const lightQuery = matchMedia("(prefers-color-scheme: light)");

        return lightQuery.matches ? "light" : "dark";
    };

    dispatch(setTheme(getDevicePreference()));
};

export const toggleTheme = () => (dispatch, getState) => {
    const { theme } = getState();

    dispatch(setTheme(theme === "light" ? "dark" : "light"));
};

export default themeSlice.reducer;
