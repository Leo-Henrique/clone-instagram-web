import { m } from "framer-motion";
import { css, styled } from "styled-components";

export const Wrapper = styled(m.div)`
    flex: 1;
    align-self: center;
    text-align: center;
    max-width: 550px;
    margin: 0 auto;

    ${({ theme }) => css`
        ${theme.breakpoints.md} {
            padding: 3rem ${theme.global.containerPaddingX};
        }
    `}
`;

export const Title = styled.h1`
    ${({ theme }) => css`
        font-size: ${theme.fontSizes.h1};
        font-weight: 600;
        margin-bottom: 2rem;
    `}
`;

export const Text = styled.p`
    ${({ theme }) => css`
        color: ${theme.colors.textSupport2};
        font-size: ${theme.fontSizes.subh1};
        margin-bottom: 2rem;

        ${theme.breakpoints.md} {
            font-size: ${theme.fontSizes.body};
        }
    `}
`;
