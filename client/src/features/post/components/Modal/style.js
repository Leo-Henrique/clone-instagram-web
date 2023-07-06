import { css } from "styled-components";

export const dialog = css`
    ${({ theme }) => css`
        max-width: initial;
        width: initial;
        display: flex;
        flex-direction: column;
        margin: 0 5rem;
        border-radius: 5px;

        ${theme.breakpoints.md} {
            max-width: 550px;
            width: 100%;
            margin: initial;
        }
    `}
`;
