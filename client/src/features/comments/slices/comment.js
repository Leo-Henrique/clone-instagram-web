import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    content: "",
    focus: false,
    reply: {
        isReply: false,
        id: null,
        username: null,
    },
};

const { actions, reducer } = createSlice({
    name: "comment",
    initialState,
    reducers: {
        setComment: (state, { payload }) => {
            state.content = payload;
        },
        focusAddComment: (state, { payload = true }) => {
            state.focus = payload;
        },
        reply: (state, { payload: { id, username } }) => {
            state.reply.isReply = true;
            state.reply.id = id;
            state.reply.username = username;
        },
        resetComment: () => initialState,
    },
});

export const { setComment, focusAddComment, resetComment } = actions;
const { reply } = actions;

export const replyComment = replyTo => dispatch => {
    dispatch(focusAddComment());
    dispatch(setComment(`@${replyTo.username} `));
    dispatch(reply(replyTo));
};

export default reducer;
