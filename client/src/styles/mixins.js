import { darken, lighten, transparentize } from "polished";
import { css } from "styled-components";

export const transition =
    (properties, type = "button") =>
    ({ theme }) =>
        css`
            transition-property: ${properties.join(", ")};
            transition-duration: ${theme.transitions[type].duration}ms;
            transition-timing-function: ${theme.transitions[type].timingFunction};
        `;

export const SVGResponsive = css`
    display: block;
    max-width: 100%;
    height: auto;
`;

export const authBlock = ({ theme }) => css`
    max-width: 350px;
    padding-left: 4rem;
    padding-right: 4rem;
    border: 1px solid ${theme.colors.stroke};

    ${theme.breakpoints.authSm} {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        border: none;
    }
`;

export const genericLinkStates =
    (opacityFactor = 3) =>
    ({ theme }) =>
        css`
            cursor: pointer;
            ${theme.mixins.transition(["opacity"], "button")};

            ${theme.queries.desktop} {
                &:hover {
                    opacity: ${1 - `0.${opacityFactor}`};
                }
            }
            &:active {
                opacity: ${1 - `0.${opacityFactor * 2}`};
            }
        `;

export const elementAbove = css`
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.0975));
    box-shadow: -5px 7px 25px 5px rgba(0, 0, 0, 0.14);
`;

export const link =
    ({ fontSize, primary }) =>
    ({ theme }) => {
        const primaryStyles = css`
            color: ${theme.colors.primary};

            ${theme.queries.desktop} {
                &:hover {
                    color: ${theme.colors.primaryDark1};
                }
            }
            &:active {
                color: ${theme.colors.primaryLight1};
            }
        `;
        const defaultStyles = css`
            color: ${theme.colors.text};

            ${theme.queries.desktop} {
                &:hover {
                    color: ${transparentize(0.35, theme.colors.text)};
                }
            }
            &:active {
                color: ${transparentize(0.35 * 2, theme.colors.text)};
            }
        `;

        return css`
            font-size: ${theme.fontSizes[fontSize]};
            font-weight: 600;
            cursor: pointer;
            ${theme.mixins.transition(["color", "opacity"])};
            ${primary ? primaryStyles : defaultStyles};
        `;
    };

export const customScrollbar =
    (receivedOptions = {}) =>
    ({ theme }) => {
        const defaultOptions = { width: 20, padding: 8, bgColor: "background" };
        const { width, padding, bgColor } = {
            ...defaultOptions,
            ...receivedOptions,
        };
        const thumbColor = {
            func: theme.name === "light" ? darken : lighten,
            get default() {
                return this.func(0.15, theme.colors[bgColor]);
            },
            get hover() {
                return this.func(0.05, this.default);
            },
            get active() {
                return this.func(0.1, this.default);
            },
        };

        return css`
            & {
                scrollbar-width: auto;
                scrollbar-color: transparent;
            }
            &::-webkit-scrollbar {
                width: ${width}px;
            }
            &::-webkit-scrollbar-track {
                background-color: transparent;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 12px;
                border: ${padding}px solid ${theme.colors[bgColor]};
                background-color: ${thumbColor.default};

                ${theme.queries.desktop} {
                    &:hover {
                        background-color: ${thumbColor.hover};
                    }
                }
                &:active {
                    background-color: ${thumbColor.active};
                }
            }
        `;
    };
