import { useRef } from "react";
import { useSelector } from "react-redux";
import QueryError from "../../../../components/Alerts/QueryError";
import useInfiniteScroll from "../../../../hooks/useInfiniteScroll";
import Post from "../../../post/components/Post";
import getPostsName from "../../api/getPosts";
import Infos from "../Infos";
import * as Styled from "./style";
import Spinner from "../../../../components/Loaders/Spinner";

export default function Feed() {
    const isBreakpointLg = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointLg
    );
    const wrapperRef = useRef(null);
    const [posts, { isLoading, isFetching, isError, error, refetch }, scrollFinished] = useInfiniteScroll({
        endpoint: { name: getPostsName },
        wrapperRef,
    });

    return (
        <Styled.Wrapper>
            <Styled.Posts ref={wrapperRef}>
                {!isLoading && isFetching && <Spinner $size={26} />}

                {isError ? (
                    <QueryError
                        error={error}
                        refetch={refetch}
                        {...(isBreakpointLg || { $center: false })}
                    />
                ) : (
                    <>
                        {posts.map((post, index, array) => (
                            <Post key={post?.id || index} data={post} />
                        ))}
                    </>
                )}

                {isFetching && <Spinner $size={26} />}

                {scrollFinished && <>Acabou</>}
            </Styled.Posts>

            {isBreakpointLg || <Infos />}
        </Styled.Wrapper>
    );
}
