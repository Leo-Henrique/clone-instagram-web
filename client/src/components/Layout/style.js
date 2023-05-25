import { css, styled } from "styled-components";

const sidebarWidth = "250px";
const linkPaddingY = "1.5rem";
export const linkPaddingX = "1.5rem";
export const linkMarginX = ".9rem";

export const Sidebar = styled.div`${({ theme }) => (css`
    position: fixed;
    inset: 0 auto;
    max-width: ${sidebarWidth};
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: calc(4.5rem - ${linkPaddingY} * 2);
    padding: calc(4rem - ${linkPaddingY}) 0;
    background-color: ${theme.colors.block};
    border-right: 1px solid ${theme.colors.separator};
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
    }
    path {
        fill: ${theme.colors.text};
    }
`)}`;

export const Content = styled.div`
    margin-left: ${sidebarWidth};
`;