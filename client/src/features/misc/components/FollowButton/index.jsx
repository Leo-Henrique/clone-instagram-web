import { memo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Skeleton from "../../../../components/Loaders/Skeleton";
import useMotion from "../../../../hooks/useMotion";
import Follow from "./Follow";
import Unfollow from "./Unfollow";

const FollowButton = memo(({ user: instagramUser, $link, $linkStyles }) => {
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const isBreakpointSm = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointSm
    );
    const { pathname } = useLocation();
    const motionProps = useMotion({ transition: "button" });
    const following = instagramUser?.followers?.includes(authUserId);
    const props = {
        buttonConfig: {
            expand: isBreakpointSm,
            primary: !following,
            $link,
            $linkStyles,
            ...motionProps,
        },
        instagramUser,
        handlePostAlert: instagramUser?.hasPosts && pathname === "/",
    };

    if (!instagramUser)
        return (
            <Skeleton
                $height={$link ? "1.3em" : "2.358em"}
                {...(isBreakpointSm || {
                    $width: $link ? "60px" : "90px",
                })}
            />
        );

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
