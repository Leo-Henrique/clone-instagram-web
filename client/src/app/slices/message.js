import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        id: null,
        showing: false,
        text: null,
        duration: null,
    },
    reducers: {
        show: (state, { payload: { text, duration } }) => {
            state.showing = true;
            state.text = text;
            state.duration = duration;
        },
        hide: () => ({
            showing: false,
            text: null,
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
    ({ text, duration = 3000 }) =>
    (dispatch, getState) => {
        const { showing, id } = getState().message;

        if (showing) clearInterval(id);

        dispatch(show({ text, duration }));

        const timeoutID = setTimeout(() => dispatch(hide()), duration);

        dispatch(inCallStack(timeoutID));
    };

export const showError =
    ({ error, duration = 6000 }) =>
    dispatch => {
        const defaultError = "Um erro inesperado ocorreu. Tente novamente.";
        const resError = error?.data?.error;

        dispatch(
            showMessage({
                text: resError ? resError : defaultError,
                duration,
            })
        );
    };

export default messageSlice.reducer;
