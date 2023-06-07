import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { showError } from "../../../app/slices/message";
import {
    decrementPosts,
    notWarn,
    warnThunk,
} from "../../../features/Feed/newPostsSlice";
import { useFollowMutation, useUnfollowMutation } from "./api";
import * as Styled from "./style";

export default function FollowBtn({ user: instagramUser, welcome }) {
    const {
        auth: {
            user: { userId },
        },
        breakpoints: { isBreakpointSm },
        newPosts: { postCount },
    } = useSelector(state => state);
    const { followers, following } = instagramUser;
    const [userFollow, setUserFollow] = useState(followers.includes(userId));
    const [follow] = useFollowMutation();
    const [unfollow] = useUnfollowMutation();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const handleFollow = async () => {
        const { username, posts } = instagramUser;
        const userPosts = posts.length;
        const handlePostAlert = userPosts && pathname === "/";

        try {
            if (userFollow) {
                await unfollow({ username }).unwrap();

                if (handlePostAlert) dispatch(decrementPosts(userPosts));

                setUserFollow(false);
            } else {
                await follow({ username }).unwrap();

                if (handlePostAlert) dispatch(warnThunk(userPosts));

                setUserFollow(true);
            }
        } catch (error) {
            dispatch(showError({ error }));
        }
    };

    useEffect(() => {
        if (postCount === 0) dispatch(notWarn());
    }, [postCount]);

    return (
        <Styled.Button
            expand={isBreakpointSm}
            primary={!userFollow}
            $link={!welcome}
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
