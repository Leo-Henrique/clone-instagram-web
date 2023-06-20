import FollowButton from "../../../misc/components/FollowButton";
import UserBadge from "../../../misc/components/UserBadge";
import * as Styled from "./style";

export default function Users({
    data,
    userBadgeProps,
    followLink,
    skeletonCount = 5,
    styles,
}) {
    const users = data ? data : Array.from({ length: skeletonCount });

    return (
        <>
            {users.map((user, index) => (
                <Styled.Wrapper key={user?.username || index} $styles={styles}>
                    <UserBadge user={user} {...userBadgeProps} />

                    <FollowButton
                        user={user}
                        $link={followLink}
                        $linkStyles={Styled.customFollowLinkStyles}
                    />
                </Styled.Wrapper>
            ))}
        </>
    );
}
