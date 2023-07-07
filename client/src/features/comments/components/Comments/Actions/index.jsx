import { useDispatch, useSelector } from "react-redux";
import { showOptions } from "../../../../../app/slices/modal";
import SVGViewMore from "../../../../../assets/icons/vectors/view-more.svg";
import CreatedAt from "../../../../../components/Misc/CreatedAt";
import useDeleteComment from "../../../api/deleteComment";
import { replyComment } from "../../../slices/comment";
import * as Styled from "./style";

export default function Actions({
    postId,
    postAuthor,
    user: commentAuthor,
    id: commentId,
    createdAt,
    likes,
    isLegend,
}) {
    const dispatch = useDispatch();
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const [deleteComment] = useDeleteComment({ commentAuthor, postId, commentId });
    const viewOptions = () => {
        const options = [
            {
                name: "Excluir",
                danger: true,
                callback: deleteComment,
            },
        ];

        dispatch(showOptions(options));
    };
    const reply = () => {
        const options = {
            id: commentId,
            username: commentAuthor.username,
        };

        dispatch(replyComment(options));
    };
    const totalLikes = likes?.length;
    const allowOptions =
        postAuthor.id === authUserId || commentAuthor.id === authUserId;

    return (
        <Styled.Wrapper>
            <CreatedAt ISODate={createdAt} />

            {isLegend || (
                <>
                    {totalLikes > 0 && (
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
                </>
            )}
        </Styled.Wrapper>
    );
}
