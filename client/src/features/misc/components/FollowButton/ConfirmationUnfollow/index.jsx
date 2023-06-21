import Image from "../../../../../components/Misc/Image";
import { SERVER_DOMAIN } from "../../../../../config";
import * as Styled from "./style";

export default function ConfirmationUnfollow({ instagramUser }) {
    return (
        <>
            <Styled.Image>
                <Image
                    src={`${SERVER_DOMAIN}/${instagramUser.picture}`}
                    alt={`Foto de perfil de ${instagramUser.name}`}
                />
            </Styled.Image>

            <Styled.Text>
                Deixar de seguir <strong>@{instagramUser.username}</strong>?
            </Styled.Text>
        </>
    );
}
