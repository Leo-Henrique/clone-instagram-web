import { useSelector } from "react-redux";

import * as Styled from "./style";

export default function Likes({ post: { likes, user } }) {
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const totalLikes = likes.length;

    if (totalLikes > 0)
        return (
            <Styled.Likes type="button">
                {totalLikes.toLocaleString("pt-BR")}
                {"\n"}
                {totalLikes > 1 ? "curtidas" : "curtida"}
            </Styled.Likes>
        );

    if (user.id !== authUserId)
        return (
            <Styled.LikeWarning>
                Seja a primeira pessoa a curtir essa publicação
            </Styled.LikeWarning>
        );
}
