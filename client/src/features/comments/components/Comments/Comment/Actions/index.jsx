import { useDispatch, useSelector } from "react-redux";
import { showOptions } from "../../../../../../app/slices/modal";
import SVGViewMore from "../../../../../../assets/icons/vectors/view-more.svg";
import useDeleteComment from "../../../../api/deleteComment";
import { replyComment } from "../../../../slices/comment";
import * as Styled from "./style";

export default function Actions({
    postId,
    postAuthor,
    user: commentAuthor,
    id: commentId,
    likes,
    replies,
    showReplies,
    setShowReplies,
}) {
    const dispatch = useDispatch();
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const [deleteComment] = useDeleteComment({ commentAuthor, postId, commentId });
    const viewOptions = () => {
        dispatch(
            showOptions([
                {
                    name: "Excluir",
                    danger: true,
                    callback: deleteComment,
                },
            ])
        );
    };
    const reply = () => {
        dispatch(
            replyComment({
                id: commentId,
                username: commentAuthor.username,
            })
        );
    };
    const totalLikes = likes?.length;
    const allowOptions =
        postAuthor.id === authUserId || commentAuthor.id === authUserId;

    return (
        <Styled.Wrapper>
            {!!totalLikes && (
                <Styled.Action>
                    {totalLikes.toLocaleString("pt-BR")}
                    {"\n"}
                    {totalLikes > 1 ? "curtidas" : "curtida"}
                </Styled.Action>
            )}

            <Styled.Action onClick={reply}>Responder</Styled.Action>

            {allowOptions && (
                <Styled.Action onClick={viewOptions}>
                    <SVGViewMore />
                </Styled.Action>
            )}

            {!!replies?.length && (
                <Styled.ToggleReplies onClick={() => setShowReplies(!showReplies)}>
                    {showReplies
                        ? "Ocultar respostas"
                        : `Ver respostas (${replies.length})`}
                </Styled.ToggleReplies>
            )}
        </Styled.Wrapper>
    );
}