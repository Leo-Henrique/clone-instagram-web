import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    overflow: hidden;
    cursor: grab;
`;

export const Inner = styled.div`${({ theme }) => (css`
    display: flex;

    > * {
        max-width: 450px;
        flex: 1 0 75%;
        opacity: .6;
        transform: scale(.85);
        ${theme.mixins.transition(["opacity, transform"], "carousel")};

        &.visible {
            opacity: 1;
            transform: none;
        }
    }
`)}`;