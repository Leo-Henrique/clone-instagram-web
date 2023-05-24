import { css, styled } from "styled-components";

export const Separator = styled.div`
    margin: ${({ $margin = "2rem 0" }) => $margin};

    ${({ children, theme }) => children ? (css`
        display: flex;
        align-items: center;
        column-gap: 1.8rem;
        text-transform: uppercase;
        font-weight: 600;
        color: ${theme.colors.light.textSupport2};

        &::before, &::after {
            content: "";
            display: block;
            flex: 1 100%;
            height: 1px;
            background-color: ${theme.colors.light.stroke};
        }
    `) : (css`
        height: 1px;
        background-color: ${theme.colors.light.stroke};
    `)}
`;
