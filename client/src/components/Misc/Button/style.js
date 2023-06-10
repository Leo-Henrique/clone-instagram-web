import { m } from "framer-motion";
import { css, styled } from "styled-components";

export const Button = styled(m.button)`
    ${({ theme, $expand = true, $primary = true }) => (css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: ${$expand ? "100%" : "initial"};
        padding: .6rem 1.6rem;
        text-align: center;
        font-weight: 600;
        border-radius: 8px;
        opacity: .7;
        ${theme.mixins.transition(["background-color, opacity"])};
        ${$primary ? (css`
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary};
        `) : (css`
            color: ${theme.colors.black};
            background-color: #EFEFEF;
        `)}

        &:not([disabled]) {
            opacity: 1;
            cursor: pointer;

            ${theme.queries.desktop} {
                &:hover {
                    background-color: ${$primary ? theme.colors.primaryDark1 : "#DBDBDB"};
                }
            }
            &:active {
                background-color: ${$primary ? theme.colors.primaryLight1 : "transparent"};
                ${$primary || (css` opacity: .7; `)}
            }
        }
`)}`
