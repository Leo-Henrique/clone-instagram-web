import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

export const Text = styled.span`
    ${({ $maxRows, $expand }) => css`
        overflow: hidden;
        word-break: break-word;

        ${$maxRows === Infinity
            ? css`
                  display: block;
              `
            : css`
                  display: ${$expand ? "block" : "-webkit-box"};
                  line-clamp: ${$maxRows};
                  -webkit-line-clamp: ${$maxRows};
                  box-orient: vertical;
                  -webkit-box-orient: vertical;
              `}
    `}
`;

export const Mention = styled(Link)`
    ${({ theme }) => css`
        color: ${theme.name === "light"
            ? theme.colors.primaryDark2
            : theme.colors.primaryLight2};
        cursor: pointer;
        ${theme.mixins.genericLinkStates()};
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
