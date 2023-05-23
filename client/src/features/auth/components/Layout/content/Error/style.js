import { m } from "framer-motion";
import { styled } from "styled-components";

const standardPadding = "calc(2.5rem - .8rem) 0 calc(2.5rem - 1.2rem)";

export const Wrapper = styled(m.div)`
    color: ${({ theme }) => theme.colors.danger};
    text-align: center;
    overflow: hidden;

    p {
        padding: ${({ $padding = standardPadding }) => $padding};
    }
`;
