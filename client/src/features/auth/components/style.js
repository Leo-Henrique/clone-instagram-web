import { css, styled } from "styled-components"

const block = ({ theme }) => (css`
    max-width: 350px;
    padding-left: 4rem;
    padding-right: 4rem;
    border: 1px solid ${theme.colors.light.stroke};
`);

const Auth = styled.div`
    max-width: 350px;
    width: 100%;
`
Auth.Main = styled.div`
    ${block};
    padding-top: ${({ $paddingTop }) => $paddingTop};
    padding-bottom: ${({ $paddingBottom }) => $paddingBottom};
`;

Auth.Info = styled.div`${({ theme }) => (css`
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

Auth.Logo = styled.div`
    svg {
        ${({ theme }) => theme.mixins.SVGResponsive};
        margin: 0 auto 4rem;
    }
`

Auth.Separator = styled.div`
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

Auth.SmallLink = styled.div`${({ theme }) => (css`
    text-align: center;
    a {
        display: inline-block;
        padding: 1.2rem;
        font-size: ${theme.fontSizes.small};
        color: ${theme.colors.primaryDark2};
        ${theme.mixins.transition(["color"], "button")};

        ${theme.queries.desktop} {
            &:hover {
                color: ${theme.colors.primaryDark1};
            }
        }
        &:active {
            color: ${theme.colors.primary};
        }
    }
`)}`

export default Auth;