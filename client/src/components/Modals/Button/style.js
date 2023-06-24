import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    & + & {
        border-top: 1px solid ${({ theme }) => theme.colors.blockSupport3};
    }
`;

export const Button = styled.button`
    ${({ theme, $danger }) => css`
        width: 100%;
        display: block;
        padding: 1.3rem 3rem;
        text-align: center;
        ${theme.mixins.genericLinkStates()};
        ${theme.breakpoints.md} {
            padding: 1.5rem 2rem;
        }
        ${$danger
            ? css`
                  font-weight: 600;
                  color: ${theme.colors.danger};
              `
            : css`
                  color: ${theme.colors.text};
              `}
    `}
`;
