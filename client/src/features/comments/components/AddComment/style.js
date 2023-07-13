import { css, styled } from "styled-components";

const paddingY = "1.5rem";

export const Wrapper = styled.form`
    ${({ theme, $isHighlight }) => css`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        position: relative;

        ${$isHighlight ||
        css`
            border-top: 1px solid ${theme.colors.separator};
        `}
    `}
`;

export const ToComment = styled.textarea`
    ${({ theme, $bgColorTheme }) => css`
        display: inline-block;
        flex: 1;
        border: none;
        background: none;
        resize: none;
        outline: 0;
        color: ${theme.colors.text};
        margin: ${paddingY} 0;
        overflow-y: auto;
        ${theme.mixins.transition(["opacity"])}

        &::placeholder {
            color: ${theme.colors.textSupport2};
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow-x: hidden;
        }
        &:placeholder-shown {

        }
        &[disabled] {
            opacity: 0.18;
        }

        ${theme.queries.desktop} {
            ${theme.mixins.customScrollbar({
                width: 16,
                padding: 6,
                bgColorTheme: $bgColorTheme,
            })}
        }
        ${theme.breakpoints.md} {
            margin-left: ${paddingY};
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
