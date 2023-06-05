import { css, styled } from "styled-components";

export const User = styled.li`${({ theme }) => (css`
    display: flex;
    align-items: center;
    column-gap: 1rem;

    ${theme.breakpoints.md} {
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