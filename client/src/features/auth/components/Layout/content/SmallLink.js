import { css, styled } from "styled-components";

const SmallLink = styled.div`${({ theme }) => (css`
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

export default SmallLink;