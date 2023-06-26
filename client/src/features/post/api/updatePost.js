import { useDispatch } from "react-redux";
import api from "../../../app/api";
import { showErrorMessage, showMessage } from "../../../app/slices/message";

const { useUpdatePostMutation } = api.injectEndpoints({
    endpoints: build => ({
        updatePost: build.mutation({
            query: ({ postId, patch }) => ({
                url: `posts/${postId}`,
                method: "PATCH",
                body: patch,
            }),
            invalidatesTags: (result, error, { postId }) => [
                { type: "Post", id: postId },
            ],
        }),
    }),
});

export const useToggleShowLikes = (postId, showLikes) => {
    const dispatch = useDispatch();
    const [request, result] = useUpdatePostMutation();
    const toggleShowLikes = async () => {
        const hiddenLikes = "O número de curtidas da sua publicação foi ocultado.";
        const showingLikes =
            "O número de curtidas da sua publicação agora é exibido.";

        try {
            await request({
                postId,
                patch: { showLikes: !showLikes },
            }).unwrap();

            dispatch(
                showMessage({
                    text: showLikes ? hiddenLikes : showingLikes,
                    duration: 5000,
                })
            );
        } catch (error) {
            dispatch(showErrorMessage({ error }));
        }
    };

    return [toggleShowLikes, result];
};

export const useToggleShowComments = (postId, showComments) => {
    const dispatch = useDispatch();
    const [request, result] = useUpdatePostMutation();
    const toggleShowComments = async () => {
        const hiddenComments = "Os comentários da sua publicação foram desativados.";
        const showingComments = "Os comentários da sua publicação foram ativados.";

        try {
            await request({
                postId,
                patch: { showComments: !showComments },
            }).unwrap();

            dispatch(
                showMessage({
                    text: showComments ? hiddenComments : showingComments,
                    duration: 5000,
                })
            );
        } catch (error) {
            dispatch(showErrorMessage({ error }));
        }
    };

    return [toggleShowComments, result];
};
