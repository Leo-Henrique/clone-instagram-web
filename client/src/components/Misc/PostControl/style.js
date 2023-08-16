import { css, styled } from "styled-components";

export const Button = styled.button.attrs(() => ({ type: "button" }))`
    ${({ theme, $positionY = "top", $positionX = "left" }) => css`
        background-color: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(15px);
        ${theme.mixins.genericLinkStates(2)};
        padding: 0.8rem;
        border-radius: 50%;
        position: absolute;
        z-index: 1;
        ${$positionY}: 1.5rem;
        ${$positionX}: 1.5rem;

        svg {
            width: 12px;
            height: 12px;
        }
    `}
`;
