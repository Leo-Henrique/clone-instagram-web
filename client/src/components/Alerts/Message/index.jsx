import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import useMotion from "../../../hooks/useMotion";

import * as Styled from "./style";

export default function Message() {
    const showing = useSelector(({ message }) => message.showing);
    const text = useSelector(({ message }) => message.text);
    const motionProps = useMotion({
        variants: {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
        },
    });

    return (
        <AnimatePresence>
            {showing && (
                <Styled.Wrapper {...motionProps}>
                    <p>{text}</p>
                </Styled.Wrapper>
            )}
        </AnimatePresence>
    );
}
