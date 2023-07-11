import { useDispatch } from "react-redux";
import { showPost } from "../../../../../app/slices/modal";
import Legend from "../../../../../components/Misc/Legend";
import Actions from "./Actions";
import Likes from "./Likes";
import * as Styled from "./style";

const FeedInfos = ({ post: { id, user, legend, showComments, comments } }) => {
    const dispatch = useDispatch();
    const totalComments = comments.length;

    return (
        <>
            {legend && (
                <Legend text={legend}>
                    <Styled.Username to={`/${user.username}`}>
                        {user.username}
                    </Styled.Username>
                </Legend>
            )}

            {showComments && totalComments > 0 && (
                <Styled.ViewComments onClick={() => dispatch(showPost(id))}>
                    {totalComments > 1
                        ? `Ver todos os ${totalComments.toLocaleString(
                              "pt-BR"
                          )} comentários`
                        : "Ver 1 comentário"}
                </Styled.ViewComments>
            )}
        </>
    );
};

export default function Details({ post, isHighlight }) {
    return (
        <Styled.Wrapper>
            <Actions post={post} />

            {post.showLikes && <Likes post={post} />}

            {!isHighlight && <FeedInfos post={post} />}

            <Styled.CreatedAt ISODate={post.createdAt} />
        </Styled.Wrapper>
    );
}
