import { styled } from "styled-components";

export const Title = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.h2};
`;

export const Description = styled.h2`
    color: ${({ theme }) => theme.colors.textSupport2};
`;
