import { css } from "styled-components";

export const transition = 
    (properties, type = "button") => 
    ({ theme }) => (css`
        transition-property: ${properties.join(", ")};
        transition-duration: ${theme.transitions[type].duration}ms;
        transition-timing-function: ${theme.transitions[type].timingFunction};
`);

export const SVGResponsive = (css`
    display: block;
    max-width: 100%;
    height: auto;
`);

export const authBlock = ({ theme }) => (css`
    max-width: 350px;
    padding-left: 4rem;
    padding-right: 4rem;
    border: 1px solid ${theme.colors.stroke};

    ${theme.breakpoints.authSm} {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        border: none;
    }
`);

export const genericLinkStates = ({ theme }) => (css`
    ${theme.mixins.transition(["opacity"], "button")};

    ${theme.queries.desktop} {
        &:hover {
            opacity: .6;
        }
    }
    &:active {
        opacity: .3;
    }
`);

export const elementAbove = (css`
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, .0975));
    box-shadow: -5px 7px 25px 5px rgba(0, 0, 0, .14);
`);

export const link = ({ fontSize, primary }) => ({ theme }) => (css`
    font-size: ${theme.fontSizes[fontSize]};
    font-weight: 600;
    ${theme.mixins.transition(["color", "opacity"])};
    ${primary ? (css`
        color: ${theme.colors.primary};
        ${theme.queries.desktop} {
            &:hover {
                color: ${theme.colors.primaryDark1};
            }
        }
        &:active {
            color: ${theme.colors.primaryLight1};
        }
    `) : (css`
        color: ${theme.colors.text};
        ${theme.mixins.genericLinkStates};
    `)}
`);