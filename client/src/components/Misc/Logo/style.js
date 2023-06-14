import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => css`
        a {
            display: block;
            ${theme.mixins.genericLinkStates()};
        }
        svg {
            display: inline-block;
            width: 103px;
            height: auto;
        }
        path {
            fill: ${theme.colors.text};
        }
    `}
`;
