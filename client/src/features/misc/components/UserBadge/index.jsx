import SVGVerified from "../../../../assets/icons/vectors/verified-blue.svg";
import Skeleton from "../../../../components/Loaders/Skeleton/index.jsx";
import { SERVER_DOMAIN } from "../../../../config/index.js";
import * as Styled from "./style.js";

export default function UserBadge({ user, showName = false, styles }) {
    const link = { to: `/${user?.username}` };
    const noLink = { as: "div" };

    return (
        <Styled.Wrapper {...(user ? link : noLink)} $styles={styles?.wrapper}>
            <Styled.Picture $styles={styles?.picture}>
                {user?.picture ? (
                    <img
                        src={`${SERVER_DOMAIN}/${user.picture}`}
                        alt={`Foto de perfil de ${user.name}`}
                    />
                ) : (
                    <Skeleton circle={true} />
                )}
            </Styled.Picture>

            <Styled.Infos $styles={styles?.infos}>
                <div>
                    {user?.username || <Skeleton $width="80px" />}
                    {user?.verified && <SVGVerified />}
                </div>

                {showName && <div>{user?.name || <Skeleton $width="80px" />}</div>}
            </Styled.Infos>
        </Styled.Wrapper>
    );
}
