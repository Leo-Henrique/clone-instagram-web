import { m } from "framer-motion";
import { css, styled } from "styled-components";

const paddingY = "1.5rem";

export const Wrapper = styled.form`
    ${({ theme }) => css`
        border-top: 1px solid ${theme.colors.separator};
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        position: relative;
    `}
`;

export const ViewEmotes = styled.button.attrs(() => ({ type: "button" }))`
    ${({ theme }) => css`
        padding: ${paddingY};
        ${theme.mixins.genericLinkStates()};

        svg {
            width: 24px;
            height: 24px;
        }
        path {
            fill: ${theme.colors.text};
        }
    `}
`;

export const ToComment = styled.textarea`
    ${({ theme }) => css`
        display: inline-block;
        flex: 1;
        border: none;
        background: none;
        resize: none;
        outline: 0;
        color: ${theme.colors.text};
        margin: ${paddingY} 0;
        overflow-y: auto;
        ${theme.mixins.customScrollbar({ width: 16, padding: 6 })}
        ${theme.mixins.transition(["opacity"])}

        &::placeholder {
            color: ${theme.colors.textSupport2};
        }
        &[disabled] {
            opacity: 0.18;
        }
    `}
`;

export const Submit = styled.button`
    ${({ theme }) => css`
        padding: ${paddingY};
        ${theme.mixins.link()};

        &[disabled] {
            opacity: 0.5;
            pointer-events: none;
        }
    `}
`;

export const spinner = css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;
