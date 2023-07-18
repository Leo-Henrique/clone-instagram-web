import { memo, useState } from "react";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import Carousel from "../../../../components/Features/Carousel";
import AddComment from "../../../comments/components/AddComment";
import Comments from "../../../comments/components/Comments";
import Details from "./Details";
import Header from "./Header";
import Media from "./Media";
import * as Styled from "./style";

const Post = memo(({ post, startWithHighlight, isModalHighlight }) => {
    const isBreakpointMd = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointMd
    );
    const currentMedia = useState(0);
    const [isHighlight, setIsHighlight] = useState(startWithHighlight);
    const cssHighlight = {
        $isHighlight: isHighlight,
        $isModalHighlight: isModalHighlight,
    };

    useEffect(() => {
        if (isBreakpointMd) setIsHighlight(false);
        else if (startWithHighlight) setIsHighlight(true);
    }, [isBreakpointMd]);

    return (
        <Styled.Wrapper {...cssHighlight}>
            {isHighlight || <Header post={post} />}

            <Styled.Media {...cssHighlight}>
                {post?.media?.length > 1 ? (
                    <Carousel
                        currentItem={currentMedia}
                        drag={{ mouse: false }}
                        controls={true}
                        dots={true}
                    >
                        {post.media.map((data, index) => (
                            <Media key={index} tag="li" data={data} post={post} />
                        ))}
                    </Carousel>
                ) : (
                    <Media tag="div" data={post?.media[0]} post={post} />
                )}
            </Styled.Media>

            <Styled.Infos {...cssHighlight}>
                {isHighlight && (
                    <Header
                        post={post}
                        showFollowButton={true}
                        isHighlight={isHighlight}
                    />
                )}

                {isHighlight && <Comments post={post} />}

                {post && <Details post={post} isHighlight={isHighlight} />}

                {isHighlight && post?.showComments && (
                    <AddComment postId={post.id} />
                )}
            </Styled.Infos>
        </Styled.Wrapper>
    );
});

export default Post;
