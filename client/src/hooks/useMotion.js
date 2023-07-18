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
    fadeInLeft: {
        initial: { opacity: 0, x: -15 },
        animate: { opacity: 1, x: 0 },
    },
    fadeInRight: {
        initial: { opacity: 0, x: 15 },
        animate: { opacity: 1, x: 0 },
    },
};

export default function useMotion(receivedOptions = {}) {
    const defaultOptions = {
        variants: "opacity",
        transition: "global",
        delay: null,
    };
    const { variants, transition, delay } = {
        ...defaultOptions,
        ...receivedOptions,
    };
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const { transitions } = useTheme();
    const variantsConfig =
        typeof variants === "string" ? motionVariants[variants] : variants;
    const transitionConfig =
        typeof transition === "string"
            ? convertThemeTransition(transitions[transition])
            : transition;

    if (delay) transitionConfig.delay = delay;

    if (!reducedMotion.matches)
        return {
            variants: variantsConfig,
            animate: "animate",
            transition: transitionConfig,
            ...(variantsConfig.initial && { initial: "initial" }),
            ...(variantsConfig.exit
                ? { exit: "exit" }
                : variantsConfig.initial && { exit: "initial" }),
        };
    else return {};
}
