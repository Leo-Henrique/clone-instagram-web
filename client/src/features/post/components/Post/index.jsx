import { memo, useState } from "react";

import Carousel from "../../../../components/Features/Carousel";
import Comments from "../../../comments/components/Comments";
import CarouselControls from "../CarouselControls";
import Details from "../Details";
import Header from "../Header";
import Media from "../Media";
import * as Styled from "./style";

const Post = memo(({ post, highlight }) => {
    const [currentMedia, setCurrentMedia] = useState(0);

    return (
        <Styled.Wrapper>
            {highlight || <Header post={post} />}

            {post?.media?.length > 1 ? (
                <Styled.CarouselWrapper>
                    <Carousel mouseDrag={false}>
                        {post.media.map((data, index) => (
                            <Media key={index} tag="li" data={data} post={post} />
                        ))}
                    </Carousel>

                    <CarouselControls
                        currentMedia={currentMedia}
                        totalMedia={post.media.length}
                    />
                </Styled.CarouselWrapper>
            ) : (
                <Styled.SingleMediaWrapper>
                    <Media tag="div" data={post?.media[0]} post={post} />
                </Styled.SingleMediaWrapper>
            )}

            <Styled.Infos>
                {highlight && <Header post={post} showFollowButton={true} />}

                {highlight && post?.showComments && <Comments />}

                {post && <Details post={post} highlight={highlight} />}
            </Styled.Infos>
        </Styled.Wrapper>
    );
});

export default Post;
