import { m } from "framer-motion";
import { css, styled } from "styled-components";

export const Wrapper = styled(m.div)`
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
