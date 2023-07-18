import { css, styled } from "styled-components";

import DefaultButton from "../../../../components/Misc/Button";

export const Button = styled(DefaultButton)`
    ${({ theme, $link, primary, $linkStyles }) => css`
        ${$link &&
        css`
            background-color: transparent !important;
            ${theme.mixins.link({ fontSize: "small", primary })};
            ${$linkStyles && $linkStyles};
        `}
    `}
`;
