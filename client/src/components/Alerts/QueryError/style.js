import { m } from "framer-motion";
import { css, styled } from "styled-components";
import Button from "../../Misc/Button";

export const Wrapper = styled(m.div)`
    ${({ theme, $padding, $center, $expandHeight }) => css`
        max-width: 500px;
        margin: 0 auto;
        padding: ${$padding || `3rem ${theme.global.containerPaddingX}`};

        ${$center &&
        css`
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
        `}
        ${$expandHeight &&
        css`
            height: 100%;
        `}
    `}
`;

export const Text = styled.p`
    ${({ theme, $large }) => css`
        font-size: ${$large ? theme.fontSizes.h2 : theme.fontSizes.subh1};
        color: ${theme.colors.text};
        font-weight: 600;
        margin-bottom: ${$large ? "2rem" : "1.2rem"};

        ${theme.breakpoints.sm} {
            font-size: ${theme.fontSizes.subh1};
        }
    `}
`;

export const TryAgain = styled(Button)`
    ${({ theme, $large }) =>
        $large ||
        css`
            font-size: calc(${theme.fontSizes.body} - 0.1rem);
            padding: 0.6rem 1.4rem;
        `}
`;
