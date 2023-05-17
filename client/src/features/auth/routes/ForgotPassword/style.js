import { css, styled } from "styled-components";

const stroke = sides => ({ theme }) => (css`
    ${sides.map(side => (css` 
        border-${side}: 1px solid ${theme.colors.light.stroke};
    `))};
`)

export const AlternateLink = styled.div`${({ theme }) => (css`
    text-align: center;

    a {
        display: inline-block;
        color: ${theme.colors.light.textSupport1};
        font-weight: 600;
        padding: 1.2rem;
        ${theme.mixins.genericLinkStates};
    }
`)}`;

export const ReturnLink = styled(AlternateLink)`${({ theme }) => (css`
    ${stroke(["right", "left", "bottom"])};

    ${theme.breakpoints.authSm} {
        border: none;
        ${stroke(["top", "bottom"])};
        margin-top: 4rem;
    }
`)}`;