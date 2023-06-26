import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    intervals: [],
    show: false,
    text: null,
    duration: null,
    loading: false,
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

export const showMessage = createAsyncThunk(
    "message/showMessage",
    async ({ duration = 3000, ...rest }, { dispatch, getState }) => {
        const handleShow = async resolveShow => {
            const state = getState().message;
            const handleHide = (resolveHide, end) => {
                const element = document.getElementById("message");
                const transitionDuration = +element.dataset.transition;
                const resetState = setTimeout(() => {
                    dispatch(reset());
                    resolveHide();

                    if (end) resolveShow();
                }, transitionDuration);

                dispatch(hide());
                dispatch(defineIntervals(resetState));
            };
            const hideMessage = end => {
                return new Promise(resolve => handleHide(resolve, end));
            };

            state.intervals.forEach(id => clearInterval(id));

            if (state.show) await hideMessage();

            const endHide = setTimeout(() => hideMessage(true), duration);

            dispatch(show({ duration, ...rest }));
            dispatch(defineIntervals(endHide));
        };

        return new Promise(handleShow);
    }
);

export const showErrorMessage =
    ({ error, duration, suggestReload = false, ...rest }) =>
    dispatch => {
        const defaultError = "Um erro inesperado ocorreu. Tente novamente.";
        const resError = error?.data?.error;

        dispatch(
            showMessage({
                text: resError ? resError : defaultError,
                duration: duration ? duration : suggestReload ? 8000 : 6000,
                suggestReload,
                ...rest
            })
        );
    };

export default messageSlice.reducer;
