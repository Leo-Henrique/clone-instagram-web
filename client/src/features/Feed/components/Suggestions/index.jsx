import { useSelector } from "react-redux";

import SVGVerified from "../../../../assets/icons/vectors/verified-blue.svg";
import Skeleton from "../../../../components/Loaders/Skeleton";
import { SERVER_DOMAIN } from "../../../../config";
import FollowButton from "../../../misc/components/FollowButton";
import * as Styled from "./style";

export default function Welcome({ data, welcome }) {
    const users = data ? data : Array.from({ length: 6 });
    const isBreakpointSm = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointSm
    );

    return (
        <>
            {users.map((user, index) => (
                <Styled.User key={user?.username || index}>
                    <Styled.UserImage $welcome={welcome}>
                        {user?.picture ? (
                            <img
                                src={`${SERVER_DOMAIN}/${user.picture}`}
                                alt={`Foto de perfil de ${user.name}`}
                            />
                        ) : (
                            <Skeleton circle={true} />
                        )}
                    </Styled.UserImage>

                    <Styled.UserInfos>
                        <h2>{user?.username || <Skeleton $width="80px" />}</h2>

                        {user?.verified && (
                            <SVGVerified aria-label="Usuário verificado" />
                        )}

                        {welcome && (
                            <p>{user?.name || <Skeleton $width="40px" />}</p>
                        )}
                    </Styled.UserInfos>

                    {user ? (
                        <FollowButton user={users[index]} welcome={welcome} />
                    ) : (
                        <Skeleton
                            $height="2.36em"
                            {...(isBreakpointSm || { $width: "75px" })}
                        />
                    )}
                </Styled.User>
            ))}
        </>
    );
}
