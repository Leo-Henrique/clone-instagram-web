import { Link } from "react-router-dom";

import Actions from "./Actions";
import Likes from "./Likes";
import * as Styled from "./style";

const FeedInfos = ({ post: { user, legend, showComments, comments } }) => {
    const totalComments = comments?.length;
    const totalCommentsFormatted = totalComments?.toLocaleString("pt-BR");

    return (
        <>
            {legend && (
                <Styled.Legend>
                    <Link to={`/${user.username}`}>{user.username}</Link>

                    <p>{legend}</p>
                </Styled.Legend>
            )}

            {showComments && totalComments > 0 && (
                <Styled.ViewComments>
                    {totalComments > 1
                        ? `Ver todos os ${totalCommentsFormatted} comentários`
                        : "Ver 1 comentário"}
                </Styled.ViewComments>
            )}
        </>
    );
};

export default function Details({ post, highlight }) {
    const createdAt = new Date(post.createdAt).toString();
    const tempDate = createdAt.replace(" GMT-0300 (Horário Padrão de Brasília)", "");

    return (
        <Styled.Wrapper $highlight={highlight}>
            <Actions post={post} />

            {post.showLikes && <Likes post={post} />}

            {!highlight && <FeedInfos post={post} />}

            <Styled.Date dateTime={post.createdAt}>{tempDate}</Styled.Date>
        </Styled.Wrapper>
    );
}
