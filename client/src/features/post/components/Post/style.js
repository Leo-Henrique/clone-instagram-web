import { css, styled } from "styled-components";
import { commentsWidth } from "../Modal/style";

export const Wrapper = styled.article`
    ${({ theme, $isHighlight, $isModalHighlight }) => css`
        background-color: ${theme.colors.block};
        border: 1px solid ${theme.colors.separator};
        border-radius: 10px;
        overflow: hidden;

        ${theme.breakpoints.sm} {
            border: none;
            border-radius: 0;
        }

        ${$isHighlight &&
        css`
            display: flex;
        `}

        ${$isModalHighlight &&
        css`
            border: none;
            border-radius: initial;

            ${theme.breakpoints.md} {
                overflow-y: auto;
            }
        `}
    `}
`;

export const Media = styled.div`
    ${({ $isHighlight }) => css`
        ${$isHighlight &&
        css`
            display: flex;
            align-items: center;
            flex: 1;
        `}
    `}
`;

export const Infos = styled.div`
    ${({ theme, $isHighlight, $isModalHighlight }) => css`
        ${$isHighlight &&
        css`
            display: flex;
            flex-direction: column;
        `}

        ${$isModalHighlight &&
        css`
            flex: 0 0 ${commentsWidth};
            overflow-y: auto;
            ${theme.mixins.customScrollbar({ padding: 7 })};
        `}
    `}
`;

export const ViewComments = styled.button`
    ${({ theme }) => css`
        color: ${theme.colors.textSupport2};
        ${theme.mixins.genericLinkStates()};
    `}
`;
