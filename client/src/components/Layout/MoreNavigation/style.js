import { css, styled } from "styled-components";
import { m } from "framer-motion";

import { Action, Icon, actionActive } from "../Navigation/style";
import { linkMarginX } from "../style";

export const Wrapper = styled.div`
    position: relative;
`;

export const Button = styled(Action)`
    ${({ $menuOpen }) => $menuOpen && actionActive};
`;

export const ButtonIcon = styled(Icon)``;

export const Menu = styled(m.ul)`${({ theme, $buttonHeight }) => (css`
    position: absolute;
    inset: auto 0 calc(1rem + ${$buttonHeight});
    margin: 0 ${linkMarginX};
    background-color: ${theme.colors.blockSupport1};
    border-radius: 5px;
    overflow: hidden;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, .0975));
    box-shadow: -5px 7px 25px 5px rgba(0, 0, 0, .14);

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
`)}`;

export const MenuAction = styled.div`${({ theme }) => (css`
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

            svg, img {
                transform: scale(1.1);
            }
        }
    }
    &:active {
        opacity: .6;
    }
    span {
        flex: 1;
    }
`)}`;

export const MenuIcon = styled(Icon)``;