import { useDispatch, useSelector } from "react-redux";

import { showMessage, showErrorMessage } from "../../../../../app/slices/message";
import { requireConfirmation, showOptions } from "../../../../../app/slices/modal";
import SVGViewMore from "../../../../../assets/icons/vectors/view-more.svg";
import useDeletePostMutation from "../../../api/deletePost";
import * as Styled from "./style";

export default function ViewMore({ post }) {
    const dispatch = useDispatch();
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const [deletePost] = useDeletePostMutation();
    const userMasterOptions = () => {
        const options = [
            {
                name: "Excluir",
                danger: true,
                callback: () => {
                    const deleteCallback = async () => {
                        try {
                            const { success } = await deletePost(post.id).unwrap();

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
                            description:
                                "Tem certeza que deseja excluir essa publicação?",
                        },
                    };

                    dispatch(requireConfirmation(confirmationOptions));
                },
            },
            {
                name: "Editar",
                callback: null,
            },
            {
                name: "Ocultar número de curtidas",
                callback: null,
            },
            {
                name: "Desativar comentários",
                callback: null,
            },
            {
                name: "Ir para a publicação",
                callback: null,
            },
            {
                name: "Copiar link",
                callback: null,
            },
        ];

        dispatch(showOptions(options));
    };
    const userCommonOptions = () => {};

    return (
        <Styled.Wrapper
            type="button"
            onClick={
                post.user.id === authUserId ? userMasterOptions : userCommonOptions
            }
        >
            <SVGViewMore aria-label="Ver mais" />
        </Styled.Wrapper>
    );
}
