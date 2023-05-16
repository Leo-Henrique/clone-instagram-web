import { styled } from "styled-components";

import IMGSmartphones from "../../../../assets/images/home-smartphones.png";

const SignInWrapper = styled.main`
    max-width: 790px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    column-gap: 3rem;
    flex: 1;
`;

SignInWrapper.Smartphones = styled.div`
    flex: 0 0 380px;
    height: 595px;
    background: url(${IMGSmartphones}) no-repeat;
    position: relative;

    @media (max-width: 875px) {
        display: none;   
    }

    img {
        position: absolute;
        top: 27px;
        right: 21px;
    }
    img:not(:first-child) {
        display: none;
        opacity: 0;
    }
`;

export default SignInWrapper;
