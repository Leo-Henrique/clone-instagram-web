import { useDispatch, useSelector } from "react-redux";
import api from "../../../app/api";
import { showErrorMessage } from "../../../app/slices/message";
import { resetComment } from "../slices/comment";

const { useCreateCommentMutation } = api.injectEndpoints({
    endpoints: build => ({
        createComment: build.mutation({
            query: ({ postId, body }) => ({
                url: `comments/${postId}`,
                method: "POST",
                body,
            }),
            invalidatesTags: (result, error, { postId }) => [
                { type: "Post", id: postId },
            ],
        }),
    }),
});

export default function useCreateComment(postId) {
    const dispatch = useDispatch();
    const content = useSelector(({ comment }) => comment.content);
    const reply = useSelector(({ comment }) => comment.reply);
    const [request, result] = useCreateCommentMutation();
    const createComment = async () => {
        try {
            const body = { content, ...(reply.isReply && { replyTo: reply.id }) };

            await request({ postId, body }).unwrap();

            dispatch(resetComment());
        } catch (error) {
            dispatch(showErrorMessage({ error }));
        }
    };

    return [createComment, result];
}