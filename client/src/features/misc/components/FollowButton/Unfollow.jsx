import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { requireConfirmation } from "../../../../app/slices/confirmation";
import { showError } from "../../../../app/slices/message";
import { SERVER_DOMAIN } from "../../../../config";
import { decrementPosts, notWarn } from "../../../feed/slices/newPosts";
import { useUnfollowMutation } from "../../api/follow";
import * as Styled from "./style";

export default function Unfollow({
    buttonConfig,
    instagramUser,
    handlePostAlert,
    setUserFollow,
}) {
    const [unfollowPending, setUnfollowPending] = useState(null);
    const newPosts = useSelector(({ newPosts }) => newPosts);
    const confirmed = useSelector(({ confirmation }) => confirmation.confirmed);
    const dispatch = useDispatch();
    const [request] = useUnfollowMutation();
    const confirm = () => {
        const payload = {
            action: "Deixar de seguir",
            content: {
                image: `${SERVER_DOMAIN}/${instagramUser.picture}`,
                imageAlt: `Foto de perfil de ${instagramUser.name}`,
                text: `Deixar de seguir @${instagramUser.username}?`,
            },
        };

        dispatch(requireConfirmation(payload));
        setUnfollowPending(instagramUser.username);
    };
    const unfollow = async () => {
        const { username, postsCount } = instagramUser;

        try {
            await request({ username }).unwrap();

            if (handlePostAlert) dispatch(decrementPosts(postsCount));

            setUserFollow(false);
        } catch (error) {
            dispatch(showError({ error }));
        }
    };

    useEffect(() => {
        const unfollowUsername = unfollowPending === instagramUser.username;

        if (confirmed && unfollowUsername) unfollow();
    }, [confirmed]);

    useEffect(() => {
        if (newPosts.show && newPosts.postCount === 0) dispatch(notWarn());
    }, [newPosts.postCount]);

    return <Styled.Button {...buttonConfig} text="Seguindo" onClick={confirm} />;
}
