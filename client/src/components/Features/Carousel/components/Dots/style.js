import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 4px;
    margin-bottom: 1.5rem;
`;

export const Dot = styled.span`
    ${({ theme, $active }) => css`
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: ${theme.colors.white};
        opacity: ${$active ? 1 : 0.4};
        filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.6));
        ${theme.mixins.transition(["opacity"], "button")};
    `}
`;
