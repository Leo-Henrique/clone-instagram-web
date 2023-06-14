import { m } from "framer-motion";
import { css, styled } from "styled-components";

const stroke = sides => ({ theme }) => (css`
    ${sides.map(side => (css` 
        border-${side}: 1px solid ${theme.colors.stroke};
    `))};
`)

export const SmallLink = styled.div`${({ theme }) => (css`
    text-align: center;
    a {
        display: inline-block;
        padding: 1.2rem;
        font-size: ${theme.fontSizes.small};
        color: ${theme.colors.primaryDark2};
        ${theme.mixins.transition(["color"], "button")};

        ${theme.queries.desktop} {
            &:hover {
                color: ${theme.colors.primaryDark1};
            }
        }
        &:active {
            color: ${theme.colors.primary};
        }
    }
`)}`;

export const AlternateLink = styled(m.div)`${({ theme }) => (css`
    text-align: center;

    a {
        display: inline-block;
        color: ${theme.colors.textSupport1};
        font-weight: 600;
        padding: 1.2rem;
        ${theme.mixins.genericLinkStates()};
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
