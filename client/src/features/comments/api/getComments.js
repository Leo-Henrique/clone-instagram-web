import api from "../../../app/api";
import convertId from "../../../utils/convertId";

export const getCommentLikesName = "getCommentLikes";

export const { useGetCommentsQuery } = api.injectEndpoints({
    endpoints: build => ({
        [getCommentLikesName]: build.query({
            query: ({ commentId }) => `comments/likes/${commentId}`,
            transformResponse: res => convertId(res),
            providesTags: (result, error, { postId }) => {
                const commentsTag = { type: "Comments", id: postId };

                return result
                    ? [
                          commentsTag,
                          ...result.map(({ id }) => ({ type: "User", id })),
                      ]
                    : [commentsTag];
            },
        }),
        getComments: build.query({
            query: postId => `comments/${postId}`,
            transformResponse: res => {
                const replies = res.map(({ replies }) => replies).flat();

                convertId(res, "user");
                convertId(replies, "user");
                return res;
            },
            providesTags: (result, error, postId) => [
                { type: "Comments", id: postId },
            ],
        }),
    }),
});
