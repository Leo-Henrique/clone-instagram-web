import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    intervals: [],
    show: false,
    text: null,
    duration: null,
};

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        show: (state, { payload: { text, duration } }) => {
            state.show = true;
            state.text = text;
            state.duration = duration;
        },
        hide: state => ({ ...state, show: false }),
        defineIntervals: (state, { payload }) => {
            state.intervals.push(payload);
        },
        reset: () => initialState,
    },
});

const { show, hide, defineIntervals, reset } = messageSlice.actions;
export const showMessage =
    ({ text, duration = 3000 }) =>
    async (dispatch, getState) => {
        const state = getState().message;
        const hideMessage = () =>
            new Promise(resolve => {
                const element = document.getElementById("message");
                const transitionDuration = +element.dataset.transition;

                dispatch(hide());

                const resetState = setTimeout(() => {
                    dispatch(reset());
                    resolve();
                }, transitionDuration);

                dispatch(defineIntervals(resetState));
            });

        state.intervals.forEach(id => clearInterval(id));

        if (state.show) await hideMessage();

        dispatch(show({ text, duration }));
        dispatch(defineIntervals(setTimeout(hideMessage, duration)));
    };

export const showErrorMessage =
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
