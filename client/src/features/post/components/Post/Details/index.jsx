import { useDispatch } from "react-redux";
import { showComments } from "../../../../../app/slices/modal";
import Legend from "../../../../../components/Misc/Legend";
import Actions from "./Actions";
import Likes from "./Likes";
import * as Styled from "./style";

const FeedInfos = ({ post }) => {
    const dispatch = useDispatch();
    const totalComments = post.comments.length;

    return (
        <>
            {post.legend && (
                <Legend text={post.legend}>
                    <Styled.Username to={`/${post.user.username}`}>
                        {post.user.username}
                    </Styled.Username>
                </Legend>
            )}

            {post.showComments && totalComments > 0 && (
                <Styled.ViewComments onClick={() => dispatch(showComments(post))}>
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
