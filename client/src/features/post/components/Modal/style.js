import { css } from "styled-components";

export const commentsWidth = "400px";

export const dialog = css`
    ${({ theme }) => css`
        max-width: initial;
        width: calc(100vh - 4rem + ${commentsWidth});
        display: flex;
        flex-direction: column;
        margin: 0 5rem;
        overflow: hidden;
        border-radius: 5px !important;

        ${theme.breakpoints.md} {
            width: initial;
            margin: initial;
            max-width: 450px;
        }
    `}
`;
