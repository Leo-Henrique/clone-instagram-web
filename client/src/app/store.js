import { combineReducers, configureStore } from "@reduxjs/toolkit";
import api from "./api";
import auth from "../features/auth/authSlice";

const reducer = combineReducers({
    [api.reducerPath]: api.reducer,
    auth,
});
const middleware = getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware);
const store = configureStore({ reducer, middleware });

export default store;
