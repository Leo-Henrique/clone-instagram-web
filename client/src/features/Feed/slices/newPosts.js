import { createSlice } from "@reduxjs/toolkit";
import api from "../../../app/api";
import { updateUser } from "../../auth/slices/auth";

const initialState = {
    show: false,
    newFollowers: 0,
    updateFeed: false,
};

const { actions, reducer } = createSlice({
    name: "newPosts",
    initialState,
    reducers: {
        warn: state => ({ ...state, show: true }),
        notWarn: state => ({ ...state, show: false }),
        incrementNewFollowers: state => {
            state.newFollowers = state.newFollowers + 1;
        },
        decrementNewFollowers: state => {
            state.newFollowers = state.newFollowers - 1;
        },
        updateFeed: state => ({ ...state, updateFeed: true }),
        resetNewPosts: () => initialState,
    },
});

const {
    warn,
    notWarn,
    incrementNewFollowers,
    decrementNewFollowers,
    resetNewPosts,
} = actions;

export const warnNewPosts = () => dispatch => {
    dispatch(warn());
    dispatch(incrementNewFollowers());
};

export const notWarnNewPosts = () => (dispatch, getState) => {
    dispatch(decrementNewFollowers());

    if (getState().newPosts.newFollowers === 0) dispatch(notWarn());
};

export const updateFeed = () => (dispatch, getState) => {
    const inWelcomePage = !getState().auth.user.hasContentInFeed;

    if (inWelcomePage) dispatch(updateUser({ hasContentInFeed: true }));
    else dispatch(actions.updateFeed());

    dispatch(api.util.invalidateTags(["Post"]));
    setTimeout(() => dispatch(resetNewPosts()));
};

export default reducer;
