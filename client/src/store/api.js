import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api",
        prepareHeaders: (headers, { getState }) => {
            const { token } = getState().auth;

            if (token) headers.set("Authorization", `Bearer ${token}`);

            return headers;
        },
    }),
    endpoints: () => ({}),
});

export default api;
