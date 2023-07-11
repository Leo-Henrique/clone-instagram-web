import { useDispatch, useSelector } from "react-redux";
import SVGClose from "../../../../../assets/icons/vectors/close.svg";
import useMotion from "../../../../../hooks/useMotion";
import { resetComment } from "../../../slices/comment";
import * as Styled from "./style";

export default function ReplyTo() {
    const dispatch = useDispatch();
    const userReplied = useSelector(({ comment }) => comment.reply.username);
    const motionProps = useMotion({ variants: "height" });

    return (
        <Styled.Wrapper {...motionProps}>
            <Styled.Text>Respondendo a {userReplied}</Styled.Text>

            <Styled.Close
                aria-label={`Parar de responder ${userReplied}`}
                onClick={() => dispatch(resetComment())}
            >
                <SVGClose />
            </Styled.Close>
        </Styled.Wrapper>
    );
}
