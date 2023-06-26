import { css, styled } from "styled-components";

export const Actions = styled.div`
    display: flex;
    align-items: center;
`;

export const Action = styled.button.attrs(() => ({
    type: "button",
}))`
    ${({ theme }) => css`
        &:first-child {
            padding-left: 0;
        }
        &:last-child {
            margin-left: auto;
            padding-right: 0;
        }

        color: ${theme.colors.text};
        padding: 1.5rem calc(1.8rem / 2) calc(1.5rem / 2);
        ${theme.mixins.genericLinkStates()};

        path[fill] {
            fill: inherit;
        }
        path[stroke] {
            stroke: ${theme.colors.text};
        }
    `}
`;
