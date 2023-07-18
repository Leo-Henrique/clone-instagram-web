import { useDispatch, useSelector } from "react-redux";
import api from "../../../app/api";
import { showErrorMessage } from "../../../app/slices/message";

const invalidatesTags = (result, error, { postId }) => [
    { type: "Comments", id: postId },
];

const { useLikeCommentMutation, useUnlikeCommentMutation } = api.injectEndpoints({
    endpoints: build => ({
        likeComment: build.mutation({
            query: ({ commentId }) => ({
                url: `comments/likes/${commentId}`,
                method: "POST",
            }),
            invalidatesTags,
        }),
        unlikeComment: build.mutation({
            query: ({ commentId }) => ({
                url: `comments/likes/${commentId}`,
                method: "DELETE",
            }),
            invalidatesTags,
        }),
    }),
});

export default function useToggleLikeComment(ids, likes) {
    const dispatch = useDispatch();
    const authUserId = useSelector(({ auth }) => auth.user?.id);
    const [like, likeResult] = useLikeCommentMutation();
    const [unlike, unlikeResult] = useUnlikeCommentMutation();
    const toggleLikeComment = async () => {
        try {
            if (likes.includes(authUserId)) await unlike(ids).unwrap();
            else await like(ids).unwrap();
        } catch (error) {
            dispatch(showErrorMessage({ error }));
        }
    };

    return [toggleLikeComment, likeResult, unlikeResult];
}
