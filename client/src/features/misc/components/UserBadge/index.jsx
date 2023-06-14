import SVGVerified from "../../../../assets/icons/vectors/verified-blue.svg";
import Skeleton from "../../../../components/Loaders/Skeleton/index.jsx";
import { SERVER_DOMAIN } from "../../../../config/index.js";
import * as Styled from "./style.js";

export default function UserBadge({ user, showName, column, gap, pictureSize }) {
    const link = { to: `/${user?.username}` };
    const noLink = { as: "div" };

    return (
        <Styled.Wrapper {...(user ? link : noLink)} $column={column} $gap={gap}>
            <Styled.Picture $size={pictureSize}>
                {user?.picture ? (
                    <img
                        src={`${SERVER_DOMAIN}/${user.picture}`}
                        alt={`Foto de perfil de ${user.name}`}
                    />
                ) : (
                    <Skeleton circle={true} />
                )}
            </Styled.Picture>

            <Styled.Infos>
                <div>
                    <span>{user?.username || <Skeleton $width="90px" />}</span>
                    {user?.verified && <SVGVerified />}
                </div>

                {showName && <div>{user?.name || <Skeleton $width="50px" />}</div>}
            </Styled.Infos>
        </Styled.Wrapper>
    );
}