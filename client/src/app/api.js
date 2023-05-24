import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_DOMAIN } from "../config";

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${SERVER_DOMAIN}/api`,
        prepareHeaders: (headers, { getState }) => {
            const { token } = getState().auth;

            if (token) headers.set("Authorization", `Bearer ${token}`);

            return headers;
        },
    }),
    endpoints: () => ({}),
});

export default api;
