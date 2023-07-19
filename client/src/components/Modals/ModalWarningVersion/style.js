import { css, styled } from "styled-components";

export const dialogStyles = css`
    padding: 3rem 1.5rem;
`;

export const Title = styled.span`
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.h1};
    font-weight: 600;
    margin-bottom: 1.2rem;
    text-align: center;
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.textSupport2};

    & + & {
        margin-top: 1rem;
    }
    &:last-of-type {
        margin-bottom: 2rem;
    }
`;
