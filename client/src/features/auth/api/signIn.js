import api from "../../../app/api";
import convertId from "../../../utils/convertId";

const extendApi = api.injectEndpoints({
    endpoints: build => ({
        signIn: build.mutation({
            query: body => ({
                url: "auth/signin",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body,
            }),
        }),
        auth: build.query({
            query: () => "auth",
            transformResponse: convertId,
        }),
    }),
});

export const { useSignInMutation, useAuthQuery } = extendApi;
