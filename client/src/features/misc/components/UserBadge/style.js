import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

export const Wrapper = styled(Link)`${({ theme, to, $styles }) => (css`
    display: inline-flex;
    align-items: center;
    column-gap: 1rem;
    color: ${theme.colors.text};

    ${to && (css`
        ${theme.queries.desktop} {
            &:hover > * {
                opacity: .75;
            }
        }
        &:active > * {
            opacity: .5;
        }
    `)}
    ${$styles && $styles};
`)}`;

export const Picture = styled.div`${({ theme, $styles }) => (css`
    ${theme.mixins.transition(["opacity"])};

    &, img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        ${$styles && $styles};
    }
`)}`;

export const Infos = styled.div`${({ theme, $styles }) => (css`
    ${theme.mixins.transition(["opacity"])};

    > div:nth-child(1) {
        font-weight: 600;

        svg {
            display: inline-block;
            width: 12px;
            height: auto;
            vertical-align: middle;
            margin-left: .6rem;
        }
    }
    > div:nth-child(2) {
        color: ${theme.colors.textSupport2};
    }
    ${$styles && $styles};
`)}`;
