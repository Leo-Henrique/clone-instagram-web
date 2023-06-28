import { useSelector } from "react-redux";
import FollowButton from "../FollowButton";
import UserBadge from "../UserBadge";
import * as Styled from "./style";

export default function Users({
    data,
    userBadgeProps,
    followLink,
    skeletonCount = 5,
    styles,
}) {
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const users = data ? data : Array.from({ length: skeletonCount });

    return (
        <>
            {users.map((user, index) => (
                <Styled.Wrapper key={user?.username || index} $styles={styles}>
                    <UserBadge user={user} {...userBadgeProps} />

                    {user?.id !== authUserId && (
                        <FollowButton
                            user={user}
                            $link={followLink}
                            $linkStyles={Styled.customFollowLinkStyles}
                        />
                    )}
                </Styled.Wrapper>
            ))}
        </>
    );
}
