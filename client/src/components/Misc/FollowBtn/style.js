import { css, styled } from "styled-components";

import CloneButton from "../Button";

export const Button = styled(CloneButton)`${({ theme, $link, primary }) => (css`
    ${$link && (css`
        background-color: transparent !important;
        padding-right: 0;
        ${theme.mixins.link({ fontSize: "small", primary })};
    `)}
`)}`;
