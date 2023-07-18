import { styled } from "styled-components";

export const Back = styled.button.attrs(() => ({ type: "button" }))`
    padding-right: 1.4rem;
    ${({ theme }) => theme.mixins.genericLinkStates()}

    svg {
        transform: rotate(90deg);
    }
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.subh1};
    font-weight: 600;

    + div {
        width: 38px;
    }
`;
