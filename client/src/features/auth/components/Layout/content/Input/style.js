import { css, styled } from "styled-components";
import { m } from "framer-motion";

const fieldPadding = "1rem";
const fieldGap = ".6rem";

export const Wrapper = styled.div`
    & + & {
        margin-top: 0.8rem;
    }
    &:last-of-type {
        margin-bottom: 1.5rem;
    }
`;

export const Label = styled.label`
    ${({ theme, $focused, $filled }) => css`
        display: flex;
        align-items: center;
        column-gap: ${fieldPadding};
        position: relative;
        padding: 0 ${fieldPadding};
        font-size: ${theme.fontSizes.small};
        border: 1px solid
            ${$focused ? theme.colors.strokeFocus : theme.colors.stroke};
        border-radius: 3px;
        cursor: text;
        ${theme.mixins.transition(["border"], "button")};

        span {
            position: absolute;
            color: ${theme.colors.textSupport2};
            transform-origin: left;
            transition: transform ease-out 0.1s;
        }
        span::selection {
            background-color: transparent;
        }
        input {
            width: 100%;
            outline: none;
            padding: ${fieldPadding} 0;
        }

        ${$filled &&
        css`
            span {
                transform: scale(0.8) translateY(-12px);
            }
            input {
                padding-top: calc(${fieldPadding} + ${fieldGap});
                padding-bottom: calc(${fieldPadding} - ${fieldGap});
            }
        `}
    `}
`;

export const ShowPassword = styled(m.button)`
    ${({ theme }) => css`
        font-size: ${theme.fontSizes.body};
        font-weight: 600;
        color: ${theme.colors.textSupport1};
        cursor: pointer;
        ${theme.mixins.transition(["color"])};

        ${theme.queries.desktop} {
            &:hover {
                color: ${theme.colors.textSupport2};
            }
        }
        &:active {
            color: ${theme.colors.text};
        }
    `}
`;
