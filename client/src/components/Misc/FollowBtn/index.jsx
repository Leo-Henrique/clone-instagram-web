import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showError } from "../../../app/slices/message";
import { useFollowMutation, useUnfollowMutation } from "./api";
import * as Styled from "./style";

export default function FollowBtn({ user: instagramUser, link }) {
    const {
        auth: {
            user: { userId },
        },
        breakpoints: { isBreakpointSm },
    } = useSelector(state => state);
    const { followers, following } = instagramUser;
    const [userFollow, setUserFollow] = useState(followers.includes(userId));
    const [follow] = useFollowMutation();
    const [unfollow] = useUnfollowMutation();
    const dispatch = useDispatch();
    const handleFollow = async () => {
        const { username } = instagramUser;

        try {
            const request = userFollow ? unfollow : follow;
            const status = await request({ username }).unwrap();

            if (status === 200) setUserFollow(!userFollow);
        } catch (error) {
            dispatch(showError({ error }));
        }
    };

    return (
        <Styled.Button
            expand={isBreakpointSm}
            primary={!userFollow}
            $link={link}
            text={
                userFollow
                    ? "Seguindo"
                    : following.includes(userId)
                    ? "Seguir de volta"
                    : "Seguir"
            }
            onClick={handleFollow}
        />
    );
}
