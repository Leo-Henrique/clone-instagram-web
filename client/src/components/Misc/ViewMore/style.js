import { css, styled } from "styled-components";

export const Text = styled.div`
    ${({ $maxRows = 2, $expand }) => css`
        display: ${$expand ? "block" : "-webkit-box"};
        line-clamp: ${$maxRows};
        -webkit-line-clamp: ${$maxRows};
        box-orient: vertical;
        -webkit-box-orient: vertical;
        overflow: hidden;
    `}
`;

export const Button = styled.button.attrs(() => ({ type: "button" }))`
    ${({ theme }) => css`
        display: block;
        color: ${theme.colors.textSupport2};
        text-transform: lowercase;
        ${theme.mixins.genericLinkStates()};
    `}
`;
