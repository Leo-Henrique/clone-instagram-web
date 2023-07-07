import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import SVGClose from "../../../../../assets/icons/vectors/close.svg";
import useMotion from "../../../../../hooks/useMotion";
import { resetComment } from "../../../slices/comment";
import * as Styled from "./style";

export default function ReplyTo() {
    const dispatch = useDispatch();
    const { isReply, username } = useSelector(({ comment }) => comment.reply);
    const motionProps = useMotion({ variants: "height" });

    return (
        <AnimatePresence>
            {isReply && (
                <Styled.Reply {...motionProps}>
                    <Styled.Text>Respondendo a {username}</Styled.Text>

                    <Styled.Close
                        aria-label={`Parar de responder ${username}`}
                        onClick={() => dispatch(resetComment())}
                    >
                        <SVGClose />
                    </Styled.Close>
                </Styled.Reply>
            )}
        </AnimatePresence>
    );
}
