import { css, styled } from "styled-components";

export const shadow = intensity => css`
    filter: drop-shadow(0 0 6px rgba(0, 0, 0, ${intensity}));
`;

const gap = "1.5rem";

export const Arrow = styled.button`
    ${({ theme, $direction }) => css`
        position: absolute;
        top: 50%;
        padding: ${gap};
        ${$direction}: 0;
        cursor: pointer;
        ${shadow(0.6)};
        ${theme.mixins.genericLinkStates(2)};
    `}
`;

export const Dots = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 4px;
    position: absolute;
    inset: auto 0 ${gap};
`;

export const Dot = styled.div`
    ${({ theme, $active }) => css`
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: ${theme.colors.white};
        opacity: ${$active ? 1 : 0.4};
        ${shadow(0.4)};
    `}
`;
