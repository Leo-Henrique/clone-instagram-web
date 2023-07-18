import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme, $direction = "row", $expand }) => css`
        display: flex;
        flex-wrap: wrap;
        flex-direction: ${$direction};
        justify-content: flex-end;
        align-items: center;
        column-gap: 1.6rem;
        row-gap: 1rem;

        ${$expand &&
        css`
            ${theme.breakpoints.sm} {
                flex: 1 100%;
            }
        `}
    `}
`;

export const SignUp = styled(Link)`
    ${({ theme }) => theme.mixins.link()}
`;
