import { css, styled } from "styled-components";

export const Wrapper = styled.article`
    ${({ theme }) => css`
        background-color: ${theme.colors.block};
        border: 1px solid ${theme.colors.separator};
        border-radius: 10px;
        overflow: hidden;

        ${theme.breakpoints.sm} {
            border: none;
            border-radius: 0;
        }
    `}
`;

export const SingleMedia = styled.div`
    display: flex;
`;

export const Infos = styled.div``;

export const ViewComments = styled.button`
    ${({ theme }) => css`
        color: ${theme.colors.textSupport2};
        ${theme.mixins.genericLinkStates()};
    `}
`