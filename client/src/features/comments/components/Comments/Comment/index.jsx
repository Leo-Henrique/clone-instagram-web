import Like from "../../../../misc/components/Like";
import UserBadge from "../../../../misc/components/UserBadge";
import Actions from "./Actions";
import * as Styled from "./style";

export default function Comment({ isLegend, post, comment }) {
    if (isLegend)
        return (
            <Styled.Wrapper $isLegend={isLegend}>
                <UserBadge showUsername={false} user={post.user} />

                <Styled.Main>
                    <Styled.Header>
                        <UserBadge showPicture={false} user={post.user} />

                        <Styled.CreatedAt ISODate={post.createdAt} />

                        <Styled.LegendAuthor>Autor</Styled.LegendAuthor>
                    </Styled.Header>

                    <Styled.Content maxRows={Infinity}>{post.legend}</Styled.Content>
                </Styled.Main>
            </Styled.Wrapper>
        );

    return (
        <Styled.Wrapper>
            <UserBadge showUsername={false} user={comment.user} />

            <Styled.Main>
                <Styled.Header>
                    <UserBadge showPicture={false} user={comment.user} />

                    <Styled.CreatedAt ISODate={comment.createdAt} />
                </Styled.Header>

                <Styled.Content maxRows={2}>{comment.content}</Styled.Content>

                <Actions postId={post.id} postAuthor={post.user} {...comment} />
            </Styled.Main>

            <Like
                what="comentário"
                id={comment.id}
                // postId={post.id}
                likes={comment.likes}
                $size={15}
            />
        </Styled.Wrapper>
    );
}
