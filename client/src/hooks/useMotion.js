import { useSelector } from "react-redux";
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
    fadeInTop: {
        initial: { opacity: 0, y: -15 },
        animate: { opacity: 1, y: 0 },
    },
    fadeInBottom: {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
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
    const isBreakpointMd = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointMd
    );
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const { transitions } = useTheme();
    const variantsObject = () => {
        if (typeof variants === "string") {
            if (isBreakpointMd && variants === "fadeInLeft")
                return motionVariants.fadeInBottom;

            if (isBreakpointMd && variants === "fadeInRight")
                return motionVariants.fadeInTop;

            return motionVariants[variants];
        }

        return variants;
    };
    const transitionObject = () => {
        if (typeof transition === "string")
            return convertThemeTransition(transitions[transition]);

        return transition;
    };

    if (delay) transitionObject().delay = delay;

    if (!reducedMotion.matches)
        return {
            variants: variantsObject(),
            animate: "animate",
            transition: transitionObject(),
            ...(variantsObject().initial && { initial: "initial" }),
            ...(variantsObject().exit
                ? { exit: "exit" }
                : variantsObject().initial && { exit: "initial" }),
        };
    else return {};
}
