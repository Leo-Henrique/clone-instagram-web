import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

export const Wrapper = styled(Link)`
    ${({ theme, to, $column, $gap = "1rem" }) => css`
        display: inline-flex;
        align-items: center;
        gap: ${$gap};
        color: ${theme.colors.text};

        ${$column &&
        css`
            flex-direction: column;
            width: 100%;
            ${theme.queries.desktop} {
                width: initial;
            }
        `}

        ${to &&
        css`
            ${theme.queries.desktop} {
                &:hover > * {
                    opacity: 0.75;
                }
            }
            &:active > * {
                opacity: 0.5;
            }
        `}
    `}
`;

export const Picture = styled.div`
    ${({ theme, $size = 32 }) => css`
        ${theme.mixins.transition(["opacity"])}
        flex-shrink: 0;

        img,
        & {
            width: ${$size}px;
            height: ${$size}px;
            border-radius: 50%;
        }
    `}
`;

export const Infos = styled.div`
    ${({ theme }) => css`
        ${theme.mixins.transition(["opacity"])};

        > div:nth-child(1) {
            display: flex;
            align-items: center;
            column-gap: 0.6rem;

            span {
                max-width: 155px;
                text-overflow: ellipsis;
                overflow: hidden;
                font-weight: 600;
            }
            svg {
                display: inline-block;
                width: 12px;
                height: auto;
            }
        }
        > div:nth-child(2) {
            max-width: 260px;
            color: ${theme.colors.textSupport2};
            word-break: break-word;
        }
    `}
`;
