import { m } from "framer-motion";
import { styled } from "styled-components";

export const Wrapper = styled.button.attrs(() => ({ type: "button" }))`
    position: absolute;
    inset: 0;
    cursor: pointer;
`;

export const Play = styled(m.span)`
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 2.4rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;

    svg {
        width: 24px;
        height: 24px;
    }
`;
