import { css, styled } from "styled-components";
import { linkMarginX, linkPaddingX } from "../style";

export const actionActive = (css`
    font-weight: 700;
`)

export const Wrapper = styled.nav`
    flex: 1;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: .8rem;
`

export const Action = styled.div`${({ theme }) => (css`
    width: calc(100% - ${linkMarginX} * 2);
    display: flex;
    align-items: center;
    column-gap: 1.6rem;
    margin: 0 ${linkMarginX};
    padding: 1.2rem ${linkPaddingX};
    font-size: ${theme.fontSizes.subh1};
    color: ${theme.colors.text};
    background-color: transparent;
    border-radius: 30px;
    cursor: pointer;
    ${theme.mixins.transition(["font-weight", "color", "background-color", "opacity"])};

    &.active {
        ${actionActive};
    }
    ${theme.queries.desktop} {
        &:hover {
            background-color: ${theme.colors.background};

            svg, img {
                transform: scale(1.1);
            }
        }
    }
    &:active {
        opacity: .6;

        svg, img {
            transform: scale(1);
        }
    }
`)}`;

export const Icon = styled.div`${({ theme }) => (css`
    svg, img {
        width: 24px;
        height: auto;
        ${theme.mixins.transition(["transform"])};
    }
    path[fill] {
        fill: currentColor;
    }
    path[stroke] {
        stroke: currentColor;
    }
    img {
        border-radius: 50%;
    }
`)}`;
