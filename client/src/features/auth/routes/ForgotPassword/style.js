import { css, styled } from "styled-components";

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

export const ReturnLink = styled(AlternateLink)`
    border: 1px solid ${({ theme }) => theme.colors.light.stroke};
    border-top: none;
`;