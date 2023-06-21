import { darken } from "polished";
import { css, keyframes, styled } from "styled-components";

const loading = width => keyframes`
    0% {
        background-position-x: 0;
    }
    50% {
        background-position-x: ${width.replace("px", "") * 2}px;
    }
    100% {
        background-position-x: 0;
    }
`

export const Wrapper = styled.footer`
    ${({ theme, $isAuthenticated, $pageLoading }) => css`
        padding: 5rem 1.5rem 3rem;

        ${$isAuthenticated
            ? css`
                  font-size: ${theme.fontSizes.small};
                  color: ${theme.colors.footer};
                  padding: 4rem 0;
              `
            : css`
                  text-align: center;
                  color: ${theme.colors.textSupport2};
                  padding-top: 5rem ${theme.global.containerPaddingX} 3rem;
              `}
        ${$pageLoading && css`
            position: absolute;
            bottom: 0;
        `}
    `}
`;

export const Text = styled.p`
    ${({ theme }) => css`
        display: inline-block;

        ${theme.queries.desktop} {
            &:hover > span {
                color: ${darken(0.07, theme.colors.danger)};
            }
        }
        > span {
            ${theme.mixins.transition(["color"])};
        }
    `}
`;

export const From = styled.span`
    display: block;
    text-align: center;
`

export const Author = styled.a`
    ${({ theme, $isAuthenticated, $width, $pageLoading }) => css`
        display: inline-block;
        color: transparent;
        background-image: ${theme.colors.gradient};
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        ${theme.mixins.transition(["background-position, opacity"])};
        ${$isAuthenticated &&
        css`
            filter: grayscale(15%);
        `};
        ${$pageLoading && css`
            animation: ${loading($width)} 1s linear infinite;
            font-size: ${theme.fontSizes.body};
        `}

        ${theme.queries.desktop} {
            &:hover {
                background-position-x: ${$width};
            }
        }
        &:active {
            opacity: 0.8;
        }
    `}
`;
