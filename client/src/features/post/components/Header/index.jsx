import SVGViewMore from "../../../../assets/icons/vectors/view-more.svg";
import FollowButton from "../../../misc/components/FollowButton";
import UserBadge from "../../../misc/components/UserBadge";

export default function Header({ post, showFollowButton }) {
    return (
        <header>
            <UserBadge user={post?.user} />

            {showFollowButton && <FollowButton user={post?.user} $link={true} />}

            <button type="button">
                <SVGViewMore aria-label="Ver mais" />
            </button>
        </header>
    );
}
