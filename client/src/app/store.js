import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import api from "./api";
import message from "./slices/message";
import theme from "./slices/theme";
import breakpoints from "./slices/breakpoints";
import newPosts from "../features/Feed/newPostsSlice";

const reducer = combineReducers({
    [api.reducerPath]: api.reducer,
    auth,
    message,
    theme,
    breakpoints,
    newPosts,
});
const middleware = getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware);
const store = configureStore({ reducer, middleware });

export default store;
