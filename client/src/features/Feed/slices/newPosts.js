import { createSlice } from "@reduxjs/toolkit";
import api from "../../../app/api";
import { updateUser } from "../../auth/slices/auth";

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
        resetPosts: () => ({ show: false, postCount: 0 }),
    },
});

export const { warn, notWarn, incrementPosts, decrementPosts } =
    newPostsSlice.actions;
const { resetPosts } = newPostsSlice.actions;

export const warnThunk = addCount => dispatch => {
    dispatch(warn());
    dispatch(incrementPosts(addCount));
};

export const showFeed = () => (dispatch, getState) => {
    const { hasContentInFeed } = getState().auth.user;

    dispatch(resetPosts());

    if (!hasContentInFeed) {
        dispatch(
            api.util.updateQueryData("auth", false, draft => ({
                ...draft,
                hasContentInFeed: true,
            }))
        );
        dispatch(updateUser({ hasContentInFeed: true }));
    }
};

export default newPostsSlice.reducer;
