import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

export const Text = styled.span`
    ${({ $maxRows, $expand }) => css`
        display: ${$expand ? "block" : "-webkit-box"};
        line-clamp: ${$maxRows};
        -webkit-line-clamp: ${$maxRows};
        box-orient: vertical;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-word;
    `}
`;

export const Mention = styled(Link)`
    ${({ theme }) => css`
        color: ${theme.colors.primaryLight2};
        cursor: pointer;
        ${theme.mixins.genericLinkStates()};
    `}
`

export const Button = styled.button.attrs(() => ({ type: "button" }))`
    ${({ theme }) => css`
        display: block;
        color: ${theme.colors.textSupport2};
        text-transform: lowercase;
        ${theme.mixins.genericLinkStates()};
    `}
`;
