import { m } from "framer-motion";
import { css, styled } from "styled-components";
import { Link as DefaultLink } from "react-router-dom";

export const Wrapper = styled(m.div)`
    ${({ theme, $navbarHeight }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 2rem;
        width: 100%;
        position: fixed;
        inset: auto 0 0;
        z-index: ${theme.zIndexes.message};
        padding: 1.5rem 15px;
        background-color: ${theme.colors.messageBackground};
        color: ${theme.colors.messageText};

        p {
            max-width: 650px;
        }

        ${theme.breakpoints.md} {
            flex-direction: column;
            width: calc(100% - ${theme.global.containerPaddingX} * 2);
            bottom: calc(${$navbarHeight} + 10px);
            padding: 1.2rem;
            margin: 0 auto;
            border-radius: 5px;
        }
    `}
`;

export const Link = styled(DefaultLink)`
    ${({ theme }) => theme.mixins.link()};
`

export const Button = styled.button`
    ${({ theme }) => css`
        ${theme.mixins.link()};
        padding: 0.8rem;
        padding-right: 0;

        ${theme.breakpoints.md} {
            padding: 1.5rem 1.2rem;
            padding-bottom: 0;
        }
    `}
`;
