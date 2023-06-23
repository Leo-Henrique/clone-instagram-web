import { m } from "framer-motion";
import { css, styled } from "styled-components";

export const Wrapper = styled(m.div)`
    ${({ theme, $navbarHeight }) => css`
        width: 100%;
        position: fixed;
        inset: auto 0 0;
        z-index: ${theme.zIndexes.message};
        padding: 1.5rem 15px;
        background-color: ${theme.colors.messageBackground};
        color: ${theme.colors.messageText};

        p {
            max-width: 650px;
        }

        ${theme.breakpoints.md} {
            width: calc(100% - ${theme.global.containerPaddingX} * 2);
            bottom: calc(${$navbarHeight} + 10px);
            padding: 1.2rem;
            margin: 0 auto;
            border-radius: 5px;
        }
    `}
`;
