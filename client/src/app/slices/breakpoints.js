import { createSlice } from "@reduxjs/toolkit";

import { breakpointsStates } from "../../styles/theme/mediaQueries";

const initialState = () => {
    const names = Object.keys(breakpointsStates);
    const initialState = {};

    names.forEach(name => {
        const query = breakpointsStates[name];

        initialState[name] = matchMedia(query).matches;
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
    const names = Object.keys(breakpointsStates);

    names.forEach(name => {
        const mediaQuery = matchMedia(breakpointsStates[name]);
        const handleBreakpoint = ({ matches }) => {
            dispatch(change({ breakpoint: name, active: matches }));
        };

        mediaQuery.addEventListener("change", handleBreakpoint);
    });
};

export default breakpointsSlice.reducer;
