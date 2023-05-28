import { m } from "framer-motion";
import { css, styled } from "styled-components";

const linkPaddingY = "1.5rem";
export const linkPaddingX = "1.5rem";
export const linkMarginX = ".9rem";

export const Navbar = styled(m.div)`${({ theme }) => (css`
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
`)}`;

export const Logo = styled.div`${({ theme }) => (css`
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
`)}`;

export const Container = styled.div`
    ${({ theme, $navbarWidth, $navbarHeight, $headerHeight }) => (css`
        height: 100vh;
        margin-left: ${$navbarWidth};
        
        ${theme.breakpoints.md} {
            height: calc(100vh - ${$navbarHeight} - ${$headerHeight});
            margin-left: 0;
            margin-bottom: ${$navbarHeight};
        }
    `)}
`;

export const Content = styled.div`${({ theme, $contentStyle }) => (css`
    height: 100%;
    max-width: calc(935px + 20px * 2);
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;

    ${theme.breakpoints.md} {
        padding-left: 0;
        padding-right: 0;
    }

    ${$contentStyle};
`)}`;

export const MobileHeader = styled.header`${({ theme }) => (css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 2rem;
    padding: 0 ${theme.global.containerPadding};
    background-color: ${theme.colors.block};
    border-bottom: 1px solid ${theme.colors.separator};
`)}`;