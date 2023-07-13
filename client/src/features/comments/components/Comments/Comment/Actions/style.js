import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        column-gap: 1.2rem;
        row-gap: 0.4rem;
        margin-top: 0.6rem;
        line-height: 1.084;
        font-size: ${theme.fontSizes.small};
        color: ${theme.colors.textSupport2};
    `}
`;

export const Action = styled.button.attrs(() => ({ type: "button" }))`
    ${({ theme }) => css`
        font-weight: 600;
        color: currentColor;
        ${theme.mixins.genericLinkStates()};

        svg {
            margin-left: -4px;
        }
        path[fill] {
            fill: ${theme.colors.textSupport2};
        }
    `}
`;

export const ToggleReplies = styled(Action)`
    flex: 1 100%;
    display: flex;
    align-items: center;
    column-gap: 1.2rem;
    margin-top: 1.6rem;

    &::before {
        content: "";
        display: block;
        width: 24px;
        height: 1px;
        background-color: currentColor;
    }
`;
