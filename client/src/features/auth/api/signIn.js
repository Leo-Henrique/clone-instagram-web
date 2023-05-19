import api from "../../../store/api";

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
        }),
    }),
});

export const { useSignInMutation, useAuthQuery } = extendApi;
