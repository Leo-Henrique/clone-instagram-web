import { css, styled } from "styled-components";

const gap = "1.5rem";

export const Likes = styled.button`
    ${({ theme }) => css`
        display: block;
        font-weight: 600;
        color: ${theme.colors.text};
        ${theme.mixins.genericLinkStates()};
    `}
`;

export const LikeWarning = styled.p`
`;
