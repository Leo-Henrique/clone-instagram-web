import { css, styled } from "styled-components";

export const Icon = styled.div`
    svg {
        margin: 0 auto;
        ${({ theme }) => theme.mixins.SVGResponsive};
    }
`

export const ReturnLink = styled.div`${({ theme }) => (css`
    text-align: center;

    a {
        display: inline-block;
        padding: 1.2rem;
        font-weight: 700;
        text-transform: uppercase;
        color: ${theme.colors.primary};
        ${theme.mixins.genericLinkStates()};
    }        
`)}`;