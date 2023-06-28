import { css, styled } from "styled-components";

export const Likes = styled.button.attrs(() => ({
    type: "button",
}))`
    ${({ theme }) => css`
        display: block;
        font-weight: 600;
        color: ${theme.colors.text};
        ${theme.mixins.genericLinkStates()};
    `}
`;
