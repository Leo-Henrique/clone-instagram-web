import { css, styled } from "styled-components";

export const Wrapper = styled.header`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        column-gap: 1rem;
        padding: ${theme.global.containerPaddingX};

        ${theme.breakpoints.md} {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
    `}
`;

export const highlightFollowButton = css`
    ${({ theme }) => css`
        font-size: ${theme.fontSizes.body};
        padding-left: 0.6rem;
        margin-left: 3px;
        position: relative;

        &::before {
            content: "•";
            position: absolute;
            top: 50%;
            right: 100%;
            transform: translateY(-50%);
        }
    `}
`;
