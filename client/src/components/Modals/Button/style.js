import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme, $danger }) => css`
        & + & {
            border-top: 1px solid ${theme.colors.blockSupport3};
        }

        button {
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
        }
    `}
`;
