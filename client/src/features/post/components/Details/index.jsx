import { Fragment } from "react";
import { Link } from "react-router-dom";

import SVGComments from "../../../../assets/icons/vectors/comments.svg";
import SVGLike from "../../../../assets/icons/vectors/heart.svg";
import SVGSave from "../../../../assets/icons/vectors/save.svg";
import SVGShare from "../../../../assets/icons/vectors/share.svg";
import Likes from "../Likes";
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
    const actions = [
        {
            desc: "Curtir publicação",
            icon: <SVGLike />,
            show: true,
        },
        {
            desc: "Comentar na publicação",
            icon: <SVGComments />,
            show: post?.showComments,
        },
        {
            desc: "Compartilhar publicação",
            icon: <SVGShare />,
            show: true,
        },
        {
            desc: "Salvar a publicação",
            icon: <SVGSave />,
            show: true,
        },
    ];
    const createdAt = new Date(post.createdAt).toString();
    const tempDate = createdAt.replace(" GMT-0300 (Horário Padrão de Brasília)", "");

    return (
        <Styled.Wrapper $highlight={highlight}>
            <Styled.Actions>
                {actions.map(({ desc, icon, show }) => (
                    <Fragment key={desc}>
                        {show && (
                            <Styled.Action>
                                <button type="button" aria-label={desc}>
                                    {icon}
                                </button>
                            </Styled.Action>
                        )}
                    </Fragment>
                ))}
            </Styled.Actions>

            {post.showLikes && <Likes post={post} />}

            {!highlight && <FeedInfos post={post} />}

            <Styled.Date dateTime={post.createdAt}>{tempDate}</Styled.Date>
        </Styled.Wrapper>
    );
}
