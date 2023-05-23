import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import useMotion from "../../hooks/useMotion";

import Wrapper from "./style";

export default function Message() {
    const { showing, text } = useSelector(({ message }) => message);
    const motionProps = useMotion({ variants: "message"});

    return (
        <AnimatePresence>
            {showing && (
                <Wrapper {...motionProps}>
                    <p>{text}</p>
                </Wrapper>
            )}
        </AnimatePresence>
    );
}
