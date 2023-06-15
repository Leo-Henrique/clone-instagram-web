import { m } from "framer-motion";
import { css, styled } from "styled-components";

import CloneLogo from "../Misc/Logo";

const linkPaddingY = "1.5rem";
export const linkPaddingX = "1.5rem";
export const linkMarginX = ".9rem";

export const Navbar = styled(m.div)`
    ${({ theme }) => css`
        position: fixed;
        z-index: ${theme.zIndexes.navbar};
        inset: 0 auto;
        max-width: 245px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: calc(4.5rem - ${linkPaddingY} * 2);
        padding: calc(4rem - ${linkPaddingY}) 0;
        background-color: ${theme.colors.block};
        border-right: 1px solid ${theme.colors.separator};

        ${theme.breakpoints.xl} {
            max-width: 72px;
            row-gap: calc(5.1rem - ${linkPaddingY} * 2);
            padding-top: calc(3.6rem - ${linkPaddingY});
            padding-bottom: calc(3.8rem - ${linkPaddingY});
        }
        ${theme.breakpoints.md} {
            max-width: initial;
            inset: auto 0 0;
            flex-direction: initial;
            padding: 0;
            border-right: initial;
            border-top: 1px solid ${theme.colors.separator};
        }
    `}
`;

export const Logo = styled(CloneLogo)`
    ${({ theme }) => css`
        a {
            padding: ${linkPaddingY} ${linkPaddingX};
            margin: 0 ${linkMarginX};
        }
        ${theme.breakpoints.xl} {
            svg {
                width: 24px;
            }
        }
        ${theme.breakpoints.md} {
            display: none;
        }
    `}
`;

export const Container = styled.div`
    height: 100%;
`;

export const Content = styled.main`
    ${({ theme }) => css`
        height: 100%;
        max-width: calc(935px + ${theme.global.containerPaddingY} * 2);
        padding: ${theme.global.containerPaddingY};
        margin-left: auto;
        margin-right: auto;

        ${theme.breakpoints.md} {
            padding: 0;
        }
    `}
`;

export const MobileHeader = styled.header`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 2rem;
        padding: 0 ${theme.global.containerPaddingX};
        background-color: ${theme.colors.block};
        border-bottom: 1px solid ${theme.colors.separator};
    `}
`;
