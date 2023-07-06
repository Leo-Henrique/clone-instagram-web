import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        column-gap: 1.2rem;
        font-size: ${theme.fontSizes.small};
        line-height: 1.084;
        color: ${theme.colors.textSupport2};

        > * {
            padding: 0.6rem 0;
        }
        > *:not(:first-child) {
            font-weight: 600;;
        }
        > button {
            color: currentColor;
            ${theme.mixins.genericLinkStates()};

            svg {
                margin-left: -4px;
            }
            path[fill] {
                fill: ${theme.colors.textSupport2};
            }
        }
    `}
`;
