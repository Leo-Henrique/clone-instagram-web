import { css } from "styled-components";

export const transition = 
    (properties, type = "button") => 
    ({ theme }) => (css`
        transition-property: ${properties.join(", ")};
        transition-duration: ${theme.transitions[type].duration}ms;
        transition-timing-function: ${theme.transitions[type].timingFunction};
`);

export const responsiveVariable = 
    (variable, properties) => 
    ({ theme }) => {
        const breakpoints = Object.keys(variable);
        const addStyles = breakpoint => properties.map(property => (css`
            ${`${property}: ${variable[breakpoint]};`}
        `))

        return breakpoints.map(breakpoint => {
            if (breakpoint !== "default") {
                return (css`
                    ${theme.breakpoints[breakpoint]} { 
                        ${addStyles(breakpoint)}
                    }
                `);
            } else return addStyles("default");
        });
};

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