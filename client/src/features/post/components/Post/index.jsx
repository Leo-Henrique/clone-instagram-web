import { memo, useState } from "react";

import QueryError from "../../../../components/Alerts/QueryError";
import Carousel from "../../../../components/Features/Carousel";
import Comments from "../../../comments/components/Comments";
import { useGetPostQuery } from "../../api/getPost";
import Details from "./Details";
import Header from "./Header";
import Media from "./Media";
import * as Styled from "./style";

const Post = memo(({ data: receivedData, isHighlight, isModalHighlight, id }) => {
    const currentMedia = useState(0);
    const { data, isError, error, refetch } = useGetPostQuery(id, { skip: !id });
    const post = id ? data : receivedData;

    if (isError)
        return <QueryError error={error} refetch={refetch} pageError={true} />;

    return (
        <Styled.Wrapper
            $isHighlight={isHighlight}
            $isModalHighlight={isModalHighlight}
        >
            {isHighlight || <Header post={post} />}

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
                <div>
                    <Media tag="div" data={post?.media[0]} post={post} />
                </div>
            )}

            <Styled.Infos $isModalHighlight={isModalHighlight}>
                {isHighlight && (
                    <Header
                        post={post}
                        showFollowButton={true}
                        isHighlight={isHighlight}
                    />
                )}

                {isHighlight && data?.showComments && <Comments />}

                {post && <Details post={post} isHighlight={isHighlight} />}
            </Styled.Infos>
        </Styled.Wrapper>
    );
});

export default Post;
