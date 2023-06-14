import { css, keyframes, styled } from "styled-components";

const skeleton = keyframes`
    from {
        transform: translate3d(-100%, 0, 0);
    }
    to {
        transform: translate3d(100%, 0, 0);
    }
`;

export const Wrapper = styled.span`
    ${({ theme, $width = "100%", $height = "1em", $circle, $computedWidth }) => css`
        display: inline-block;
        width: ${$width};
        height: ${$circle ? $computedWidth : $height};
        background-color: ${theme.colors.skeletonBlock};
        border-radius: ${$circle ? "50%" : "5px"};
        position: relative;
        overflow: hidden;
        pointer-events: none;

        & + & {
            margin-top: 1rem;
        }
        &::after {
            content: "";
            display: block;
            position: absolute;
            inset: 0;
            background-image: linear-gradient(
                90deg,
                ${theme.colors.skeletonBlock},
                ${theme.colors.skeletonAnimate},
                ${theme.colors.skeletonBlock}
            );
            animation: ${skeleton} 1.3s ease-in-out infinite;
        }
    `}
`;
