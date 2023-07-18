import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
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
    const { text, loading, suggestReload, template } = useSelector(
        ({ message }) => message,
        shallowEqual
    );
    const isBreakpointMd = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointMd
    );
    const [navbarHeight, setNavbarHeight] = useState("0px");
    const [dots, setDots] = useState("");

    useEffect(() => {
        if (isBreakpointMd) {
            const navbar = document.getElementById("navbar");

            if (navbar) setNavbarHeight(`${navbar.offsetHeight}px`);
        } else setNavbarHeight("0px");
    }, [isBreakpointMd]);

    useEffect(() => {
        if (loading)
            setTimeout(() => {
                dots.length < 3 ? setDots(dots + ".") : setDots("");
            }, 400);
    }, [dots]);

    return (
        <Styled.Wrapper
            {...motionProps}
            id="message"
            data-transition={theme.transitions[transition].duration}
            $navbarHeight={navbarHeight}
        >
            {template === "signIn" ? (
                <p>
                    <Styled.Link to="/">Entre</Styled.Link> para interagir no
                    Instagram.
                </p>
            ) : (
                <p>
                    {text}
                    {loading && dots}
                </p>
            )}

            {suggestReload && (
                <Styled.Button onClick={() => location.reload()}>
                    Atualizar a página
                </Styled.Button>
            )}
        </Styled.Wrapper>
    );
}
