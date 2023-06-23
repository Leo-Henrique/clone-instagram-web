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
            transformResponse: res => convertId(res, ["user"]),
        }),
        auth: build.query({
            query: () => "auth",
            transformResponse: res => convertId(res),
        }),
    }),
});

export const { useSignInMutation, useAuthQuery } = extendApi;
