import { m } from "framer-motion";
import { css, styled } from "styled-components";

export const Wrapper = styled(m.div)`
    ${({ theme, $zIndex }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        inset: 0;
        z-index: ${theme.zIndexes.modal[$zIndex] || theme.zIndexes.modal.default};
        padding: ${theme.global.containerPaddingY} ${theme.global.containerPaddingX};
        background-color: rgba(0, 0, 0, 0.65);

        ${theme.breakpoints.md} {
            align-items: flex-end;
            padding-bottom: 0;
        }
    `}
`;

export const Dialog = styled(m.div)`
    ${({ theme, $styles }) => css`
        width: 100%;
        max-width: 400px;
        height: max-content;
        max-height: 100%;
        background-color: ${theme.colors.blockSupport1};
        border-radius: 15px;
        overflow-y: auto;
        ${theme.mixins.customScrollbar({
            padding: 6,
            bgColorTheme: "blockSupport1",
        })};

        ${theme.breakpoints.md} {
            border-radius: 15px 15px 0 0;
        }
        ${$styles && $styles};
    `}
`;
