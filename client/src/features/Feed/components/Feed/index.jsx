import { AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import QueryError from "../../../../components/Alerts/QueryError";
import Spinner from "../../../../components/Loaders/Spinner";
import useInfiniteScroll from "../../../../hooks/useInfiniteScroll";
import useMotion from "../../../../hooks/useMotion";
import Post from "../../../post/components/Post";
import getPostsName from "../../api/getPosts";
import Infos from "./Infos";
import * as Styled from "./style";
import Finished from "./Finished";

export default function Feed() {
    const isBreakpointLg = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointLg
    );
    const updateFeed = useSelector(({ newPosts }) => newPosts.updateFeed);
    const updateDelay = useSelector(({ newPosts }) => newPosts.updateDelay);
    const wrapperRef = useRef(null);
    const {
        result: { data: posts, isFetching, isError, error, refetch },
        scrollFinished,
        resetScroll,
    } = useInfiniteScroll({
        endpoint: { name: getPostsName },
        wrapperRef,
    });
    const spinnerMotionProps = useMotion({
        variants: "height",
        transition: "loading",
    });

    useEffect(() => {
        if (updateFeed) setTimeout(resetScroll, updateDelay);
    }, [updateFeed]);

    return (
        <Styled.Wrapper>
            <Styled.Posts ref={wrapperRef}>
                <AnimatePresence>
                    {updateFeed && <Spinner $size={26} {...spinnerMotionProps} />}
                </AnimatePresence>

                {isError ? (
                    <QueryError
                        error={error}
                        refetch={refetch}
                        {...(isBreakpointLg || { $center: false })}
                    />
                ) : (
                    <>
                        {posts.map((post, index) => (
                            <Post key={post?.id || index} post={post} />
                        ))}
                    </>
                )}

                {isFetching && <Spinner $size={26} />}

                {scrollFinished && <Finished />}
            </Styled.Posts>

            {isBreakpointLg || <Infos />}
        </Styled.Wrapper>
    );
}
