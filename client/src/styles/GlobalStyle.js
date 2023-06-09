import { createGlobalStyle, css } from "styled-components";
import leoReset from "../../node_modules/leo-reset.css/dist/leo-reset.css?inline";

const GlobalStyle = createGlobalStyle`${({ theme }) => css`
    ${leoReset};

    body {
        font-size: ${theme.fontSizes.body};
        line-height: 1.5;
        font-weight: 400;
        font-family: ${theme.fontFamily};
        color: ${theme.colors.text};
        background-color: ${theme.colors.background};
    }
    input {
        ${theme.breakpoints.sm} {
            font-size: 16px;
        }
    }
`}`;

export default GlobalStyle;
