import api from "../../../app/api";
import convertId from "../../../utils/convertId";

export const getPostLikesName = "getPostLikes";

const extendApi = api.injectEndpoints({
    endpoints: build => ({
        [getPostLikesName]: build.query({
            query: postId => `posts/likes/${postId}`,
            transformResponse: res => convertId(res),
            providesTags: (result, error, postId) => {
                const postTag = { type: "Post", id: postId };

                return result
                    ? [postTag, ...result.map(({ id }) => ({ type: "User", id }))]
                    : [postTag];
            },
        }),
        getPost: build.query({
            query: postId => `posts/${postId}`,
            transformResponse: res => {
                const markedMedia = res.media.map(({ persons }) => persons).flat();

                convertId(res, "user");
                convertId(markedMedia, "user");
                return res;
            },
            providesTags: (result, error, postId) => {
                const postTag = { type: "Post", id: postId };

                return result
                    ? [postTag, { type: "User", id: result.user.id }]
                    : [postTag];
            },
        }),
    }),
});

export const { useGetPostQuery } = extendApi;
