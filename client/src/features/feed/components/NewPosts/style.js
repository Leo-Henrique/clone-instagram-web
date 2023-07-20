import { m } from "framer-motion";
import { css, styled } from "styled-components";

export const Wrapper = styled(m.div)`
    ${({ theme, $headerHeight }) => css`
        display: flex;
        justify-content: center;
        position: fixed;
        inset: calc(${$headerHeight} + 20px) 0 auto;
        z-index: ${({ theme }) => theme.zIndexes.newPosts};
        padding: 0 ${theme.global.containerPaddingX};

        button {
            padding: 0.8rem 1.6rem;
            border-radius: 20px;
            background-color: ${theme.colors.blockSupport1};
            color: ${theme.colors.text};
            font-weight: 600;
            ${theme.mixins.elementAbove};
            ${theme.mixins.genericLinkStates()};
        }
    `}
`;
