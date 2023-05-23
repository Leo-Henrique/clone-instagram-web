import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import api from "./api";
import message from "./slices/message";

const reducer = combineReducers({
    [api.reducerPath]: api.reducer,
    auth,
    message,
});
const middleware = getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware);
const store = configureStore({ reducer, middleware });

export default store;
