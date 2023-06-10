import api from "../../../app/api";

const updateCache = async (arg, { dispatch, getState, queryFulfilled }) => {
    const update = draft => {
        const authenticatedUserId = getState().auth.user.userId;
        const user = draft.find(({ username }) => username === arg.username);
        const { followers } = user;

        if (followers.includes(authenticatedUserId))
            user.followers = followers.filter(id => id !== authenticatedUserId);
        else followers.push(authenticatedUserId);
    };

    try {
        await queryFulfilled;
        dispatch(api.util.updateQueryData("getUsers", undefined, update));
    } catch {}
};

const extendApi = api.injectEndpoints({
    endpoints: build => ({
        follow: build.mutation({
            query: body => ({
                url: "users/follow",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body,
            }),
            onQueryStarted: updateCache,
        }),
        unfollow: build.mutation({
            query: body => ({
                url: "users/unfollow",
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body,
            }),
            onQueryStarted: updateCache,
        }),
    }),
});

export const { useFollowMutation, useUnfollowMutation } = extendApi;
