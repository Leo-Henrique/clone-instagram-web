import { css, styled } from "styled-components";

const text = ({ theme }) => (css`
    color: ${theme.colors.light.textSupport2};
    text-align: center;
`);

export const Title = styled.h1`
    ${text};
    font-size: 1.7rem;
    line-height: 1.3;
    font-weight: 600;
`;

export const Text = styled.p`
    ${text};
    font-size: ${({ theme }) => theme.fontSizes.small};
    margin-bottom: 1.5rem;
`;
