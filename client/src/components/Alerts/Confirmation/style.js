import { css, styled } from "styled-components";

const button = ({ theme }) => css`
    border-top: 1px solid ${theme.colors.blockSupport3};

    button {
        width: 100%;
        display: block;
        padding: 1.3rem 3rem;
        text-align: center;
        ${theme.mixins.genericLinkStates()};
        ${theme.breakpoints.md} {
            padding: 1.5rem 2rem;
        }
    }
`;

export const Content = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 0.6rem;
        padding: 3rem;
        text-align: center;

        ${theme.breakpoints.md} {
            padding: 4rem 2rem;
        }
    `}
`;

export const Action = styled.div`
    ${({ theme }) => css`
        ${button}

        button {
            font-weight: 600;
            color: ${theme.colors.danger};
        }
    `}
`;

export const Cancel = styled.div`
    ${({ theme }) => css`
        ${button}

        button {
            color: ${theme.colors.text};
        }
    `}
`;
