import api from "../../../app/api";

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
            transformResponse: res => {
                const { _id } = res;

                delete res._id;
                return { userId: _id, ...res };
            }
        }),
    }),
});

export const { useSignInMutation, useAuthQuery } = extendApi;
