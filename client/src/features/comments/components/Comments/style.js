import { css, styled } from "styled-components";

export const wrapperStyles = ({ theme }) => css`
    flex: 1;
    border-top: 1px solid ${theme.colors.separator};
    border-bottom: 1px solid ${theme.colors.separator};
`;

export const Wrapper = styled.ul`
    ${({ theme, $loading }) => css`
        ${wrapperStyles};
        padding: 1rem 1.5rem;
        overflow-y: auto;
        ${theme.mixins.customScrollbar()}
        ${$loading &&
        css`
            display: flex;
            align-items: center;
            justify-content: center;
        `}
    `}
`;

export const Comment = styled.li`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    column-gap: 1.5rem;

    & + & {
        margin-top: calc(2rem - 0.6rem);
    }
`;

export const Content = styled.div`
    flex: 1;
    word-break: break-word;

    > *:first-child {
        margin-right: 0.6rem;
    }
`;
