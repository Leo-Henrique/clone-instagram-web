import { css, styled } from "styled-components";

export const Wrapper = styled.div`${({ theme }) => (css`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 500px;
    margin: 0 auto;
    padding-top: 6rem;
    padding-bottom: 6rem;

    ${theme.breakpoints.md} {
        max-width: initial;
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
`)}`;

export const Title = styled.h1`${({ theme }) => (css`
    font-size: ${theme.fontSizes.h1};
    font-weight: 700;
    text-align: center;
    margin-bottom: .6rem;

    ${theme.breakpoints.md} {
        max-width: 500px;
        font-size: ${theme.fontSizes.h2};
        margin-left: auto;
        margin-right: auto;
        padding: 0 ${theme.global.containerPaddingX};
    }
`)}`;

export const Text = styled.p`${({ theme }) => (css`
    color: ${theme.colors.textSupport2};
    text-align: center;

    & + & {
        margin-top: .6rem;
    }
    &:last-of-type {
        margin-bottom: 4rem;
    }
    ${theme.breakpoints.md} {
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
        padding: 0 ${theme.global.containerPaddingX};
    }
`)}`;

export const Suggestions = styled.ul`${({ theme }) => (css`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding: 2rem;
    background-color: ${theme.colors.block};
    border: 1px solid ${theme.colors.stroke};
    border-radius: 5px;
`)}`;