import { m } from "framer-motion";
import { css, styled } from "styled-components";

export const Wrapper = styled(m.div)`
    position: fixed;
    inset: auto 0 0;
    background-color: rgba(0, 0, 0, 0.8);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
`;

export const Container = styled.div`
    ${({ theme }) => css`
        ${theme.mixins.container({ paddingX: true })};
        padding-top: 3.5rem;
        padding-bottom: 3.5rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
        color: ${theme.colors.white};

        ${theme.breakpoints.sm} {
            column-gap: 1rem;
            padding-top: 2rem;
            padding-bottom: 2rem;
        }
    `}
`;

export const Logo = styled.div`
    display: inline-block;
    padding: 1rem;
    border: 2px solid currentColor;
    border-radius: 50%;

    svg {
        width: 30px;
        height: 30px;

        path {
            fill: currentColor;
        }
    }
`;

export const Texts = styled.div`
    flex: 1;

    span {
        display: block;
        font-weight: 600;
        margin-bottom: 0.4rem;
    }
`;

export const Close = styled.button.attrs(() => ({ type: "button" }))`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1.2rem;
    ${({ theme }) => theme.mixins.genericLinkStates()};

    svg {
        width: 10px;
        height: 10px;

        path {
            stroke: ${({ theme }) => theme.colors.white};
        }
    }
`;
