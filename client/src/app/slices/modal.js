import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    confirmation: {
        show: false,
        action: {
            name: "Confirmar",
            callback: null,
        },
        template: {
            name: null,
            props: {},
        },
    },
    options: {
        show: false,
        actions: [],
    },
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        requireConfirmation: (state, { payload }) => ({
            ...state,
            confirmation: {
                show: true,
                action: { ...state.action, ...payload.action },
                template: { ...state.template, ...payload.template },
            },
        }),
        showOptions: (state, { payload }) => {
            state.options.show = true;
            state.options.actions = payload;
        },
        close: (state, { payload: name }) => {
            state[name].show = false;
        },
        reset: (state, { payload: name }) => {
            state[name] = initialState[name];
        },
    },
});

export const { requireConfirmation, showOptions } = modalSlice.actions;
const { close, reset } = modalSlice.actions;

export const closeModal = name => dispatch => {
    const element = document.getElementById(`modal-${name}`);
    const transitionDuration = +element.dataset.transition;

    dispatch(close(name));
    setTimeout(() => dispatch(reset(name)), transitionDuration);
};
export default modalSlice.reducer;
