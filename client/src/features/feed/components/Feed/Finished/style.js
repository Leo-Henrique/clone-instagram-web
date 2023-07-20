import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.block};
        border-top: 1px solid ${theme.colors.separator};
        border-bottom: 1px solid ${theme.colors.separator};
        padding: 3rem 1.5rem;
        text-align: center;

        ${theme.breakpoints.lg} {
            border-bottom: none;
        }
    `}
`;

export const Title = styled.span`
    ${({ theme }) => css`
        display: block;
        font-size: ${theme.fontSizes.h2};
        margin-top: 1.6rem;
    `}
`;

export const Text = styled.p`
    max-width: 500px;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.textSupport2};
`;

export const Button = styled.button.attrs(() => ({ type: "button" }))`
    padding-top: 1.6rem;
    ${({ theme }) => theme.mixins.link()}
`;
