import { css, styled } from "styled-components";

export const Wrapper = styled.ul`${({ theme, $welcome }) => (css`
    display: flex;
    flex-direction: column;

    ${$welcome ? (css`
        row-gap: 2rem;
        padding: 2rem;
        background-color: ${theme.colors.block};
        border: 1px solid ${theme.colors.stroke};
        border-radius: 5px;

        ${theme.breakpoints.md} {
            flex-direction: row;
            padding: 0;
            column-gap: 1rem;
            background-color: transparent;
            border: none;
            border-radius: 0;
        }
    `) : (css`
        row-gap: 1rem;

        ${theme.breakpoints.lg} {
            display: none;
        }
    `)}
`)}`;

export const User = styled.li`${({ theme }) => (css`
    display: flex;
    align-items: center;
    column-gap: 1rem;

    ${theme.breakpoints.md} {
        flex: 1 0 250px;
        flex-direction: column;
        background-color: ${theme.colors.block};
        padding: 3rem 2rem;
        border-radius: 20px;
        text-align: center;
    }
`)}`;

export const UserImage = styled.div`${({ theme, $welcome }) => (css`
    &, img {
        width: ${$welcome ? "45px" : "32px"};
        height: auto;
        border-radius: 50%;

        ${theme.breakpoints.md} {
            width: 90px;
            margin-bottom: .6rem;
        }
    }
`)}`;

export const UserInfos = styled.div`${({ theme }) => (css`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    ${theme.breakpoints.md} {
        margin-bottom: 2rem;
        justify-content: center;
    }

    h2 {
        font-weight: 600;
    }
    svg {
        width: 12px;
        height: auto;
        margin-left: .6rem;
    }
    p {
        flex: 1 100%;
        color: ${theme.colors.textSupport2};
    }
`)}`;