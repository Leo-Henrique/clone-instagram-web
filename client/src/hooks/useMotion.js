import { useTheme } from "styled-components";

import convertThemeTransition from "../utils/convertThemeTransition";

const motionVariants = {
    opacity: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    },
    height: {
        initial: { height: 0 },
        animate: { height: "auto" },
        exit: { height: 0 },
    },
    blockOld: {
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -15 },
    },
    blockNew: {
        initial: { opacity: 0, x: 15 },
        animate: { opacity: 1, x: 0 },
    },
};

export default function useMotion({
    variants = "opacity",
    transition = "global",
    delay
}) {
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const { transitions } = useTheme();
    const transitionConfig = convertThemeTransition(transitions[transition]);
    const variantsData =
        typeof variants === "string" ? motionVariants[variants] : variants;

    if (delay) transitionConfig.delay = delay;

    if (!reducedMotion.matches)
        return {
            variants: variantsData,
            animate: "animate",
            transition: transitionConfig,
            ...(variantsData.initial && { initial: "initial" }),
            ...(variantsData.exit
                ? { exit: "exit" }
                : variantsData.initial && { exit: "initial" }),
        };
    else return {};
}
