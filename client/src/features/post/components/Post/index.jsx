import { memo, useState } from "react";

import QueryError from "../../../../components/Alerts/QueryError";
import Carousel from "../../../../components/Features/Carousel";
import AddComment from "../../../comments/components/AddComment";
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
    // const post = null;
    const cssHighlight = {
        $isHighlight: isHighlight,
        $isModalHighlight: isModalHighlight,
    };

    if (isError)
        return (
            <QueryError
                error={error}
                refetch={refetch}
                pageError={true}
                $padding="4rem"
            />
        );

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

                {isHighlight && post?.showComments && <AddComment />}
            </Styled.Infos>
        </Styled.Wrapper>
    );
});

export default Post;
