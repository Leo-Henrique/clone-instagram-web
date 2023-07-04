import { useDispatch, useSelector } from "react-redux";
import { showOptions } from "../../../../../../../app/slices/modal";
import SVGViewMore from "../../../../../../../assets/icons/vectors/view-more.svg";
import useUnfollow from "../../../../../../misc/api/unfollow";
import * as Styled from "../style";

export default function InstagramUserOptions({ post, globalOptions }) {
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const dispatch = useDispatch();
    const [unfollow] = useUnfollow(post.user);
    const viewOptions = () => {
        const options = globalOptions;

        if (post.user.followers.includes(authUserId))
            options.unshift({
                name: "Deixar de seguir",
                danger: true,
                callback: unfollow,
            });

        dispatch(showOptions(options));
    };

    return (
        <Styled.Wrapper type="button" onClick={viewOptions}>
            <SVGViewMore aria-label="Ver mais" />
        </Styled.Wrapper>
    );
}
