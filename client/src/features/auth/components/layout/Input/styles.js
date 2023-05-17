import { css, styled } from "styled-components";

const fieldPadding = "1rem";
const fieldGap = ".6rem";

const Wrapper = styled.div`
    & + & {
        margin-top: 0.8rem;
    }
    &:last-of-type {
        margin-bottom: 1.5rem;
    }
`;

Wrapper.Label = styled.label`${({ theme, $focused, $filled }) => (css`
    display: flex;
    align-items: center;
    position: relative;
    padding: ${fieldPadding};
    font-size: ${theme.fontSizes.small};
    border: 1px solid ${$focused 
        ? theme.colors.light.strokeFocus 
        : theme.colors.light.stroke};
    border-radius: 3px;
    cursor: text;
    ${theme.mixins.transition(["border"], "button")};

    span {
        position: absolute;
        color: ${theme.colors.light.textSupport2};
        transform-origin: left;
        transition: transform ease-out .1s;
    }
    span::selection {
        background-color: transparent;
    }
    input {
        width: 100%;
        outline: none;
    }

    ${$filled && (css`
        padding-bottom: calc(${fieldPadding} - ${fieldGap});

        span {
            transform: scale(.8) translateY(-16px);
        }
        input {
            margin-top: ${fieldGap};
        }
    `)}
`)}`;

Wrapper.ShowPassword = styled.button`${({ theme }) => (css`
    margin-top: -${fieldGap};
    margin-left: ${fieldPadding};
    font-size: ${theme.fontSizes.body};
    font-weight: 600;
    color: ${theme.colors.light.textSupport1};
    cursor: pointer;
    ${theme.mixins.transition(["opacity"], "button")};

    ${theme.queries.desktop} {
        &:hover {
            opacity: .6;
        }
    }
    &:active {
        opacity: .3;
    }
`)}`

export default Wrapper;