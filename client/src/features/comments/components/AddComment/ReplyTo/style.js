import { m } from "framer-motion";
import { css, styled } from "styled-components";

export const Reply = styled(m.div)`
    ${({ theme }) => css`
        flex: 1 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 1.5rem;
        padding: 0 1.5rem;
        overflow: hidden;
        border-bottom: 1px solid ${theme.colors.separator};
    `}
`;

export const Text = styled.span`
    ${({ theme }) => css`
        max-width: 250px;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: calc(${theme.fontSizes.body} - 0.1rem);
        color: ${theme.colors.textSupport3};
    `}
`;

export const Close = styled.button.attrs(() => ({ type: "button" }))`
    ${({ theme }) => css`
        display: block;
        padding: 1rem 0;
        ${theme.mixins.genericLinkStates()};

        svg {
            width: 12px;
            height: 12px;
        }
        path {
            stroke: ${theme.colors.text};
        }
    `}
`;
