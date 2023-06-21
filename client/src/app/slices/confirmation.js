import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false,
    action: {
        name: "Confirmar",
        callback: null,
    },
    content: null,
};

const confirmationSlice = createSlice({
    name: "confirmation",
    initialState,
    reducers: {
        requireConfirmation: (state, { payload: { action, content } }) => ({
            show: true,
            action: { ...state, ...action },
            content,
        }),
        cancelConfirmation: () => initialState,
    },
});

export const { requireConfirmation, cancelConfirmation } = confirmationSlice.actions;
export default confirmationSlice.reducer;
