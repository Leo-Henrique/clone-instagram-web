import { m } from "framer-motion";
import { css, styled } from "styled-components";

export const Arrow = styled(m.button).attrs(() => ({
    type: "button",
}))`
    ${({ theme, $position }) => css`
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        ${$position}: 0;
        padding: 1.5rem;
        filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.6));
        ${theme.mixins.genericLinkStates(2)};
    `}
`;
