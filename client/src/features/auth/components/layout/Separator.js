import { css, styled } from "styled-components";

const Separator = styled.div`
    margin: ${({ $margin }) => $margin ? $margin : "2rem 0"};

    ${({ children, theme }) => children ? (css`
        display: flex;
        align-items: center;
        column-gap: 1.8rem;
        text-transform: uppercase;

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

export default Separator;