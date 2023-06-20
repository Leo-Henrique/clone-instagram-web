import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 500px;
        margin: 0 auto;
        padding: 4rem 0;

        ${theme.breakpoints.md} {
            max-width: initial;
        }
    `}
`;

export const Title = styled.h1`
    ${({ theme }) => css`
        font-size: ${theme.fontSizes.h1};
        font-weight: 700;
        text-align: center;
        margin-bottom: 0.6rem;

        ${theme.breakpoints.md} {
            width: 100%;
            max-width: 500px;
            font-size: ${theme.fontSizes.h2};
            margin-left: auto;
            margin-right: auto;
            padding: 0 ${theme.global.containerPaddingX};
        }
    `}
`;

export const Text = styled.p`
    ${({ theme }) => css`
        color: ${theme.colors.textSupport2};
        text-align: center;

        & + & {
            margin-top: 0.6rem;
        }
        &:last-of-type {
            margin-bottom: 4rem;

            ${theme.breakpoints.md} {
                margin-bottom: 0;
            }
        }
        ${theme.breakpoints.md} {
            width: 100%;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
            padding: 0 ${theme.global.containerPaddingX};
        }
    `}
`;

export const DesktopUsers = styled.ul`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
        padding: 2rem;
        background-color: ${theme.colors.block};
        border: 1px solid ${theme.colors.separator};
        border-radius: 5px;
    `}
`;

export const mobileUsersItem = css`
    max-width: 450px;
    flex: 0 0 75%;
    flex-direction: column;
    row-gap: 2rem;
    padding: 3rem 2rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 0 32px 2px rgba(0, 0, 0, 0.16);
    background-color: ${({ theme }) => theme.colors.background};
`;
