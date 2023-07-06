import SVGVerified from "../../../../assets/icons/vectors/verified-blue.svg";
import Skeleton from "../../../../components/Loaders/Skeleton/index.jsx";
import Image from "../../../../components/Misc/Image";
import { SERVER_DOMAIN } from "../../../../config/index.js";
import * as Styled from "./style.js";

export default function UserBadge({
    showPicture = true,
    showUsername = true,
    showName,
    user,
    column,
    gap,
    pictureSize,
}) {
    const link = { to: `/${user?.username}` };
    const noLink = { as: "div" };
    const showInfos = showUsername || showName;

    return (
        <Styled.Wrapper {...(user ? link : noLink)} $column={column} $gap={gap}>
            {showPicture && (
                <Styled.Picture $size={pictureSize}>
                    {user?.picture ? (
                        <Image
                            src={`${SERVER_DOMAIN}/${user.picture}`}
                            alt={`Foto de perfil de ${user.name}`}
                        />
                    ) : (
                        <Skeleton circle={true} />
                    )}
                </Styled.Picture>
            )}

            {showInfos && (
                <Styled.Infos>
                    {showUsername && (
                        <div>
                            <span>
                                {user?.username || <Skeleton $width="90px" />}
                            </span>
                            {user?.verified && <SVGVerified />}
                        </div>
                    )}

                    {showName && (
                        <div>{user?.name || <Skeleton $width="50px" />}</div>
                    )}
                </Styled.Infos>
            )}
        </Styled.Wrapper>
    );
}
