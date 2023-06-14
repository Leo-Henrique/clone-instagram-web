import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    ${({ $src, $size, $center }) => css`
        max-width: 100%;
        width: ${$size}px;
        height: ${$size}px;
        background: url(${$src}) 50% / contain no-repeat;
        ${$center &&
        css`
            margin-left: auto;
            margin-right: auto;
        `}
    `}
`;
