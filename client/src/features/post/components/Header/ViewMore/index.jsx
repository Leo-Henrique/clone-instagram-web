import { useDispatch, useSelector } from "react-redux";

import { showOptions } from "../../../../../app/slices/modal";
import SVGViewMore from "../../../../../assets/icons/vectors/view-more.svg";
import useCopy from "../../../../../hooks/useCopy";
import useDeletePost from "../../../api/deletePost";
import { useToggleShowComments, useToggleShowLikes } from "../../../api/updatePost";
import * as Styled from "./style";

export default function ViewMore({ post }) {
    const dispatch = useDispatch();
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const deletePost = useDeletePost(post.id);
    const toggleShowLikes = useToggleShowLikes(post.id, post.showLikes);
    const toggleShowComments = useToggleShowComments(post.id, post.showComments);
    const postLink = `/post/${post.id}`;
    const copyPostLink = useCopy({
        text: location.origin + postLink,
        success: "O link da publicação foi copiado para a área de transferência.",
        error: "Não foi possível copiar o link da publicação.",
    });
    const globalOptions = [
        {
            name: "Ir para a publicação",
            callback: postLink,
        },
        {
            name: "Copiar link",
            callback: copyPostLink,
        },
    ];
    const authUserOptions = [
        {
            name: "Excluir",
            danger: true,
            callback: deletePost,
        },
        {
            name: "Editar",
            callback: () => {},
        },
        {
            name: post.showLikes
                ? "Ocultar número de curtidas"
                : "Exibir número de curtidas",
            callback: toggleShowLikes,
        },
        {
            name: post.showComments ? "Desativar comentários" : "Ativar comentários",
            callback: toggleShowComments,
        },
        ...globalOptions,
    ];
    const instagramUserOptions = [
        {
            name: "Deixar de seguir",
            danger: true,
            callback: () => {},
        },
        ...globalOptions,
    ];
    const viewOptions = () => {
        const isAuthUserPost = post.user.id === authUserId;

        dispatch(
            showOptions(isAuthUserPost ? authUserOptions : instagramUserOptions)
        );
    };

    return (
        <Styled.Wrapper type="button" onClick={viewOptions}>
            <SVGViewMore aria-label="Ver mais" />
        </Styled.Wrapper>
    );
}
