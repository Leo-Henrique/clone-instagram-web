import { createSlice } from "@reduxjs/toolkit";

const breakpointsSlice = createSlice({
    name: "breakpoints",
    initialState: {},
    reducers: {
        start: (state, { payload }) => payload,
        change: (state, { payload }) => {
            state[payload.name] = payload.state;
        },
    },
});

const { start, change } = breakpointsSlice.actions;
export const startBreakpoints = breakpoints => dispatch => {
    const names = Object.keys(breakpoints);
    const initialState = {};

    names.forEach(name => {
        const mediaQuery = matchMedia(breakpoints[name].replace("@media ", ""));
        const upperCaseName = `${name[0].toUpperCase()}${name.slice(1)}`;
        const stateName = [`isBreakpoint${upperCaseName}`];
        const changeState = ({ matches }) =>
            dispatch(change({ name: stateName, state: matches }));

        initialState[stateName] = mediaQuery.matches;
        mediaQuery.addEventListener("change", changeState);
    });

    dispatch(start(initialState));
};

export default breakpointsSlice.reducer;
