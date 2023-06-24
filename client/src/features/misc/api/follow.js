import api from "../../../app/api";
import { showErrorMessage } from "../../../app/slices/message";
import { updateUser } from "../../auth/slices/auth";

const invalidatesTags = (result, error, instagramUserId) => [
    { type: "User", id: instagramUserId },
];

const onQueryStarted = async (
    instagramUserId,
    { dispatch, getState, queryFulfilled }
) => {
    try {
        await queryFulfilled;

        const { following: oldFollowing } = getState().auth.user;
        let following;

        if (oldFollowing.includes(instagramUserId))
            following = oldFollowing.filter(id => id !== instagramUserId);
        else following = [...oldFollowing, instagramUserId];

        dispatch(updateUser({ following }));
    } catch {
        dispatch(
            showErrorMessage({
                text: "Não foi possível atualizar as informações.",
                suggestReload: true,
            })
        );
    }
};

const extendApi = api.injectEndpoints({
    endpoints: build => ({
        follow: build.mutation({
            query: instagramUserId => ({
                url: `users/follow/${instagramUserId}`,
                method: "POST",
            }),
            invalidatesTags,
            onQueryStarted,
        }),
        unfollow: build.mutation({
            query: instagramUserId => ({
                url: `users/unfollow/${instagramUserId}`,
                method: "DELETE",
            }),
            invalidatesTags,
            onQueryStarted,
        }),
    }),
});

export const { useFollowMutation, useUnfollowMutation } = extendApi;
