import { memo, useState } from "react";

import AddComment from "../../../comments/components/AddComment";
import Comments from "../../../comments/components/Comments";
import CarouselControls from "../CarouselControls";
import Details from "../Details";
import EachMedia from "../EachMedia";
import Header from "../Header";

const Post = memo(({ post, highlight }) => {
    const [currentMedia, setCurrentMedia] = useState(0);
    const totalMedia = post?.media?.length;
    const media = post?.media || Array.from({ length: 1 });

    return (
        <article>
            {highlight || <Header post={post} />}

            <div>
                <div>
                    {media.map((item, index) => (
                        <EachMedia key={item?.id || index} data={item} post={post} />
                    ))}
                </div>

                {totalMedia > 1 && (
                    <CarouselControls
                        currentMedia={currentMedia}
                        totalMedia={totalMedia}
                    />
                )}
            </div>

            <div>
                {highlight && <Header post={post} />}

                <div>
                    <Details post={post} />
                    <Comments comments={post?.comments} />
                    <AddComment />
                </div>
            </div>
        </article>
    );
});

export default Post;
