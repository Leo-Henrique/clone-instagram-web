import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";

import useMotion from "../../../hooks/useMotion";
import * as Styled from "./style";

export default function Message() {
    const theme = useTheme();
    const transition = "global";
    const motionProps = useMotion({
        variants: {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
        },
        transition,
    });
    const text = useSelector(({ message }) => message.text);
    const isBreakpointMd = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointMd
    );
    const [navbarHeight, setNavbarHeight] = useState("0px");

    useEffect(() => {
        if (isBreakpointMd) {
            const navbar = document.getElementById("navbar");

            if (navbar) setNavbarHeight(`${navbar.offsetHeight}px`);
        } else setNavbarHeight("0px");
    }, [isBreakpointMd]);

    return (
        <Styled.Wrapper
            {...motionProps}
            id="message"
            data-transition={theme.transitions[transition].duration}
            $navbarHeight={navbarHeight}
        >
            <p>{text}</p>
        </Styled.Wrapper>
    );
}
