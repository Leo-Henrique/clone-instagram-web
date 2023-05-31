import { m } from "framer-motion";
import { styled } from "styled-components";

export const Wrapper = styled(m.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
`;
