import { css, styled } from "styled-components";
import { wrapperStyles } from "../style";

export const Wrapper = styled.div`
    ${wrapperStyles};
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
