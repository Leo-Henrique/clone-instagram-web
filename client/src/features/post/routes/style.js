import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme, $isAuthenticated }) => css`
        flex: 1;

        ${$isAuthenticated &&
        css`
            padding-top: 2rem;

            ${theme.breakpoints.md} {
                padding-top: 0;
            }
        `}
    `}
`;
