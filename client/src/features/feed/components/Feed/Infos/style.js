import { css, styled } from "styled-components";

export const Infos = styled.div`
    max-width: 320px;
    flex: 0 0 320px;
`;

export const UsersTitle = styled.p`
    color: ${({ theme }) => theme.colors.textSupport2};
    font-weight: 600;
    margin: 3rem 0 1.5rem;
`;

export const UsersList = styled.ul`
    ${({ theme, $skeleton }) => css`
        max-height: 310px;
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
