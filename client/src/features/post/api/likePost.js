import { useDispatch, useSelector } from "react-redux";
import api from "../../../app/api";
import { showErrorMessage } from "../../../app/slices/message";

const invalidatesTags = (result, error, postId) => [
    { type: "Post", id: postId },
    { type: "Post", id: "LIKES" },
];

const { useLikePostMutation, useUnlikePostMutation } = api.injectEndpoints({
    endpoints: build => ({
        likePost: build.mutation({
            query: postId => ({
                url: `posts/likes/${postId}`,
                method: "POST",
            }),
            invalidatesTags,
        }),
        unlikePost: build.mutation({
            query: postId => ({
                url: `posts/likes/${postId}`,
                method: "DELETE",
            }),
            invalidatesTags,
        }),
    }),
});

export default function useToggleLikePost({ likes, id }) {
    const dispatch = useDispatch();
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const [like, likeResult] = useLikePostMutation();
    const [unlike, unlikeResult] = useUnlikePostMutation();
    const toggleLikePost = async () => {
        try {
            likes.includes(authUserId) ? await unlike(id) : await like(id);
        } catch (error) {
            dispatch(showErrorMessage({ error }));
        }
    };

    return [toggleLikePost, likeResult, unlikeResult];
}
