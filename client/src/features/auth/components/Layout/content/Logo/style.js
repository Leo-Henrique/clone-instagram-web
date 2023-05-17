import { css, styled } from "styled-components";

const Wrapper = styled.div`${({ theme, $marginBottom }) => (css`
    svg {
        ${theme.mixins.SVGResponsive};
        margin: 0 auto ${$marginBottom ? $marginBottom : "4rem"};
    }
`)}`;

export default Wrapper;
