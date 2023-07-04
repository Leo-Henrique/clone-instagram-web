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
    users: {
        show: false,
        name: "Usuários",
        expectedAmount: 1,
        endpoint: {
            name: null,
            args: undefined,
        },
        data: null,
    },
    post: {
        show: false,
        id: null,
    },
    scrollbar: {
        keep: false,
        scrolling: 0,
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
        showUsers: (state, { payload }) => ({
            ...state,
            users: {
                ...state.users,
                ...payload,
                show: true,
                ...(payload.endpoint && {
                    endpoint: { ...state.users.endpoint, ...payload.endpoint },
                }),
            },
        }),
        showPost: (state, { payload }) => {
            state.post.show = true;
            state.post.id = payload;
        },
        close: (state, { payload: name }) => {
            state[name].show = false;
        },
        keepScrollbar: (state, { payload }) => {
            state.scrollbar.keep = payload;
        },
        scrollbarScrolling: (state, { payload }) => {
            state.scrollbar.scrolling = payload;
        },
        resetScrollbar: state => {
            state.scrollbar = initialState.scrollbar;
        },
        resetModal: (state, { payload: name }) => {
            state[name] = initialState[name];
        },
    },
});

export const {
    requireConfirmation,
    showOptions,
    showUsers,
    showPost,
    keepScrollbar,
    scrollbarScrolling,
    resetScrollbar,
} = modalSlice.actions;
const { close, resetModal } = modalSlice.actions;

export const closeModal = name => dispatch => {
    const element = document.getElementById(`modal-${name}`);
    const transitionDuration = +element.dataset.transition;

    dispatch(close(name));
    setTimeout(() => dispatch(resetModal(name)), transitionDuration);
};
export default modalSlice.reducer;
