import { createSlice } from "@reduxjs/toolkit";

import { breakpoints } from "../../styles/theme/mediaQueries";

const initialState = () => {
    const names = Object.keys(breakpoints);
    const initialState = {};

    names.forEach(name => {
        const newName = `${name[0].toUpperCase()}${name.slice(1)}`;
        const propertyName = `isBreakpoint${newName}`;
        const query = breakpoints[name].replace("@media ", "");

        initialState[propertyName] = matchMedia(query).matches;
    });

    return initialState;
};

const breakpointsSlice = createSlice({
    name: "breakpoints",
    initialState: initialState(),
    reducers: {
        change: (state, { payload: { breakpoint, active } }) => ({
            ...state,
            [breakpoint]: active,
        }),
    },
});

const { change } = breakpointsSlice.actions;

export const watchBreakpoints = () => dispatch => {
    const names = Object.keys(breakpoints);

    names.forEach(name => {
        const upperCaseName = `${name[0].toUpperCase()}${name.slice(1)}`;
        const stateName = `isBreakpoint${upperCaseName}`;
        const mediaQuery = matchMedia(breakpoints[name].replace("@media ", ""));
        const handleBreakpoint = ({ matches }) => {
            dispatch(change({ breakpoint: stateName, active: matches }));
        };

        mediaQuery.addEventListener("change", handleBreakpoint);
    });
};

export default breakpointsSlice.reducer;
