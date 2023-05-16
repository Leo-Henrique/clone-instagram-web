import { css, styled } from "styled-components";

export const Button = styled.button`${({ theme }) => (css`
    display: inline-block;
    width: 100%;
    padding: .6rem 1.6rem;
    text-align: center;
    white-space: nowrap;
    font-weight: 600;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border-radius: 8px;
    cursor: pointer;
    ${theme.mixins.transition(["background-color"], "button")};

    ${theme.queries.desktop} {
        &:hover {
            background-color: ${theme.colors.primaryDark1};
        }
    }
    &:active {
        background-color: ${theme.colors.primaryLight1};
    }
`)}`