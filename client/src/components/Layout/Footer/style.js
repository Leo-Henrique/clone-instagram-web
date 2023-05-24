import { css, styled } from "styled-components";

export const Wrapper = styled.footer`${({ theme }) => (css`
    padding: 5rem 1.5rem 3rem;
    text-align: center;
    color: ${theme.colors.light.textSupport2};
`)}`

export const Text = styled.p`${({ theme }) => (css`
    display: inline-block;

    ${theme.queries.desktop} {
        &:hover > span {
            color: ${theme.colors.primaryDark1};
        }
    }
    > span, > a {
        ${theme.mixins.transition(["color", "button"])};
    }
    > a {
        color: ${theme.colors.primaryDark2};

        ${theme.queries.desktop} {
            &:hover {
                color: ${theme.colors.primaryDark1};
            }
        }
        &:active {
            color: ${theme.colors.primary};
        }
    }
`)}`