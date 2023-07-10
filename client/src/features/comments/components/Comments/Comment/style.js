import { css, styled } from "styled-components";
import Date from "../../../../../components/Misc/CreatedAt";
import ViewMore from "../../../../../components/Misc/ViewMore";

const gapItems = "1.4rem";
const smallText = ({ theme }) => css`
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.textSupport2};
`;

export const Wrapper = styled.li`
    ${({ theme, $isLegend }) => css`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        column-gap: 1.5rem;
        padding: 0 1.5rem;

        ${$isLegend &&
        css`
            border-bottom: 1px solid ${theme.colors.separator};
            padding-bottom: ${gapItems};
        `}

        & + & {
            margin-top: ${gapItems};
        }
    `}
`;

export const Main = styled.div`
    flex: 1;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
`;

export const CreatedAt = styled(Date)`
    ${smallText}
    margin-left: 0.6rem;
`;

export const LegendAuthor = styled.span`
    ${({ theme }) => {
        const size = `calc(${theme.fontSizes.body} - 0.1rem)`;

        return css`
            margin-left: 0.4rem;
            color: ${theme.colors.textSupport2};
            font-size: ${size};
            ${theme.mixins.dot({ size })};
        `;
    }}
`;

export const Content = styled(ViewMore)`
    margin-top: 0.2rem;
`;
