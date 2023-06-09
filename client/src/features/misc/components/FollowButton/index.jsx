import { memo } from "react";
import { useSelector } from "react-redux";

import { AnimatePresence } from "framer-motion";
import Skeleton from "../../../../components/Loaders/Skeleton";
import useMotion from "../../../../hooks/useMotion";
import useFollow from "../../api/follow";
import useUnfollow from "../../api/unfollow";
import * as Styled from "./style";

const Follow = ({ user, ...rest }) => {
    const [follow] = useFollow(user);
    const authUserId = useSelector(({ auth }) => auth.user.id);

    return (
        <Styled.Button
            key="follow"
            text={user.following.includes(authUserId) ? "Seguir de volta" : "Seguir"}
            onClick={follow}
            primary={true}
            {...rest}
        />
    );
};

const Unfollow = ({ user, ...rest }) => {
    const [unfollow] = useUnfollow(user);

    return (
        <Styled.Button
            key="unfollow"
            text="Seguindo"
            onClick={unfollow}
            primary={false}
            {...rest}
        />
    );
};

const FollowButton = memo(({ user, $link, $linkStyles }) => {
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const isBreakpointSm = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointSm
    );
    const motionProps = useMotion({ transition: "button" });
    const props = {
        user,
        expand: isBreakpointSm,
        $link,
        $linkStyles,
        ...motionProps,
    };

    if (!user)
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
            {user.followers.includes(authUserId) ? (
                <Unfollow key="unfollow" {...props} />
            ) : (
                <Follow key="follow" {...props} />
            )}
        </AnimatePresence>
    );
});

export default FollowButton;
