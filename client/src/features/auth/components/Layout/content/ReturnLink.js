import { css, styled } from "styled-components";

import AlternateLink from "./AlternateLink";

const stroke = sides => ({ theme }) => (css`
    ${sides.map(side => (css` 
        border-${side}: 1px solid ${theme.colors.light.stroke};
    `))};
`)

const ReturnLink = styled(AlternateLink)`${({ theme }) => (css`
    ${stroke(["right", "left", "bottom"])};

    ${theme.breakpoints.authSm} {
        border: none;
        ${stroke(["top", "bottom"])};
        margin-top: 4rem;
    }
`)}`;

export default ReturnLink;