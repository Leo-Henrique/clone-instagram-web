import { styled } from "styled-components";

const standardMargin = "calc(2.5rem - .8rem) 0 calc(2.5rem - 1.2rem)";

export const Wrapper = styled.p`
    color: ${({ theme }) => theme.colors.danger};
    margin: ${({ $margin = standardMargin }) => $margin};
    text-align: center;
`;
