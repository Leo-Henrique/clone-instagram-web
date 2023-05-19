import { css, styled } from "styled-components";

const Img = styled.img`${({ theme, $load }) => (css`
    opacity: ${$load ? 1 : 0};
    ${theme.mixins.transition(["opacity", "global"])};
`)}`

export default Img;