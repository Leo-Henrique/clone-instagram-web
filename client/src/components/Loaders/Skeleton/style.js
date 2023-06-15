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
            func: theme.name === "light" ? darken : lighten,
            factor: theme.name === "light" ? 0.13 : 0.04,
            get background() {
                return this.func(this.factor, theme.colors.background);
            },
            get run() {
                const func = theme.name === "light" ? lighten : this.func;

                return func(this.factor / 2, this.background);
            },
            customDark: {
                factor: 0.06,
                get background() {
                    return lighten(this.factor, theme.colors.black);
                },
                get run() {
                    return lighten(this.factor / 2, theme.colors.black);
                },
            },
        };
        const customDarkColorInMobile = css`
            background-color: ${colors.customDark.background};

            &::after {
                background-image: linear-gradient(
                    90deg,
                    ${colors.customDark.background},
                    ${colors.customDark.run},
                    ${colors.customDark.background}
                );
            }
        `;

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

            ${theme.name === "dark" &&
            css`
                ${theme.breakpoints.md} {
                    ${customDarkColorInMobile};
                }
            `}
        `;
    }}
`;
