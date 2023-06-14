import { css, styled } from "styled-components";

export const Image = styled.img`
    ${({ theme, $load }) => css`
        opacity: ${$load ? 1 : 0};
        ${theme.mixins.transition(["opacity", "global"])};
    `}
`;
