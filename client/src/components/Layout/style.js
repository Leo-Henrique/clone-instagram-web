import { css, styled } from "styled-components";

export const sidebarWidth = {
    default: "245px",
    xl: "72px",
    md: "initial"
};
const linkPaddingY = "1.5rem";
export const linkPaddingX = "1.5rem";
export const linkMarginX = ".9rem";

export const Sidebar = styled.div`${({ theme }) => (css`
    position: fixed;
    inset: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: calc(4.5rem - ${linkPaddingY} * 2);
    padding: calc(4rem - ${linkPaddingY}) 0;
    background-color: ${theme.colors.block};
    border-right: 1px solid ${theme.colors.separator};
    ${theme.mixins.responsiveVariable(sidebarWidth, ["max-width"])};

    ${theme.breakpoints.xl} {
        row-gap: calc(5.4rem - ${linkPaddingY} * 2);
        padding-top: calc(3.6rem - ${linkPaddingY});
    }
    ${theme.breakpoints.md} {
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

export const Container = styled.div`${({ theme }) => (css`
    ${theme.mixins.responsiveVariable(sidebarWidth, ["margin-left"])};
`)}`;

export const Content = styled.div`${({ theme }) => (css`
    max-width: calc(935px + 20px * 2);
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;

    ${theme.breakpoints.md} {
        padding-left: 0;
        padding-right: 0;
    }
`)}`;