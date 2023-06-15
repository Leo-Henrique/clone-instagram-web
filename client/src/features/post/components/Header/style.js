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

export const ViewMore = styled.button`
    ${({ theme }) => css`
        margin-left: auto;
        cursor: pointer;
        ${theme.mixins.genericLinkStates()};

        path {
            fill: ${theme.colors.text};
        }
    `}
`;
