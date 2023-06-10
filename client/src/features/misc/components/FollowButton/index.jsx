import { memo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import useMotion from "../../../../hooks/useMotion";
import Follow from "./Follow";
import Unfollow from "./Unfollow";

const FollowButton = memo(({ user: instagramUser, welcome }) => {
    const userId = useSelector(({ auth }) => auth.user.userId);
    const isBreakpointSm = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointSm
    );
    const { pathname } = useLocation();
    const motionProps = useMotion({ transition: "button" });
    const following = instagramUser.followers.includes(userId);
    const handlePostAlert = instagramUser.posts.length && pathname === "/";
    const props = {
        buttonConfig: {
            expand: isBreakpointSm,
            primary: !following,
            $link: !welcome,
            ...motionProps,
        },
        instagramUser: {
            ...instagramUser,
            postsCount: instagramUser.posts.length,
        },
        handlePostAlert,
    };

    return (
        <AnimatePresence mode="wait">
            {following ? (
                <Unfollow {...props} key="unfollow" />
            ) : (
                <Follow {...props} key="follow" />
            )}
        </AnimatePresence>
    );
});

export default FollowButton;
