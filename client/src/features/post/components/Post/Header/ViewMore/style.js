import { css, styled } from "styled-components";

export const Wrapper = styled.button`
    ${({ theme }) => css`
        margin-left: auto;
        ${theme.mixins.genericLinkStates()};

        path {
            fill: ${theme.colors.text};
        }
    `}
`;
