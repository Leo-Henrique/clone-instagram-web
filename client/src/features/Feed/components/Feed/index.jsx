import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import QueryError from "../../../../components/Alerts/QueryError";
import Spinner from "../../../../components/Loaders/Spinner";
import useInfiniteScroll from "../../../../hooks/useInfiniteScroll";
import Post from "../../../post/components/Post";
import getPostsName from "../../api/getPosts";
import Infos from "../Infos";
import * as Styled from "./style";

export default function Feed() {
    const isBreakpointLg = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointLg
    );
    const updateFeed = useSelector(({ newPosts }) => newPosts.updateFeed);
    const wrapperRef = useRef(null);
    const {
        result: { data: posts, isLoading, isFetching, isError, error, refetch },
        scrollFinished,
        resetScroll,
    } = useInfiniteScroll({
        endpoint: { name: getPostsName },
        wrapperRef,
    });

    useEffect(() => {
        if (updateFeed) resetScroll();
    }, [updateFeed]);

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
