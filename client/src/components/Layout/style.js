import { css, styled } from "styled-components";

const sidebarWidth = {
    default: "245px",
    xl: "72px",
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
`)}`;

export const Logo = styled.div`${({ theme }) => (css`
    a {
        display: block;
        padding: ${linkPaddingY} ${linkPaddingX};
        margin: 0 ${linkMarginX};
        ${theme.mixins.genericLinkStates};
    }
    svg {
        display: inline-block;
        width: 103px;
        height: auto;

        ${theme.breakpoints.xl} {
            width: 24px;
        }
    }
    path {
        fill: ${theme.colors.text};
    }
`)}`;

export const Content = styled.div`${({ theme }) => (css`
    ${theme.mixins.responsiveVariable(sidebarWidth, ["margin-left"])};
`)}`;