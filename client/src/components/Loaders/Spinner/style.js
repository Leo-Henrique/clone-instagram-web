import { m } from "framer-motion";
import { css, keyframes, styled } from "styled-components";

const spin = keyframes`
    from {
        transform: rotate(180deg);
    }
    to {
        transform: rotate(540deg);
    }
`;

export const Wrapper = styled(m.div)`
    ${({ theme, $size, $themeColor = "spinner", $padding = 0, $pageLoading }) => css`
        padding: ${$padding};

        svg {
            animation-name: ${spin};
            animation-duration: 0.8s;
            animation-iteration-count: infinite;
            animation-timing-function: steps(8, end);
            ${theme.mixins.SVGResponsive};

            path {
                fill: ${theme.colors[$themeColor]};
            }
        }
        ${$pageLoading
            ? css`
                  min-height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;

                  svg {
                      width: ${$size ? $size : 26}px;
                  }
              `
            : css`
                  display: inline-block;

                  svg {
                      width: ${$size ? $size : 18}px;
                  }
              `}
    `}
`;
