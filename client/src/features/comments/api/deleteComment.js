import { useDispatch, useSelector } from "react-redux";
import api from "../../../app/api";
import { showErrorMessage, showMessage } from "../../../app/slices/message";

const { useDeleteCommentMutation } = api.injectEndpoints({
    endpoints: build => ({
        deleteComment: build.mutation({
            query: ({ commentId }) => ({
                url: `comments/${commentId}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, { postId }) => [
                { type: "Post", id: postId },
                { type: "Comments", id: postId }
            ],
        }),
    }),
});

export default function useDeleteComment({ commentAuthor, ...ids }) {
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const dispatch = useDispatch();
    const [request, result] = useDeleteCommentMutation();
    const deleteComment = async () => {
        try {
            await request(ids).unwrap();

            const text = () => {
                if (commentAuthor.id === authUserId)
                    return "Seu comentário foi excluído.";

                return "Você excluiu o comentário.";
            };

            dispatch(showMessage({ text: text(), duration: 4500 }));
        } catch (error) {
            dispatch(showErrorMessage({ error }));
        }
    };

    return [deleteComment, result];
}
