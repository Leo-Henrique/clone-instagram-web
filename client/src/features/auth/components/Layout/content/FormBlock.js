import { m } from "framer-motion";
import { css, styled } from "styled-components";

export const FormBlock = styled(m.div)`
    ${({ theme, $paddingTop = "4.5rem", $paddingBottom = "4.5rem" }) => css`
        ${theme.mixins.authBlock};
        padding-top: ${$paddingTop};
        padding-bottom: ${$paddingBottom};

        ${theme.breakpoints.authSm} {
            padding-top: 0;
            padding-bottom: 0;
        }
    `}
`;
