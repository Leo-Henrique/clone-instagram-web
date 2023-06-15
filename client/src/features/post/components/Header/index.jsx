import { useSelector } from "react-redux";

import SVGViewMore from "../../../../assets/icons/vectors/view-more.svg";
import FollowButton from "../../../misc/components/FollowButton";
import UserBadge from "../../../misc/components/UserBadge";
import * as Styled from "./style.js";

export default function Header({ post, showFollowButton }) {
    const authUserId = useSelector(({ auth }) => auth.user.id);

    return (
        <Styled.Wrapper>
            <UserBadge user={post?.user} />

            {showFollowButton && post?.user?.id !== authUserId && (
                <FollowButton user={post?.user} $link={true} />
            )}

            {post && (
                <Styled.ViewMore type="button">
                    <SVGViewMore aria-label="Ver mais" />
                </Styled.ViewMore>
            )}
        </Styled.Wrapper>
    );
}
