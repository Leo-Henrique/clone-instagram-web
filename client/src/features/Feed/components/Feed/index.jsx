import { useSelector } from "react-redux";

import QueryError from "../../../../components/Alerts/QueryError";
import Spinner from "../../../../components/Loaders/Spinner";
import Post from "../../../post/components/Post";
import useGetPostsQuery from "../../api/getPosts";
import Infos from "../Infos";
import * as Styled from "./style";

export default function Feed() {
    const isBreakpointLg = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointLg
    );
    const { data, isError, error, isFetching } = useGetPostsQuery();
    const posts = data || Array.from({ length: 4 });

    return (
        <Styled.Wrapper>
            <Styled.Posts>
                {/* {data && isFetching && <Spinner $size={26} />} */}

                {isError ? (
                    <QueryError error={error} />
                ) : (
                    <>
                        {posts.map((post, index) => (
                            <Post key={post?.id || index} post={post} />
                        ))}
                    </>
                )}

                {/* {data && isFetching && <Spinner $size={26} />} */}
            </Styled.Posts>

            {isBreakpointLg || <Infos />}
        </Styled.Wrapper>
    );
}
