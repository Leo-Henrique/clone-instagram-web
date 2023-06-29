import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

const gap = "1.5rem";

export const Wrapper = styled.div`
    ${({ $highlight }) => css`
        padding: ${$highlight ? `0 ${gap}` : `0 ${gap} 1rem`};

        > * + * {
            padding-top: calc(${gap} / 4);
            padding-bottom: calc(${gap} / 4);
        }
        > *:nth-child(2) {
            padding-top: calc(${gap} / 2);
        }
        > *:last-child {
            padding-bottom: 0;
        }
    `}
`;

export const Username = styled(Link)`
    ${({ theme }) => css`
        display: inline-block;
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 600;
        margin-right: 0.6rem;
        vertical-align: top;
        color: ${theme.colors.text};
        ${theme.mixins.genericLinkStates()};
    `}
`;

export const ViewComments = styled.button`
    ${({ theme }) => css`
        color: ${theme.colors.textSupport2};
        ${theme.mixins.genericLinkStates()};
    `}
`;

export const dateStyles = ({ theme }) => css`
    display: block;
    font-size: calc(${theme.fontSizes.small} - 1px);
    color: ${theme.colors.textSupport3};
    text-transform: uppercase;
`;
