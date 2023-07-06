import { useSelector } from "react-redux";
import SVGViewMore from "../../../../../assets/icons/vectors/view-more.svg";
import CreatedAt from "../../../../../components/Misc/CreatedAt";
import * as Styled from "./style";

export default function Infos({
    postAuthor,
    user: commentAuthor,
    createdAt,
    likes,
    isLegend,
}) {
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const totalLikes = likes?.length;
    const allowDelete =
        postAuthor.id === authUserId || commentAuthor.id === authUserId;

    return (
        <Styled.Wrapper>
            <CreatedAt ISODate={createdAt} />

            {isLegend || (
                <>
                    {totalLikes > 0 && (
                        <span>
                            {totalLikes.toLocaleString("pt-BR")}
                            {"\n"}
                            {totalLikes > 1 ? "curtidas" : "curtida"}
                        </span>
                    )}

                    <button type="button">Responder</button>

                    {allowDelete && (
                        <button type="button">
                            <SVGViewMore />
                        </button>
                    )}
                </>
            )}
        </Styled.Wrapper>
    );
}
