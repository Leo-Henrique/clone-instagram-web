import { css, styled } from "styled-components";

export const Video = styled.video`
    ${({ theme, $isLoaded }) => css`
        opacity: ${$isLoaded ? 1 : 0};
        ${theme.mixins.transition(["opacity"], "global")}
    `}
`;
