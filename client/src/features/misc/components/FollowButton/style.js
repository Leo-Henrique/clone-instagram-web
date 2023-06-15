import { css, styled } from "styled-components";

import CloneButton from "../../../../components/Misc/Button";

export const Button = styled(CloneButton)`
    ${({ theme, $link, primary, $linkStyles }) => css`
        ${$link &&
        css`
            background-color: transparent !important;
            ${$linkStyles && $linkStyles};
            ${theme.mixins.link({ fontSize: "small", primary })};
        `}
    `}
`;
