import { combineReducers, configureStore } from "@reduxjs/toolkit";

import newPosts from "../features/feed/slices/newPosts";
import auth from "../features/auth/slices/auth";
import comment from "../features/comments/slices/comment";
import api from "./api";
import breakpoints from "./slices/breakpoints";
import message from "./slices/message";
import modal from "./slices/modal";
import theme from "./slices/theme";

const reducer = combineReducers({
    [api.reducerPath]: api.reducer,
    auth,
    message,
    theme,
    breakpoints,
    newPosts,
    modal,
    comment,
});
const middleware = getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware);
const store = configureStore({ reducer, middleware });

export default store;
