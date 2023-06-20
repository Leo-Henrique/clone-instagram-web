import { css, styled } from "styled-components";

export const Wrapper = styled.li`
    ${({ $styles }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 1rem;

        ${$styles && $styles};
    `}
`;

export const customFollowLinkStyles = css`
    padding-right: 0;
`;
