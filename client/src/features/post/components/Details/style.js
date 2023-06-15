import { css, styled } from "styled-components";

const gap = "1.5rem";

export const Wrapper = styled.div`
    ${({ $highlight }) => css`
        padding: ${$highlight ? `0 ${gap}` : `0 ${gap} 1rem`};
    `}
`;

export const Actions = styled.ul`
    display: flex;
    align-items: center;

    & + * {
        padding-top: calc(${gap} / 2);
    }
`;

export const Action = styled.li`
    ${({ theme }) => css`
        &:first-child button {
            padding-left: 0;
        }
        &:last-child {
            margin-left: auto;

            button {
                padding-right: 0;
            }
        }
        button {
            padding: 1.5rem calc(1.8rem / 2) calc(${gap} / 2);
            cursor: pointer;
            ${theme.mixins.genericLinkStates()};

            path[fill] {
                fill: ${theme.colors.text};
            }
            path[stroke] {
                stroke: ${theme.colors.text};
            }
        }
    `}
`;

export const Likes = styled.button`
    ${({ theme }) => css`
        display: block;
        padding-right: ${gap};
        padding-bottom: 1rem;
        font-weight: 600;
        color: ${theme.colors.text};
        cursor: pointer;
        ${theme.mixins.genericLinkStates()};
    `}
`;

export const LikeWarning = styled.p`
    padding-bottom: 1rem;
`;

export const Date = styled.time`
    ${({ theme }) => css`
        display: block;
        font-size: calc(${theme.fontSizes.small} - 1px);
        color: ${theme.colors.textSupport2};
        text-transform: uppercase;
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
