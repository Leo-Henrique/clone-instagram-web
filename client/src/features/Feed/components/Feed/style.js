import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        column-gap: 3rem;
        padding-top: 2rem;

        ${theme.breakpoints.lg} {
            padding-top: 0;
        }
    `}
`;

export const Posts = styled.div`
    flex: 1;
    ${({ theme }) => css`
        ${theme.breakpoints.lg} {
            max-width: 585px;
        }
    `}
`;

export const Infos = styled.div`
    max-width: 320px;
    flex: 0 0 320px;
`;

export const UsersTitle = styled.p`
    color: ${({ theme }) => theme.colors.textSupport2};
    font-weight: 600;
    margin: 1rem 0 1.5rem;
`;

export const UsersList = styled.ul`
    ${({ theme, $skeleton }) => css`
        max-height: 245px;
        ${theme.mixins.customScrollbar()};
        ${$skeleton ||
        css`
            overflow-y: auto;
        `};

        li + li {
            margin-top: 1.5rem;
        }
    `}
`;
