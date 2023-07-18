import { useSelector } from "react-redux";
import QueryError from "../../../../components/Alerts/QueryError";
import Spinner from "../../../../components/Loaders/Spinner";
import { useGetCommentsQuery } from "../../api/getComments";
import Comment from "./Comment";
import NoComments from "./NoComments";
import * as Styled from "./style";

export default function Comments({
    post,
    isHighlight,
    bgColorTheme = "background",
}) {
    const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
    const {
        data: comments,
        isLoading,
        isSuccess,
        isError,
        error,
        refetch,
    } = useGetCommentsQuery(post?.id, { skip: !post || !isAuthenticated });
    const renderNoComments = () => {
        if (isHighlight) return !comments?.length;
        else return !post.legend && !comments?.length;
    };

    return (
        <Styled.Wrapper
            {...(isSuccess && { as: "ul" })}
            $isHighlight={isHighlight}
            $bgColorTheme={bgColorTheme}
        >
            {!isAuthenticated ? (
                <NoComments />
            ) : !post || isLoading ? (
                <Spinner $expandHeight={true} />
            ) : isError ? (
                <QueryError error={error} refetch={refetch} />
            ) : renderNoComments() ? (
                <NoComments />
            ) : (
                <>
                    {!isHighlight && post.legend && <Comment isLegend post={post} />}

                    {comments.map(comment => (
                        <Comment
                            key={comment.id}
                            post={post}
                            comment={comment}
                            isHighlight={isHighlight}
                        />
                    ))}
                </>
            )}
        </Styled.Wrapper>
    );
}
