import { css, styled } from "styled-components";

export const Wrapper = styled.div`${({ theme }) => (css`
    & + & {
        margin-top: 0.8rem;
    }
    &:last-of-type {
        margin-bottom: 1.5rem;
    }
    label {
        display: flex;
        align-items: center;
        position: relative;
        padding: .8rem;
        font-size: ${theme.fontSizes.small};
        border: 1px solid ${theme.colors.light.stroke};
        border-radius: 3px;
        cursor: text;

        span {
            position: absolute;
            color: ${theme.colors.light.textSupport2};
        }
        span::selection {
            background-color: transparent;
        }
        input {
            width: 100%;
            outline: none;
        }
    }
`)}`;
