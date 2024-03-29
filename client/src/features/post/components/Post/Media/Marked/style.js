import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

export const Badges = styled.div`
    position: absolute;
    inset: 0;
`;

export const Badge = styled(Link)`
    ${({ theme, $offsetX, $offsetY }) => css`
        display: inline-block;
        font-weight: 600;
        color: ${theme.colors.white};
        border-radius: 3px;
        padding: 0.6rem 1.2rem;
        position: absolute;
        top: ${$offsetY}%;
        left: ${$offsetX}%;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(15px);
        ${theme.mixins.genericLinkStates(2)};

        &::before {
            content: "";
            display: inline-block;
            width: 5px;
            height: 5px;
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 5px solid transparent;
            border-bottom-color: rgba(0, 0, 0, 0.8);
        }
    `}
`;
