import { css, keyframes, styled } from "styled-components";

const spin = keyframes`
    from {
        transform: rotate(180deg);
    }
    to {
        transform: rotate(540deg);
    }
`;

export const Wrapper = styled.div`
    ${({ theme, $size = 18, $themeColor = "black", $padding = 0 }) => (css`
        display: inline-block;
        width: ${$size}px;
        padding: ${$padding};
        animation-name: ${spin};
        animation-duration: .8s;
        animation-iteration-count: infinite;
        animation-timing-function: steps(8,end);

        svg {
            ${theme.mixins.SVGResponsive};

            path {
                fill: ${theme.colors[$themeColor]};
            }
        }
    `)}
`;
