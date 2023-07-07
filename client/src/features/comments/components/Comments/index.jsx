import Spinner from "../../../../components/Loaders/Spinner";
import Like from "../../../misc/components/Like";
import UserBadge from "../../../misc/components/UserBadge";
import Actions from "./Actions";
import NoComments from "./NoComments";
import * as Styled from "./style";

export default function Comments({ post }) {
    const comments = () => {
        const highlightedLegend = {
            isLegend: true,
            id: post.id,
            user: post.user,
            content: post.legend,
            createdAt: post.createdAt,
        };

        if (post.legend)
            return post.showComments
                ? [highlightedLegend, ...post.comments]
                : [highlightedLegend];

        return post.comments;
    };

    if (!post)
        return (
            <Styled.Wrapper $loading={true}>
                <Spinner />
            </Styled.Wrapper>
        );

    if (!comments().length) return <NoComments />;

    return (
        <Styled.Wrapper>
            {comments().map(comment => (
                <Styled.Comment key={comment.id} $isLegend={comment.isLegend}>
                    <UserBadge showUsername={false} user={comment.user} />

                    <Styled.Content>
                        <UserBadge showPicture={false} user={comment.user} />

                        {comment.content}

                        <Actions
                            postId={post.id}
                            postAuthor={post.user}
                            {...comment}
                        />
                    </Styled.Content>

                    {comment.isLegend || (
                        <Like
                            what="comentário"
                            id={comment.id}
                            postId={post.id}
                            likes={comment.likes}
                            $size={15}
                        />
                    )}
                </Styled.Comment>
            ))}
        </Styled.Wrapper>
    );
}
