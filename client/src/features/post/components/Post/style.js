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
                  border-radius: initial;
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
    `}
`;

export const Media = styled.div`
    ${({ theme, $isModalHighlight }) => css`
        display: flex;

        ${$isModalHighlight &&
        css`
            width: 107vh;
            align-items: center;

            ${theme.breakpoints.md} {
                display: none;
            }
            @media (max-height: 200px) {
                display: none;
            }

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
            flex: 0 0 400px;
            overflow-y: auto;
            ${theme.mixins.customScrollbar({ padding: 7 })};

            ${theme.breakpoints.md} {
                flex: 1 100%;
            }
        `}
    `}
`;

export const ViewComments = styled.button`
    ${({ theme }) => css`
        color: ${theme.colors.textSupport2};
        ${theme.mixins.genericLinkStates()};
    `}
`;
