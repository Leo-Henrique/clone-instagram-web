import api from "../../../app/api";
import convertId from "../../../utils/convertId";

export const getPostLikesName = "getPostLikes";

const extendApi = api.injectEndpoints({
    endpoints: build => ({
        [getPostLikesName]: build.query({
            query: postId => `posts/likes/${postId}`,
            transformResponse: res => convertId(res),
            providesTags: [{ type: "Post", id: "LIKES" }]
        }),
    }),
});
