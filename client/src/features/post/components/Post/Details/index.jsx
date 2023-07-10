import { useDispatch } from "react-redux";
import { showPost } from "../../../../../app/slices/modal";
import CreatedAt from "../../../../../components/Misc/CreatedAt";
import ViewMore from "../../../../../components/Misc/ViewMore";
import Actions from "./Actions";
import Likes from "./Likes";
import * as Styled from "./style";

const FeedInfos = ({ post: { id, user, legend, showComments, comments } }) => {
    const dispatch = useDispatch();
    const totalComments = comments.length;

    return (
        <>
            {legend && (
                <ViewMore>
                    <Styled.Username to={`/${user.username}`}>
                        {user.username}
                    </Styled.Username>

                    {legend}
                </ViewMore>
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
