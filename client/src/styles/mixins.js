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
    border: 1px solid ${theme.colors.light.stroke};

    @media (max-width: 450px) {
        border: none;
    }
`);