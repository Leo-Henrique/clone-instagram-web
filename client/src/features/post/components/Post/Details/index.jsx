import { useDispatch, useSelector } from "react-redux";
import { showSignInMessage } from "../../../../../app/slices/message";
import { showComments } from "../../../../../app/slices/modal";
import Legend from "../../../../../components/Misc/Legend";
import Actions from "./Actions";
import Likes from "./Likes";
import * as Styled from "./style";

const FeedInfos = ({ post, isHighlight }) => {
    const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
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
                <Styled.ViewComments
                    onClick={() =>
                        isAuthenticated
                            ? dispatch(showComments(post, isHighlight))
                            : dispatch(showSignInMessage())
                    }
                >
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
            <Actions post={post} isHighlight={isHighlight} />

            {post.showLikes && <Likes post={post} />}

            {!isHighlight && <FeedInfos post={post} isHighlight={isHighlight} />}

            <Styled.CreatedAt ISODate={post.createdAt} />
        </Styled.Wrapper>
    );
}
