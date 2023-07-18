import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
    text-align: center;
`;

export const Warning = styled.span`
    ${({ theme }) => css`
        display: block;
        font-size: ${theme.fontSizes.h1};
        line-height: 1.2;
        font-weight: 600;
        margin-bottom: 0.6rem;
    `}
`;

export const Text = styled.span`
    ${({ theme }) => css`
        display: block;
        color: ${theme.colors.textSupport2};
    `}
`;

export const SignIn = styled(Link)`
    ${({ theme }) => theme.mixins.link()}
`;
