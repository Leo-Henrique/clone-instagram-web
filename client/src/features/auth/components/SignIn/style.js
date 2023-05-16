import { styled } from "styled-components";

import IMGSmartphones from "../../../../assets/images/home-smartphones.png";

export const Wrapper = styled.main`
    max-width: 790px;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    column-gap: 3rem;
    border: 1px solid blue;
`;

export const Smartphones = styled.div`
    flex: 0 0 380px;
    height: 595px;
    background: url(${IMGSmartphones}) no-repeat;
    border: 1px solid red;
    position: relative;

    img {
        position: absolute;
        top: 27px;
        right: 18px;
    }
    img:not(:first-child) {
        display: none;
        opacity: 0;
    }
`;