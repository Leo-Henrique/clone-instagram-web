import api from "../../../app/api";

const { useDeletePostMutation } = api.injectEndpoints({
    endpoints: build => ({
        deletePost: build.mutation({
            query: postId => ({
                url: `posts/${postId}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, postId) => [
                { type: "Posts", id: postId },
                "Users"
            ],
        }),
    }),
});

export default useDeletePostMutation;
