import api from "../../../app/api";
import { updateUser } from "../../auth/slices/auth";

const { useDeletePostMutation } = api.injectEndpoints({
    endpoints: build => ({
        deletePost: build.mutation({
            query: postId => ({
                url: `posts/${postId}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, postId) => [
                { type: "Posts", id: postId },
            ],
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    dispatch(updateUser());
                } catch {}
            },
        }),
    }),
});

export default useDeletePostMutation;
