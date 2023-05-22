import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { useTheme } from "styled-components";

import convertThemeTransition from "../utils/convertThemeTransition";

export default function MotionProvider({ children }) {
    const theme = useTheme();
    const transition = convertThemeTransition(theme.transitions.global);

    return (
        <MotionConfig transition={transition} reducedMotion="user">
            <LazyMotion features={domAnimation}>{children}</LazyMotion>
        </MotionConfig>
    );
}
