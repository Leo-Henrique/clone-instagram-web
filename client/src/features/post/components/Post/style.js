import { css, styled } from "styled-components";

export const Wrapper = styled.article`
    ${({ theme, $isHighlight, $isModalHighlight }) => css`
        background-color: ${theme.colors.block};
        border: 1px solid ${theme.colors.separator};
        border-radius: 10px;
        overflow: hidden;

        ${$isModalHighlight
            ? css`
                  display: flex;
                  border: none;
              `
            : $isHighlight &&
              css`
                  display: grid;
                  grid-template-columns: 2fr 1fr;
              `}

        ${theme.breakpoints.sm} {
            border: none;
            border-radius: 0;
        }

        > div:first-child {
            display: flex;

            ${$isModalHighlight &&
            css`
                width: 105vh;
            `}
        }
    `}
`;

export const Infos = styled.div`
    ${({ $isModalHighlight }) =>
        $isModalHighlight &&
        css`
            flex: 1 50vh;
            display: flex;
            flex-direction: column;
        `}
`;

export const ViewComments = styled.button`
    ${({ theme }) => css`
        color: ${theme.colors.textSupport2};
        ${theme.mixins.genericLinkStates()};
    `}
`;
