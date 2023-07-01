import { useSelector } from "react-redux";

import FollowButton from "../../../../misc/components/FollowButton";
import UserBadge from "../../../../misc/components/UserBadge";
import ViewMore from "./ViewMore";
import * as Styled from "./style.js";

export default function Header({ post, showFollowButton, isHighlight }) {
    const authUserId = useSelector(({ auth }) => auth.user.id);

    return (
        <Styled.Wrapper>
            <UserBadge user={post?.user} />

            {showFollowButton && post?.user?.id !== authUserId && (
                <FollowButton
                    user={post?.user}
                    $link={true}
                    {...(isHighlight && {
                        $linkStyles: Styled.highlightFollowButton,
                    })}
                />
            )}

            {post && <ViewMore post={post} />}
        </Styled.Wrapper>
    );
}
