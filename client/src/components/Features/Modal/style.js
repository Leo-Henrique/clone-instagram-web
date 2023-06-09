import { m } from "framer-motion";
import { css, styled } from "styled-components";

export const Wrapper = styled(m.div)`${({ theme }) => (css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
    z-index: ${theme.zIndexes.modal};
    padding: ${theme.global.containerPaddingY} ${theme.global.containerPaddingX};
    background-color: rgba(0, 0, 0, .65);

    ${theme.breakpoints.md} {
        align-items: flex-end;
        padding-bottom: 0;
    }
`)}`;

export const Dialog = styled(m.div)`${({ theme }) => (css`
    width: 100%;
    max-width: 400px;
    overflow-y: auto;
    background-color: ${theme.colors.blockSupport1};
    border-radius: 15px;

    ${theme.breakpoints.md} {
        border-radius: 15px 15px 0 0;
    }
`)}`;
