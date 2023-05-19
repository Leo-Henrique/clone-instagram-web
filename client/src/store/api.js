import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api",
        prepareHeaders: headers => {
            const { token } = localStorage;

            if (token)
                headers.set("Authorization", `Bearer ${JSON.parse(token)}`);

            return headers;
        },
    }),
    endpoints: () => ({}),
});

export default api;
