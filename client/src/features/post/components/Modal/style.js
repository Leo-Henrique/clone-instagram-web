import { css, styled } from "styled-components";
import DefaultModal from "../../../../components/Features/Modal";

export const commentsWidth = "400px";

export const Modal = styled(DefaultModal)`
    ${({ theme, $isError }) => css`
        > div {
            border-radius: 5px !important;

            ${$isError ||
            css`
                max-width: initial;
                width: calc(100vh - 4rem + ${commentsWidth});
                display: flex;
                flex-direction: column;
                overflow: hidden;
                margin: 0 6rem;

                ${theme.breakpoints.md} {
                    width: initial;
                    margin: initial;
                    max-width: 450px;
                }
            `}
        }
    `}
`;
