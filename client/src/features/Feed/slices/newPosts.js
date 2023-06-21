import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false,
    newFollowers: 0,
};

const newPostsSlice = createSlice({
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
        resetNewPosts: () => initialState,
    },
});

const { warn, notWarn, incrementNewFollowers, decrementNewFollowers } =
    newPostsSlice.actions;

export const { resetNewPosts } = newPostsSlice.actions;

export const warnNewPosts = () => dispatch => {
    dispatch(warn());
    dispatch(incrementNewFollowers());
};

export const notWarnNewPosts = () => (dispatch, getState) => {
    dispatch(decrementNewFollowers());

    if (getState().newPosts.newFollowers === 0) dispatch(notWarn());
};

export default newPostsSlice.reducer;
