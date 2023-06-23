import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    intervals: [],
    show: false,
    text: null,
    duration: null,
    suggestReload: false,
};

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        show: (state, { payload }) => ({
            ...state,
            ...payload,
            show: true,
        }),
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
    ({ error, duration, suggestReload = false }) =>
    dispatch => {
        const defaultError = "Um erro inesperado ocorreu. Tente novamente.";
        const resError = error?.data?.error;

        dispatch(
            showMessage({
                text: resError ? resError : defaultError,
                duration: duration ? duration : suggestReload ? 8000 : 6000,
                suggestReload,
            })
        );
    };

export default messageSlice.reducer;
