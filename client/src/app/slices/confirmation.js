import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false,
    confirmed: false,
    action: null,
    content: {
        show: false,
        image: null,
        imageAlt: null,
        title: null,
        text: null,
    },
};

const confirmationSlice = createSlice({
    name: "confirmation",
    initialState,
    reducers: {
        requireConfirmation: (state, { payload }) => ({
            ...state,
            show: true,
            action: payload.action,
            content: { ...state.content, ...payload.content, show: true },
        }),
        cancelConfirmation: () => initialState,
        confirm: state => {
            state.confirmed = true;
        },
    },
});

export const { requireConfirmation, cancelConfirmation } = confirmationSlice.actions;
const { confirm } = confirmationSlice.actions;

export const confirmThunk = closeModal => dispatch => {
    dispatch(confirm());
    setTimeout(closeModal, 20);
};

export default confirmationSlice.reducer;
