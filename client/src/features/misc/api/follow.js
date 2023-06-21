import api from "../../../app/api";
import { updateUser } from "../../auth/slices/auth";

const updateCache = async (
    instagramUserId,
    { dispatch, getState, queryFulfilled }
) => {
    const authUser = getState().auth.user;
    const updateAuthUser = () => {
        const { following } = authUser;
        let newFollowing;

        if (following.includes(instagramUserId)) 
            newFollowing = following.filter(id => id !== instagramUserId);
        else newFollowing = [...following, instagramUserId];

        dispatch(updateUser({ following: newFollowing }));
    };
    const updateInstagramUser = draft => {
        const instagramUser = draft.find(({ id }) => id === instagramUserId);
        const { followers } = instagramUser;

        if (followers.includes(authUser.id))
            instagramUser.followers = followers.filter(id => id !== authUser.id);
        else followers.push(authUser.id)
    }

    try {
        await queryFulfilled;

        updateAuthUser();
        dispatch(api.util.updateQueryData("getUsers", undefined, updateInstagramUser));
    } catch {}
};

const extendApi = api.injectEndpoints({
    endpoints: build => ({
        follow: build.mutation({
            query: instagramUserId => ({
                url: `users/follow/${instagramUserId}`,
                method: "POST",
            }),
            onQueryStarted: updateCache,
        }),
        unfollow: build.mutation({
            query: instagramUserId => ({
                url: `users/unfollow/${instagramUserId}`,
                method: "DELETE",
            }),
            onQueryStarted: updateCache,
        }),
    }),
});

export const { useFollowMutation, useUnfollowMutation } = extendApi;
