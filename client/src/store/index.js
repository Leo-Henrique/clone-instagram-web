import { combineReducers, configureStore } from "@reduxjs/toolkit";
import api from "./api";

const reducer = combineReducers({
    [api.reducerPath]: api.reducer,
});
const middleware = getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware);
const store = configureStore({ reducer, middleware });

export default store;
