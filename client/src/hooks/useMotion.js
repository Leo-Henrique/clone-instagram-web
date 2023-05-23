import { useState } from "react";
import { useTheme } from "styled-components";

import convertThemeTransition from "../utils/convertThemeTransition";

const variants = {
    opacity: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    },
    authRoutes: {
        initial: { opacity: 0, x: -15 },
        animate: { opacity: 1, x: 0 },
    },
    signInRoute: {
        initial: { opacity: 0, x: -15 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 15 },
    },
    block: {
        initial: { opacity: 0, x: 15 },
        animate: { opacity: 1, x: 0 },
    },
    height: {
        initial: { height: 0 },
        animate: { height: "auto" },
    },
};

export default function useMotion({
    variants: variantName = "opacity",
    transition: transitionName,
}) {
    const [transition, setTransition] = useState({});
    const theme = useTheme();
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const animation = Object.keys(variants[variantName]);

    if (transitionName) {
        const themeTransition = theme.transitions[transitionName];

        setTransition(convertThemeTransition(themeTransition));
    }

    if (!reducedMotion.matches)
        return {
            variants: variants[variantName],
            initial: "initial",
            animate: "animate",
            exit: animation.find(item => item === "exit") ? "exit" : "initial",
            ...(transition && transition),
        };
    else return {};
}
