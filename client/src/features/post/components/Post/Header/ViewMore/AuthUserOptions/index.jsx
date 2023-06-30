import { useDispatch } from "react-redux";
import { showOptions } from "../../../../../../../app/slices/modal";
import SVGViewMore from "../../../../../../../assets/icons/vectors/view-more.svg";
import useDisable from "../../../../../../../hooks/useDisable";
import useDeletePost from "../../../../../api/deletePost";
import {
    useToggleShowComments,
    useToggleShowLikes,
} from "../../../../../api/updatePost";
import * as Styled from "../style";

export default function AuthUserOptions({ post, globalOptions }) {
    const dispatch = useDispatch();
    const [deletePost] = useDeletePost(post.id);
    const [toggleShowLikes] = useToggleShowLikes(post.id, post.showLikes);
    const [toggleShowComments] = useToggleShowComments(post.id, post.showComments);
    const { buttonDisabled } = useDisable();
    const options = [
        {
            name: "Excluir",
            danger: true,
            callback: deletePost,
        },
        {
            name: "Editar",
            callback: buttonDisabled,
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

    return (
        <Styled.Wrapper type="button" onClick={() => dispatch(showOptions(options))}>
            <SVGViewMore aria-label="Ver mais" />
        </Styled.Wrapper>
    );
}
