import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => css`
        flex: 1;
        padding-top: 2rem;

        ${theme.breakpoints.md} {
            padding-top: 0;
        }
    `}
`;
