import { combineReducers, configureStore } from "@reduxjs/toolkit";

import newPosts from "../features/Feed/slices/newPosts";
import auth from "../features/auth/slices/auth";
import api from "./api";
import breakpoints from "./slices/breakpoints";
import confirmation from "./slices/confirmation";
import message from "./slices/message";
import theme from "./slices/theme";

const reducer = combineReducers({
    [api.reducerPath]: api.reducer,
    auth,
    message,
    theme,
    breakpoints,
    newPosts,
    confirmation,
});
const middleware = getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware);
const store = configureStore({ reducer, middleware });

export default store;
