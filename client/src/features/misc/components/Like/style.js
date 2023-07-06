import { css, styled } from "styled-components";

export const Wrapper = styled.button.attrs(() => ({ type: "button" }))`
    ${({ theme, $size = 24, $padding = 0 }) => css`
        padding: ${$padding};
        ${theme.mixins.genericLinkStates()};

        svg {
            width: ${$size}px;
            height: ${$size}px;
        }
        path[fill] {
            fill: inherit;
        }
    `}
`;
