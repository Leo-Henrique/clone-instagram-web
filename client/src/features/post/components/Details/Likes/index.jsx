import { useDispatch, useSelector } from "react-redux";

import { showUsers } from "../../../../../app/slices/modal.js";
import { getPostLikesName } from "../../../api/getPost.js";
import * as Styled from "./style";

export default function Likes({ post: { id, likes, user } }) {
    const dispatch = useDispatch();
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const totalLikes = likes.length;
    const getLikes = () => {
        dispatch(
            showUsers({
                name: "Curtidas",
                expectedAmount: totalLikes,
                endpoint: {
                    name: getPostLikesName,
                    args: id,
                },
            })
        );
    };

    if (totalLikes > 0)
        return (
            <Styled.Likes onClick={getLikes}>
                {totalLikes.toLocaleString("pt-BR")}
                {"\n"}
                {totalLikes > 1 ? "curtidas" : "curtida"}
            </Styled.Likes>
        );

    if (user.id !== authUserId)
        return <p>Seja a primeira pessoa a curtir essa publicação</p>;
}
