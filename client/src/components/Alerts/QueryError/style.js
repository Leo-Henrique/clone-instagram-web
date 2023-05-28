import { m } from "framer-motion";
import { css, styled } from "styled-components";

export const Wrapper = styled(m.div)`${({ theme }) => (css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    padding: 2rem ${theme.global.containerPadding};
    row-gap: 2rem;
    height: 100%;
`)}`;

export const Icon = styled.div`${({ theme }) => (css`
    svg {
        width: 80px;
        ${theme.mixins.SVGResponsive};

        ${theme.breakpoints.sm} {
            width: 65px;
        }
    }
    path {
        fill: ${theme.colors.text};
    }
`)}`;

export const Text = styled.p`${({ theme, $pageError }) => (css`
    font-size: ${$pageError ? theme.fontSizes.h2 : theme.fontSizes.subh1};
    color: ${$pageError ? theme.colors.text : theme.colors.danger};
    font-weight: 600;

    ${theme.breakpoints.sm} {
        font-size: ${$pageError ? theme.fontSizes.subh1 : "inherit"};
    }
`)}`;
