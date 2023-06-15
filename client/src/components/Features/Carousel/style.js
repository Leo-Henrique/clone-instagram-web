import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    overflow: hidden;
    padding: ${({ $padding = 0 }) => $padding};
`;

export const Inner = styled.ul`
    ${({ theme }) => css`
        display: flex;

        > * {
            list-style: none;
            opacity: 0.6;
            transform: scale(0.85);
            ${theme.mixins.transition(["opacity, transform"], "carousel")};

            &.visible {
                opacity: 1;
                transform: none;
            }
        }
    `}
`;
