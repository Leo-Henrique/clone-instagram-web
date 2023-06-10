import { memo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Follow from "./Follow";
import Unfollow from "./Unfollow";

const FollowButton = memo(({ user: instagramUser, welcome }) => {
    const userId = useSelector(({ auth }) => auth.user.userId);
    const isBreakpointSm = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointSm
    );
    const { pathname } = useLocation();
    const following = instagramUser.followers.includes(userId);
    const handlePostAlert = instagramUser.posts.length && pathname === "/";
    const props = {
        buttonConfig: {
            expand: isBreakpointSm,
            primary: !following,
            $link: !welcome,
        },
        instagramUser: {
            ...instagramUser,
            postsCount: instagramUser.posts.length,
        },
        handlePostAlert,
    };

    if (following) return <Unfollow {...props} />;
    else return <Follow {...props} />;
});

export default FollowButton;
