import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => css`
        flex: 1;
        border-top: 1px solid ${theme.colors.separator};
        border-bottom: 1px solid ${theme.colors.separator};
        padding: 1rem 0;
        overflow-y: auto;
        ${theme.mixins.customScrollbar()}
    `}
`;
