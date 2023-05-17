import { css, styled } from "styled-components";

const Wrapper = styled.div`${({ theme }) => (css`
    ${theme.mixins.authBlock};
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-top: 1rem;
    text-align: center;

    a {
        color: ${theme.colors.primary};
        font-weight: 600;
        ${theme.mixins.transition(["color", "button"])};

        ${theme.queries.desktop} {
            &:hover {
                color: ${theme.colors.primaryDark1};
            }
        }
        &:active {
            color: ${theme.colors.primaryDark2};
        }
    }
`)}`;

export default Wrapper;
