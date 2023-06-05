import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    overflow: hidden;
`;

export const Inner = styled.div`${({ theme, $active }) => (css`
    ${$active && (css`
        display: flex;

        > * {
            flex: 1 0 80%;
           ${theme.mixins.transition(["opacity, transform"])};
        }
        > *[active] {
            opacity: 1;
            transform: none;
        }
    `)}
`)}`;