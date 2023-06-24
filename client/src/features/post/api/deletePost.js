import { useDispatch } from "react-redux";
import api from "../../../app/api";
import { showErrorMessage, showMessage } from "../../../app/slices/message";
import { requireConfirmation } from "../../../app/slices/modal";
import { updateUser } from "../../auth/slices/auth";

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
                } catch {}
            },
        }),
    }),
});

export default function useDeletePost(postId) {
    const dispatch = useDispatch();
    const [request] = useDeletePostMutation();

    return () => {
        const deleteCallback = async () => {
            try {
                const { success } = await request(postId).unwrap();

                dispatch(showMessage({ text: success }));
            } catch (error) {
                dispatch(showErrorMessage({ error }));
            }
        };
        const confirmationOptions = {
            action: { name: "Excluir", callback: deleteCallback },
            content: "DELETE",
            template: {
                title: "Excluir publicação",
                description: "Tem certeza que deseja excluir essa publicação?",
            },
        };
        
        dispatch(requireConfirmation(confirmationOptions));
    };
}
