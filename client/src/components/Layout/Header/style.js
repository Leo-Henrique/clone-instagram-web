import { css, styled } from "styled-components";

export const Wrapper = styled.header`
    ${({ theme }) => css`
        background-color: ${theme.colors.block};
        border-bottom: 1px solid ${theme.colors.separator};
    `}
`;

export const Container = styled.div`
    ${({ theme, $paddingY = 0 }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 2rem;
        padding-top: ${$paddingY};
        padding-bottom: ${$paddingY};
        ${theme.mixins.container({ paddingX: true })}
    `}
`;
