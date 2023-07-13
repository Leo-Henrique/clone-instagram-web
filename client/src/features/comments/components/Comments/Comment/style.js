import { m } from "framer-motion";
import { css, styled } from "styled-components";
import Date from "../../../../../components/Misc/CreatedAt";

const gapItems = "1.6rem";

export const Wrapper = styled.li`
    ${({ theme, $isLegend, $isReply }) => css`
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: flex-start;
        justify-content: space-between;
        column-gap: 1.5rem;
        ${$isReply ||
        css`
            padding: 0 1.5rem;
        `}

        ${$isLegend &&
        css`
            border-bottom: 1px solid ${theme.colors.separator};
            padding-bottom: ${gapItems};
        `}

        & + & {
            margin-top: ${gapItems};
        }

        ${theme.breakpoints.md} {
            column-gap: 1rem;
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
    ${({ theme }) => css`
        font-size: ${theme.fontSizes.small};
        color: ${theme.colors.textSupport2};
        margin-left: 0.6rem;
    `}
`;

export const AuthorWarning = styled.span`
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

export const Replies = styled(m.ul)`
    overflow: hidden;
    grid-column: 2 / 4;

    > *:first-child {
        margin-top: 1.6rem;
    }
`;
