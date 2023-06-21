import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => css`
        width: 100%;
        display: flex;
        justify-content: center;
        column-gap: 3rem;
        padding-top: 3rem;

        ${theme.breakpoints.md} {
            padding-bottom: 2rem;
        }
    `}
`;

export const Posts = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;

    ${({ theme }) => css`
        ${theme.breakpoints.lg} {
            max-width: 585px;
        }
    `}
`;
