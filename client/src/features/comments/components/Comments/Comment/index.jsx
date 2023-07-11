import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Legend from "../../../../../components/Misc/Legend";
import useMotion from "../../../../../hooks/useMotion";
import Like from "../../../../misc/components/Like";
import UserBadge from "../../../../misc/components/UserBadge";
import Actions from "./Actions";
import * as Styled from "./style";

const Author = ({ user, createdAt, legend }) => (
    <Styled.Wrapper $isLegend>
        <UserBadge showUsername={false} user={user} />

        <Styled.Main>
            <Styled.Header>
                <UserBadge showPicture={false} user={user} />

                <Styled.CreatedAt ISODate={createdAt} />

                <Styled.AuthorWarning>Autor</Styled.AuthorWarning>
            </Styled.Header>

            <Legend text={legend} viewMore={{ use: false }} />
        </Styled.Main>
    </Styled.Wrapper>
);

export default function Comment({ isLegend, post, comment, isReply }) {
    const [showReplies, setShowReplies] = useState(false);
    const motionProps = useMotion({ variants: "height" });

    if (isLegend) return <Author {...post} />;

    return (
        <Styled.Wrapper $isReply={isReply}>
            <UserBadge showUsername={false} user={comment.user} />

            <Styled.Main>
                <Styled.Header>
                    <UserBadge showPicture={false} user={comment.user} />

                    <Styled.CreatedAt ISODate={comment.createdAt} />
                </Styled.Header>

                <Legend text={comment.content} viewMore={{ maxRows: 8 }} />

                <Actions
                    postId={post.id}
                    postAuthor={post.user}
                    showReplies={showReplies}
                    setShowReplies={setShowReplies}
                    {...comment}
                />
            </Styled.Main>

            <Like
                what="comentário"
                requestArgs={{ commentId: comment.id, postId: post.id }}
                id={comment.id}
                likes={comment.likes}
                $size={15}
            />

            <AnimatePresence>
                {showReplies && !!comment?.replies?.length && (
                    <Styled.Replies {...motionProps}>
                        {comment.replies.map(reply => (
                            <Comment
                                key={reply.id}
                                post={post}
                                comment={reply}
                                isReply
                            />
                        ))}
                    </Styled.Replies>
                )}
            </AnimatePresence>
        </Styled.Wrapper>
    );
}
