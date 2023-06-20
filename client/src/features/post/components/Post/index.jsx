import { memo, useState } from "react";

import Carousel from "../../../../components/Features/Carousel";
import Comments from "../../../comments/components/Comments";
import Details from "../Details";
import Header from "../Header";
import Media from "../Media";
import * as Styled from "./style";

const Post = memo(({ post, highlight }) => {
    const currentMedia = useState(0);

    return (
        <Styled.Wrapper>
            {highlight || <Header post={post} />}

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
                <Styled.SingleMedia>
                    <Media tag="div" data={post?.media[0]} post={post} />
                </Styled.SingleMedia>
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
