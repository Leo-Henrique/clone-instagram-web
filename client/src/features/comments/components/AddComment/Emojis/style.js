import { m } from "framer-motion";
import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    position: relative;
`;

export const Button = styled.button.attrs(() => ({ type: "button" }))`
    ${({ theme }) => css`
        padding: 1.5rem;
        ${theme.mixins.genericLinkStates()};

        svg {
            width: 24px;
            height: 24px;
        }
        path {
            fill: ${theme.colors.text};
        }
    `}
`;

export const PickerWrapper = styled(m.div)`
    position: absolute;
    left: 1.5rem;
    bottom: 100%;
`;
