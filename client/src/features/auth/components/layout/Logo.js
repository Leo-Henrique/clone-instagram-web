import { styled } from "styled-components";

const Logo = styled.div`
    svg {
        ${({ theme }) => theme.mixins.SVGResponsive};
        margin: 0 auto 4rem;
    }
`;

export default Logo;
