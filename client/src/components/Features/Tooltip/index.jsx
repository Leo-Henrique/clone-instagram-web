import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import useMotion from "../../../hooks/useMotion";
import * as Styled from "./style";

export default function Tooltip({ Button, text, position, displayDelay }) {
    const [show, setShow] = useState(false);
    const [showScheduled, setShowScheduled] = useState(false);
    const showTooltip = () => {
        setShowScheduled(setTimeout(() => setShow(true), displayDelay));
    };
    const hideTooltip = () => {
        clearInterval(showScheduled);
        setShow(false);
    };
    const displacement = value => {
        switch (position) {
            case "top":
                return { y: value };
            case "right":
                return { x: -value };
            case "bottom":
                return { y: -value };
            case "left":
                return { x: value };
        }
    };
    const motionProps = useMotion({
        variants: {
            initial: { opacity: 0, ...displacement(15) },
            animate: { opacity: 1, x: 0, y: 0 },
        },
    });

    return (
        <Styled.Wrapper>
            <Button onMouseEnter={showTooltip} onMouseLeave={hideTooltip} />

            <AnimatePresence>
                {show && (
                    <Styled.Content $position={position} {...motionProps}>
                        {text}
                    </Styled.Content>
                )}
            </AnimatePresence>
        </Styled.Wrapper>
    );
}
