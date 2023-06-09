import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Follow from "./Follow";
import Unfollow from "./Unfollow";

export default function FollowButton({ user: instagramUser, welcome }) {
    const userId = useSelector(({ auth }) => auth.user.userId);
    const isBreakpointSm = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointSm
    );
    const { pathname } = useLocation();
    const handlePostAlert = instagramUser.posts.length && pathname === "/";
    const [userFollow, setUserFollow] = useState(
        instagramUser.followers.includes(userId)
    );
    const props = {
        buttonConfig: {
            expand: isBreakpointSm,
            primary: !userFollow,
            $link: !welcome,
        },
        instagramUser: {
            ...instagramUser,
            postsCount: instagramUser.posts.length,
        },
        handlePostAlert,
        setUserFollow,
    };

    if (userFollow) return <Unfollow {...props} />;
    else return <Follow {...props} />;
}
