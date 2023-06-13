import QueryError from "../../../../components/Alerts/QueryError";
import Post from "../../../post/components/Post";
import useGetPostsQuery from "../../api/getPosts";
import * as Styled from "./style";

export default function Feed() {
    const { data, isError, error } = useGetPostsQuery();
    const posts = data ? data : Array.from({ length: 4 });

    if (isError) return <QueryError error={error} pageError={true} />;

    return (
        <Styled.Wrapper>
            <Styled.Posts>
                {posts.map((post, index) => (
                    <Post key={post?.id || index} post={post} />
                ))}
            </Styled.Posts>

            <Styled.Users></Styled.Users>
        </Styled.Wrapper>
    );
}
