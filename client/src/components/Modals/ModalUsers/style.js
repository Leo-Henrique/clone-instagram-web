import { css, styled } from "styled-components";

const paddingY = "1.2rem";

export const dialog = css`
    height: 100%;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
`;

export const Header = styled.div`
    ${({ theme }) => css`
        padding: ${paddingY} ${theme.global.containerPaddingX};
        text-align: center;
        border-bottom: 1px solid ${theme.colors.blockSupport3};
        position: relative;

        h1 {
            font-size: ${theme.fontSizes.subh1};
            font-weight: 600;
            color: ${theme.colors.text};
        }
    `}
`;

export const Close = styled.button.attrs(() => ({ type: "button" }))`
    ${({ theme }) => css`
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        padding: ${paddingY} ${theme.global.containerPaddingX};
        ${theme.mixins.genericLinkStates()};

        path {
            stroke: ${theme.colors.text};
        }
    `}
`;

export const Users = styled.ul`
    ${({ theme, $hasScrollbar }) => {
        const scrollbarPadding = 7;

        return css`
            height: 100%;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            row-gap: ${theme.global.containerPaddingX};
            padding: ${theme.global.containerPaddingX};

            ${$hasScrollbar &&
            css`
                padding-right: calc(
                    ${theme.global.containerPaddingX} - ${scrollbarPadding}px
                );
            `}

            ${theme.mixins.customScrollbar({
                padding: scrollbarPadding,
                bgColorTheme: "blockSupport1",
            })}
        `;
    }}
`;
