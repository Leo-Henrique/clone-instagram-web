import { useDispatch } from "react-redux";
import api from "../../../app/api";
import { showErrorMessage, showMessage } from "../../../app/slices/message";
import { requireConfirmation } from "../../../app/slices/modal";
import { updateUser } from "../../auth/slices/auth";
import { updateFeed } from "../../feed/slices/newPosts";

const { useDeletePostMutation } = api.injectEndpoints({
    endpoints: build => ({
        deletePost: build.mutation({
            query: postId => ({
                url: `posts/${postId}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, postId) => [
                { type: "Post", id: postId },
            ],
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    dispatch(updateUser());
                    dispatch(updateFeed());
                } catch {}
            },
        }),
    }),
});

export default function useDeletePost(postId) {
    const dispatch = useDispatch();
    const [request, result] = useDeletePostMutation();
    const deletePost = async () => {
        try {
            const { success } = await request(postId).unwrap();

            dispatch(showMessage({ text: success }));
        } catch (error) {
            dispatch(showErrorMessage({ error }));
        }
    };
    const confirm = () => {
        const options = {
            action: {
                name: "Excluir",
                callback: deletePost,
            },
            template: {
                name: "DELETE",
                props: {
                    title: "Excluir publicação",
                    description: "Tem certeza que deseja excluir essa publicação?",
                },
            },
        };

        dispatch(requireConfirmation(options));
    };

    return [confirm, result];
}
