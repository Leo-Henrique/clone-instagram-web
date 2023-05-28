import { css, styled } from "styled-components";

export const Button = styled.button`${({ theme, $filledFields, $expand = true }) => (css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${$expand ? "100%" : "initial"};
    padding: .6rem 1.6rem;
    text-align: center;
    font-weight: 600;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border-radius: 8px;
    opacity: ${$filledFields ? 1 : .7};
    ${theme.mixins.transition(["background-color, opacity"])};

    &:not([disabled]) {
        cursor: pointer;
        ${theme.queries.desktop} {
            &:hover {
                background-color: ${theme.colors.primaryDark1};
            }
        }
        &:active {
            background-color: ${theme.colors.primaryLight1};
        }
    }
`)}`
