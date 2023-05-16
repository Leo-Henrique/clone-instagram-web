import { css, styled } from "styled-components";

const block = ({ theme }) => (css`
    max-width: 350px;
    padding-left: 4rem;
    padding-right: 4rem;
    border: 1px solid ${theme.colors.light.stroke};
    
    @media (max-width: 450px) {
        border: none;
    }
`);

export const Main = styled.div`
    ${block};
    padding-top: ${({ $paddingTop }) => $paddingTop};
    padding-bottom: ${({ $paddingBottom }) => $paddingBottom};

    @media (max-width: 450px) {
        padding-top: 0;
        padding-bottom: 0;
    }
`;

export const Info = styled.div`${({ theme }) => (css`
    ${block};
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