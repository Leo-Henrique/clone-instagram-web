import { useDispatch } from "react-redux";
import { showOptions } from "../../../../../../app/slices/modal";
import SVGViewMore from "../../../../../../assets/icons/vectors/view-more.svg";
import useUnfollow from "../../../../../misc/api/unfollow";
import * as Styled from "../style";

export default function InstagramUserOptions({ post, globalOptions }) {
    const dispatch = useDispatch();
    const [unfollow] = useUnfollow(post.user);
    const options = [
        {
            name: "Deixar de seguir",
            danger: true,
            callback: unfollow,
        },
        ...globalOptions,
    ];

    return (
        <Styled.Wrapper type="button" onClick={() => dispatch(showOptions(options))}>
            <SVGViewMore aria-label="Ver mais" />
        </Styled.Wrapper>
    );
}
