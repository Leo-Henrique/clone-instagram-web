import { css, styled } from "styled-components";

export const Wrapper = styled.footer`${({ theme, $padding }) => (css`
    padding: ${$padding ? $padding : "5rem 0 3rem 0"};
    text-align: center;
    color: ${theme.colors.light.textSupport2};
`)}`

Wrapper.Text = styled.p`${({ theme }) => (css`
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