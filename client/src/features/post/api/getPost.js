import api from "../../../app/api";
import convertId from "../../../utils/convertId";

export const getPostLikesName = "getPostLikes";

const extendApi = api.injectEndpoints({
    endpoints: build => ({
        [getPostLikesName]: build.query({
            query: postId => `posts/likes/${postId}`,
            transformResponse: res => convertId(res),
            providesTags: (result, error, postId) => [{ type: "Post", id: postId }],
        }),
        getPost: build.query({
            query: postId => `posts/${postId}`,
            transformResponse: res => {
                const markedMedia = res.media.map(({ persons }) => persons).flat();

                convertId(res, "user");
                convertId(markedMedia, "user");
                return res;
            },
            providesTags: (result, error, postId) =>
                result
                    ? [
                          { type: "User", id: result.user.id },
                          { type: "Post", id: postId },
                      ]
                    : [{ type: "Post", id: postId }],
        }),
    }),
});

export const { useGetPostQuery } = extendApi;
