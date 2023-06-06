import { useSelector } from "react-redux";

import * as Styled from "./style";

export default function FollowBtn({ user: { followers, following }, link }) {
    const {
        auth: {
            user: { userId },
        },
        breakpoints: { isBreakpointSm },
    } = useSelector(state => state);
    const userFollow = followers.includes(userId);
    const userFollowed = following.includes(userId);
    const text = () => {
        if (userFollow) return "Seguindo";
        else if (userFollowed) return "Seguir de volta";
        else return "Seguir";
    };

    return (
        <Styled.Button
            text={text()}
            expand={isBreakpointSm}
            primary={!userFollow}
            $link={link}
        />
    );
}
