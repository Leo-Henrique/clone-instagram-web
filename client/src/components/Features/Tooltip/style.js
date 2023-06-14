import { m } from "framer-motion";
import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled(m.div)`
    ${({ theme, $position = "top", $gap = "5px" }) => css`
        position: absolute;
        z-index: ${theme.zIndexes.tooltip};
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 320px;
        padding: 0.6rem 1.2rem;
        font-size: 1.4rem;
        white-space: nowrap;
        color: ${theme.colors.text};
        background-color: ${theme.colors.blockSupport1};
        border-radius: 5px;
        ${theme.mixins.elementAbove};

        &::before {
            content: "";
            position: absolute;
            border: 8px solid transparent;
        }

        ${() => {
            const setStyles = property => css` 
                ${property}: 100%;
                margin-${property}: ${$gap};

                &::before {
                    ${$position}: 100%;
                    border-${$position}-color: ${theme.colors.blockSupport1};
                }
            `;

            switch ($position) {
                case "top":
                    return setStyles("bottom");
                case "right":
                    return setStyles("left");
                case "bottom":
                    return setStyles("top");
                case "left":
                    return setStyles("right");
                default:
                    return setStyles("top");
            }
        }}
    `}
`;
