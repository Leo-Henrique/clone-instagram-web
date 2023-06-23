import { css, styled } from "styled-components";

export const Content = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 0.6rem;
        padding: 3rem;
        text-align: center;
        border-bottom: 1px solid ${theme.colors.blockSupport3};

        ${theme.breakpoints.md} {
            padding: 4rem 2rem;
        }
    `}
`;
