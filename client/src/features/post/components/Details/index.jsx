import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SVGComments from "../../../../assets/icons/vectors/comments.svg";
import SVGLike from "../../../../assets/icons/vectors/heart.svg";
import SVGSave from "../../../../assets/icons/vectors/save.svg";
import SVGShare from "../../../../assets/icons/vectors/share.svg";
import Skeleton from "../../../../components/Loaders/Skeleton";
import * as Styled from "./style";

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
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const likes = post?.likes?.length;
    const likesFormatted = likes?.toLocaleString("pt-BR");
    const createdAt = post?.createdAt && new Date(post.createdAt).toString();
    const tempDate =
        createdAt && createdAt.replace(" GMT-0300 (Horário Padrão de Brasília)", "");

    if (!post) return <Skeleton count={2} />;

    return (
        <Styled.Wrapper $highlight={highlight}>
            <Styled.Actions>
                {actions.map(({ desc, icon, show }) => (
                    <>
                        {show && (
                            <Styled.Action key={desc}>
                                <button type="button" aria-label={desc}>
                                    {icon}
                                </button>
                            </Styled.Action>
                        )}
                    </>
                ))}
            </Styled.Actions>

            {post.showLikes && (
                <>
                    {likes > 0 ? (
                        <Styled.Likes type="button">
                            {likesFormatted} {likes > 1 ? "curtidas" : "curtida"}
                        </Styled.Likes>
                    ) : (
                        post.user.id !== authUserId && (
                            <Styled.LikeWarning>
                                Seja a primeira pessoa a curtir essa publicação
                            </Styled.LikeWarning>
                        )
                    )}
                </>
            )}

            <Styled.Date dateTime={post.createdAt}>{tempDate}</Styled.Date>

            {!highlight && post.legend && (
                <Styled.Legend>
                    <Link to={`/${post.user.username}`}>{post.user.username}</Link>

                    <p>{post.legend}</p>
                </Styled.Legend>
            )}
        </Styled.Wrapper>
    );
}
