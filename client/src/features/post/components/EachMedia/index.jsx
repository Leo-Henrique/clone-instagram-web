import Skeleton from "../../../../components/Loaders/Skeleton";
import Image from "../../../../components/Misc/Image";
import Video from "../../../../components/Misc/Video";
import { SERVER_DOMAIN } from "../../../../config";

export default function EachMedia({ data, post }) {
    return (
        <div>
            {data ? (
                <div>
                    {data.type === "image" ? (
                        <Image
                            src={`${SERVER_DOMAIN}/${data.source}`}
                            alt={`Imagem postada por ${post.user.name}`}
                        />
                    ) : (
                        data.type === "video" && (
                            <Video src={`${SERVER_DOMAIN}/${data.source}`} />
                        )
                    )}
                </div>
            ) : (
                <Skeleton />
            )}
        </div>
    );
}
