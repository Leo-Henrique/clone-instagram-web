import { SERVER_DOMAIN } from "../../../../../config";
import Image from "../../../../Misc/Image";
import * as Styled from "./style";

export default function Unfollow({ picture, name, username }) {
    return (
        <>
            <Styled.Image>
                <Image
                    src={`${SERVER_DOMAIN}/${picture}`}
                    alt={`Foto de perfil de ${name}`}
                />
            </Styled.Image>

            <Styled.Text>
                Deixar de seguir <strong>@{username}</strong>?
            </Styled.Text>
        </>
    );
}
