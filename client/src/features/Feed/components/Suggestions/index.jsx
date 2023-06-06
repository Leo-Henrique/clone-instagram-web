import SVGVerified from "../../../../assets/icons/vectors/verified-blue.svg";
import { SERVER_DOMAIN } from "../../../../config";
import FollowBtn from "../../../misc/components/FollowBtn";
import * as Styled from "./style";

export default function Welcome({ users, welcome }) {
    return (
        <>
            {users.map(({ username, name, verified, picture }, index) => (
                <Styled.User key={username}>
                    <Styled.UserImage $welcome={welcome}>
                        <img
                            src={`${SERVER_DOMAIN}/${picture}`}
                            alt={`Foto de perfil de ${name}`}
                        />
                    </Styled.UserImage>

                    <Styled.UserInfos>
                        <h2>{username}</h2>

                        {verified && <SVGVerified aria-label="Usuário verificado" />}

                        {welcome && <p>{name}</p>}
                    </Styled.UserInfos>

                    <FollowBtn user={users[index]} link={!welcome} />
                </Styled.User>
            ))}
        </>
    );
}