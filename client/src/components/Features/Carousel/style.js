import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    ${({ $grab, $pressed, $padding }) => css`
        overflow: hidden;
        padding: ${$padding};
        position: relative;

        ${$grab &&
        css`
            cursor: ${$pressed ? "grabbing" : "grab"};
        `}
    `}
`;

export const Inner = styled.ul.attrs(({ $displacement }) => ({
    style: {
        transform: `translate3d(${$displacement}px, 0, 0)`,
    },
}))`
    ${({ theme, $transition, $droppedDrag }) => {
        const transitions = {
            opacity: css`
                opacity: 0;
            `,
            scale: css`
                opacity: 0.5;
                transform: scale(0.85);
            `,
        };

        return css`
            display: flex;

            ${$droppedDrag &&
            css`
                ${theme.mixins.transition(["transform"], "carousel")};
            `}

            > li {
                list-style: none;
                ${$transition && transitions[$transition]};
                ${theme.mixins.transition(["opacity", "transform"], "carousel")};

                &.visible {
                    transform: none;
                    opacity: 1;
                }
            }
        `;
    }}
`;
