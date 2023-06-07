import api from "../../../app/api";

const transformResponse = (data, { response: { status } }) => status;

const extendApi = api.injectEndpoints({
    endpoints: build => ({
        follow: build.mutation({
            query: body => ({
                url: "users/follow",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body,
            }),
            transformResponse,
        }),
        unfollow: build.mutation({
            query: body => ({
                url: "users/unfollow",
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body,
            }),
            transformResponse,
        }),
    }),
});

export const { useFollowMutation, useUnfollowMutation } = extendApi;
