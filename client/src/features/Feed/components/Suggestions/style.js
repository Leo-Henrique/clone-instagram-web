import { css, styled } from "styled-components";

export const Wrapper = styled.li`${({ theme }) => (css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;

    ${theme.breakpoints.md} {
        flex-direction: column;
        row-gap: 2rem;
        background-color: ${theme.colors.block};
        padding: 3rem 2rem;
        border-radius: 20px;
        text-align: center;
        box-shadow: 0 0 32px 2px rgba(0, 0, 0, .16);
    }
`)}`;

export const customUserStyles = {};

customUserStyles.wrapper = ({ theme }) => (css`
    ${theme.breakpoints.md} {
        display: block;
        flex-direction: column;
        width: 100%;
    }
`);

customUserStyles.picture = ({ theme }) => (css`
    width: 45px;
    height: 45px;

    ${theme.breakpoints.md} {
        width: 120px;
        height: 120px;
        margin: 0 auto 1rem;
    }
    ${theme.breakpoints.sm} {
        width: 90px;
        height: 90px;
    }
`);
