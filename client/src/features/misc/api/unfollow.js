import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import api from "../../../app/api";
import { showErrorMessage } from "../../../app/slices/message";
import { requireConfirmation } from "../../../app/slices/modal";
import { updateUser } from "../../auth/slices/auth";
import { notWarnNewPosts } from "../../feed/slices/newPosts";

const { useUnfollowMutation } = api.injectEndpoints({
    endpoints: build => ({
        unfollow: build.mutation({
            query: userId => ({
                url: `users/unfollow/${userId}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, userId) => [
                { type: "User", id: userId },
            ],
            onQueryStarted: async (
                userId,
                { dispatch, getState, queryFulfilled }
            ) => {
                const { following } = getState().auth.user;

                try {
                    await queryFulfilled;

                    if (following.includes(userId)) {
                        await dispatch(
                            updateUser({
                                following: following.filter(id => id !== userId),
                            })
                        );

                        if (!getState().auth.user.following.length)
                            dispatch(updateUser());
                    }
                } catch {
                    dispatch(
                        showErrorMessage({
                            text: "Não foi possível atualizar as informações.",
                            suggestReload: true,
                        })
                    );
                }
            },
        }),
    }),
});

export default function useUnfollow(user) {
    const dispatch = useDispatch();
    const [request, result] = useUnfollowMutation();
    const { pathname } = useLocation();
    const unfollow = async () => {
        try {
            await request(user.id).unwrap();

            if (pathname === "/" && user.hasPosts) dispatch(notWarnNewPosts());
        } catch (error) {
            dispatch(showErrorMessage({ error }));
        }
    };
    const confirm = () => {
        const options = {
            action: {
                name: "Deixar de seguir",
                callback: unfollow,
            },
            template: {
                name: "UNFOLLOW",
                props: user,
            },
        };

        dispatch(requireConfirmation(options));
    };

    return [confirm, result];
}
