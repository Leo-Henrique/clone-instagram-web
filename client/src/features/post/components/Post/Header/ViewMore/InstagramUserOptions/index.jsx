import { useDispatch, useSelector } from "react-redux";
import { showSignInMessage } from "../../../../../../../app/slices/message";
import { showOptions } from "../../../../../../../app/slices/modal";
import SVGViewMore from "../../../../../../../assets/icons/vectors/view-more.svg";
import useUnfollow from "../../../../../../misc/api/unfollow";
import * as Styled from "../style";

export default function InstagramUserOptions({ post, globalOptions }) {
    const authUserId = useSelector(({ auth }) => auth.user?.id);
    const dispatch = useDispatch();
    const [unfollow] = useUnfollow(post.user);
    const viewOptions = () => {
        const followingPostAuthor = post.user.followers.includes(authUserId);
        const unfollowPostAuthor = {
            name: "Deixar de seguir",
            danger: true,
            callback: unfollow,
        };
        const options = followingPostAuthor
            ? [unfollowPostAuthor, ...globalOptions]
            : globalOptions;

        dispatch(showOptions(options));
    };

    return (
        <Styled.Wrapper
            type="button"
            onClick={authUserId ? viewOptions : () => dispatch(showSignInMessage())}
        >
            <SVGViewMore aria-label="Ver mais" />
        </Styled.Wrapper>
    );
}
