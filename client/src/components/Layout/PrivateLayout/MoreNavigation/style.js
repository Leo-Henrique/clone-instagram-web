import { m } from "framer-motion";
import { css, styled } from "styled-components";

import { Action, Icon, Text, actionActive } from "../Navigation/style";
import { linkMarginX } from "../style";

export const ButtonIcon = styled(Icon)``;
export const ButtonText = styled(Text)``;
export const MenuIcon = styled(Icon)``;

export const Wrapper = styled.div`
    ${({ theme }) => css`
        position: relative;

        ${theme.breakpoints.md} {
            display: none;
        }
    `}
`;

export const Button = styled(Action)`
    ${({ $menuOpen }) => $menuOpen && actionActive};
`;

export const Menu = styled(m.ul)`
    ${({ theme }) => css`
        position: absolute;
        inset: auto 0 calc(100% + 1rem);
        margin: 0 ${linkMarginX};
        background-color: ${theme.colors.blockSupport1};
        border-radius: 5px;
        overflow: hidden;
        ${theme.mixins.elementAbove};

        li:first-child a,
        li:first-child button {
            padding-top: 1.2rem;
        }
        li:last-child a,
        li:last-child button {
            padding-bottom: 1.2rem;
        }
        li + li a,
        li + li button {
            border-top: 1px solid ${theme.colors.stroke};
        }

        ${theme.breakpoints.xl} {
            bottom: calc(100% + 0.7rem);
            width: 226px;
        }
    `}
`;

export const MenuAction = styled.div`
    ${({ theme }) => css`
        width: 100%;
        display: flex;
        align-items: center;
        column-gap: 1.6rem;
        padding: 1rem 1.6rem;
        color: ${theme.colors.text};
        font-size: ${theme.fontSizes.subh1};
        background-color: transparent;
        cursor: pointer;
        ${theme.mixins.transition(["background-color, opacity"])};

        ${theme.queries.desktop} {
            &:hover {
                background-color: ${theme.colors.blockSupport2};

                svg,
                img {
                    transform: scale(1.1);
                }
            }
        }
        &:active {
            opacity: 0.6;
        }
        span {
            flex: 1;
        }
    `}
`;
