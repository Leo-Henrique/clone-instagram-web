import { css, styled } from "styled-components";

import IMGSmartphones from "../../../../assets/images/home-smartphones.png";

const Wrapper = styled.div`
    flex: 0 0 380px;
    height: 595px;
    background: url(${IMGSmartphones}) no-repeat;
    position: relative;

    @media (max-width: 875px) {
        display: none;   
    }
`;

Wrapper.Item = styled.img`${({ theme, $currentItem }) => (css`
    position: absolute;
    top: 27px;
    right: 21px;
    opacity: ${$currentItem ? 1 : 0};
    display: ${$currentItem ? "block" : "none"};
    ${theme.mixins.transition(["opacity"], "slideshow")};
`)}`

export default Wrapper;