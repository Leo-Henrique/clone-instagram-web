import { createSlice } from "@reduxjs/toolkit";

const newPostsSlice = createSlice({
    name: "newPosts",
    initialState: {
        show: false,
        postCount: 0,
    },
    reducers: {
        warn: state => ({ ...state, show: true }),
        notWarn: state => ({ ...state, show: false }),
        incrementPosts: (state, { payload }) => {
            state.postCount = state.postCount + payload;
        },
        decrementPosts: (state, { payload }) => {
            state.postCount = state.postCount - payload;
        },
        resetWarn: () => ({ show: false, postCount: 0 }),
    },
});

export const { warn, notWarn, incrementPosts, decrementPosts, resetWarn } =
    newPostsSlice.actions;
export const warnThunk = addCount => dispatch => {
    dispatch(warn());
    dispatch(incrementPosts(addCount));
};

export default newPostsSlice.reducer;
