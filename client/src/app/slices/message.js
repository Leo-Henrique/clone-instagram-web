import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        id: null,
        showing: false,
        message: null,
        duration: null,
    },
    reducers: {
        show: (state, { payload: { message, duration } }) => {
            state.showing = true;
            state.message = message;
            state.duration = duration;
        },
        hide: () => ({
            showing: false,
            message: null,
            duration: null,
            id: null,
        }),
        inCallStack: (state, { payload }) => {
            state.id = payload;
        },
    },
});

const { show, hide, inCallStack } = messageSlice.actions;
export const showMessage =
    ({ message, duration }) =>
    (dispatch, getState) => {
        const messageTime = duration ? duration : 3000;
        const { showing, id } = getState().message;

        if (showing) clearInterval(id);

        dispatch(show({ message, duration: messageTime }));

        const timeoutID = setTimeout(() => dispatch(hide()), messageTime);

        dispatch(inCallStack(timeoutID));
    };
    
export default messageSlice.reducer;
