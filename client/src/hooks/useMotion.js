import { useState } from "react";
import { useTheme } from "styled-components";

import convertThemeTransition from "../utils/convertThemeTransition";

const variants = {
    opacity: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    authRoutes: {
        hidden: { opacity: 0, x: -15 },
        visible: { opacity: 1, x: 0 },
    },
    signInRoute: {
        initial: { opacity: 0, x: -15 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 15 },
    },
};

export default function useMotion({
    variants: variantName = "opacity",
    transition: transitionName,
}) {
    const [transition, setTransition] = useState({});
    const animation = Object.keys(variants[variantName]);
    const theme = useTheme();
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

    if (transitionName) {
        const themeTransition = theme.transitions[transitionName];

        setTransition(convertThemeTransition(themeTransition));
    }

    if (!reducedMotion.matches)
        return {
            variants: variants[variantName],
            initial: animation[0],
            animate: animation[1],
            exit: animation[2] ? animation[2] : animation[0],
            ...(transition && transition),
        };
    else return {};
}
