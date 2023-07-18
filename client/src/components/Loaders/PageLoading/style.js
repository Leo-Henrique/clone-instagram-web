import { m } from "framer-motion";
import { styled } from "styled-components";
import DefaultFooter from "../../Misc/Footer";

export const Wrapper = styled(m.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Logo = styled.div`
    position: relative;
    z-index: 1;
`;

export const Footer = styled(DefaultFooter)`
    padding: 3rem 1.5rem;

    @media (max-height: 250px) {
        display: none;
    }
`;
