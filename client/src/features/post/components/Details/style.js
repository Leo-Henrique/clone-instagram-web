import { css, styled } from "styled-components";

const gap = "1.5rem";

export const Wrapper = styled.div`
    ${({ $highlight }) => css`
        padding: ${$highlight ? `0 ${gap}` : `0 ${gap} 1rem`};

        > * + * {
            padding-top: calc(${gap} / 4);
            padding-bottom: calc(${gap} / 4);
        }
        > *:nth-child(2) {
            padding-top: calc(${gap} / 2);
        }
        > *:last-child {
            padding-bottom: 0;
        }
    `}
`;

export const Legend = styled.legend`
    ${({ theme }) => css`
        a {
            color: ${theme.colors.text};
            font-weight: 600;
            margin-right: 0.6rem;
        }
        p {
            display: inline;
            word-break: break-word;
        }
    `}
`;

export const ViewComments = styled.button`
    ${({ theme }) => css`
        color: ${theme.colors.textSupport2};
        ${theme.mixins.genericLinkStates()};
    `}
`;

export const Date = styled.time`
    ${({ theme }) => css`
        display: block;
        font-size: calc(${theme.fontSizes.small} - 1px);
        color: ${theme.colors.textSupport3};
        text-transform: uppercase;
    `}
`;
