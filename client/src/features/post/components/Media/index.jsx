import Skeleton from "../../../../components/Loaders/Skeleton";
import Image from "../../../../components/Misc/Image";
import Video from "../../../../components/Misc/Video";
import { SERVER_DOMAIN } from "../../../../config";
import useSize from "../../../../hooks/useSize";
import * as Styled from "./style.js";

export default function Media({ data, post, tag }) {
    const { element, width } = useSize();

    return (
        <Styled.Media as={tag} ref={element} $width={width}>
            {data?.type === "image" ? (
                <Image
                    src={`${SERVER_DOMAIN}/${data.source}`}
                    alt={`Imagem postada por ${post.user.name}`}
                />
            ) : data?.type === "video" ? (
                <Video src={`${SERVER_DOMAIN}/${data.source}`} />
            ) : (
                <Skeleton $height={width} $borderRadius={false} />
            )}
        </Styled.Media>
    );
}
