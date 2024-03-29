import { useState } from "react";
import Skeleton from "../../../../../components/Loaders/Skeleton";
import Image from "../../../../../components/Misc/Image";
import Video from "../../../../../components/Misc/Video";
import useSize from "../../../../../hooks/useSize";
import Marked from "./Marked";
import * as Styled from "./style.js";

export default function Media({ data, post, tag }) {
    const [mediaRef, mediaHeight, mediaWidth] = useSize();
    const [showMarked, setShowMarked] = useState(false);

    return (
        <Styled.Media
            as={tag}
            ref={mediaRef}
            {...(!data && { $height: mediaWidth })}
        >
            {data?.type === "image" ? (
                <Image
                    src={data.source}
                    alt={`Imagem postada por ${post.user.name}`}
                />
            ) : data?.type === "video" ? (
                <Video src={data.source} />
            ) : (
                <Skeleton $height={mediaWidth} $borderRadius={false} />
            )}

            {data && data.persons.length !== 0 && (
                <Marked {...data} showMarked={showMarked} />
            )}
        </Styled.Media>
    );
}
