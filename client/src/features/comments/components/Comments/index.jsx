import QueryError from "../../../../components/Alerts/QueryError";
import Spinner from "../../../../components/Loaders/Spinner";
import { useGetCommentsQuery } from "../../api/getComments";
import Comment from "./Comment";
import NoComments from "./NoComments";
import * as Styled from "./style";

export default function Comments({ post }) {
    const {
        data: comments,
        isLoading,
        isSuccess,
        isError,
        error,
        refetch,
    } = useGetCommentsQuery(post?.id, {
        skip: !post || !post?.showComments,
    });

    return (
        <Styled.Wrapper {...(isSuccess && { as: "ul" })}>
            {!post || isLoading ? (
                <Spinner $expandHeight={true} />
            ) : isError ? (
                <QueryError error={error} refetch={refetch} />
            ) : !post.legend && !comments?.length ? (
                <NoComments />
            ) : (
                <>
                    {post.legend && <Comment isLegend post={post} />}

                    {comments.map(comment => (
                        <Comment key={comment.id} post={post} comment={comment} />
                    ))}
                </>
            )}
        </Styled.Wrapper>
    );
}
