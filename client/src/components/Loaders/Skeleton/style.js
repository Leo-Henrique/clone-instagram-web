import { darken, lighten } from "polished";
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
    ${({
        theme,
        $width = "100%",
        $height = "1em",
        $borderRadius = true,
        $circle,
        $computedWidth,
    }) => {
        const colors = {
            factor: theme.name === "light" ? 0.13 : 0.07,
            get background() {
                const func = theme.name === "light" ? darken : lighten;

                return func(this.factor, theme.colors.background);
            },
            get run() {
                const func = theme.name === "light" ? lighten : darken;

                return func(this.factor / 2, this.background);
            },
        };

        return css`
            display: inline-block;
            width: ${$width};
            height: ${$circle ? $computedWidth : $height};
            background-color: ${colors.background};
            position: relative;
            overflow: hidden;
            pointer-events: none;

            ${$borderRadius &&
            css`
                border-radius: ${$circle ? "50%" : "5px"};
            `}

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
                    ${colors.background},
                    ${colors.run},
                    ${colors.background}
                );
                animation: ${skeleton} 1.3s ease-in-out infinite;
            }
        `;
    }}
`;
