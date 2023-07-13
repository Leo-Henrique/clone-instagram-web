import { css, styled } from "styled-components";

const borderColor = ({ theme, $bgColorTheme }) => {
    switch ($bgColorTheme) {
        case "background":
            return theme.colors.separator;
        case "blockSupport1":
            return theme.colors.blockSupport3;
        default:
            return theme.colors.blockSupport3;
    }
};

export const Wrapper = styled.div`
    ${({ theme, $isHighlight, $bgColorTheme }) => {
        return css`
            flex: 1;
            border-top: 1px solid ${borderColor};
            border-bottom: 1px solid ${borderColor};
            padding: 1rem 0;
            overflow-y: auto;

            ${$isHighlight ||
            css`
                min-height: 300px;
            `}

            ${theme.queries.desktop} {
                ${theme.mixins.customScrollbar({ bgColorTheme: $bgColorTheme })}
            }
        `;
    }}
`;
