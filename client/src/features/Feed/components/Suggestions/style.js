import { css, styled } from "styled-components";

export const Wrapper = styled.li`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 1rem;

        ${theme.breakpoints.md} {
            flex-direction: column;
            row-gap: 2rem;
            background-color: ${theme.colors.block};
            padding: 3rem 2rem;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 0 32px 2px rgba(0, 0, 0, 0.16);
        }
    `}
`;
