import { css, styled } from "styled-components";
import DefaultLogo from "../../Misc/Logo";
import { m } from "framer-motion";

const linkPaddingY = "1.5rem";
export const linkPaddingX = "1.5rem";
export const linkMarginX = ".9rem";

export const Navbar = styled.div`
    ${({ theme }) => css`
        position: fixed;
        z-index: ${theme.zIndexes.navbar};
        inset: 0 auto;
        max-width: 245px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: calc(4.5rem - ${linkPaddingY} * 2);
        padding: calc(4rem - ${linkPaddingY}) 0;
        background-color: ${theme.colors.block};
        border-right: 1px solid ${theme.colors.separator};

        ${theme.breakpoints.xl} {
            max-width: 72px;
            row-gap: calc(5.1rem - ${linkPaddingY} * 2);
            padding-top: calc(3.6rem - ${linkPaddingY});
            padding-bottom: calc(3.8rem - ${linkPaddingY});
        }
        ${theme.breakpoints.md} {
            max-width: initial;
            inset: auto 0 0;
            flex-direction: initial;
            padding: 0;
            border-right: initial;
            border-top: 1px solid ${theme.colors.separator};
        }
    `}
`;

export const Logo = styled(DefaultLogo)`
    ${({ theme }) => css`
        a {
            padding: ${linkPaddingY} ${linkPaddingX};
            margin: 0 ${linkMarginX};
        }
        ${theme.breakpoints.xl} {
            svg {
                width: 24px;
            }
        }
        ${theme.breakpoints.md} {
            display: none;
        }
    `}
`;

const mainAttrs = ({
    $isBreakpointMd,
    $headerHeight,
    $navbarHeight,
    $navbarWidth,
}) => {
    const styles = properties => ({ style: { ...properties } });

    if ($isBreakpointMd)
        return styles({
            minHeight: `calc(100vh - ${$headerHeight} - ${$navbarHeight})`,
            marginBottom: $navbarHeight,
        });

    return styles({ marginLeft: $navbarWidth });
};

export const Main = styled(m.main).attrs(mainAttrs)`
    min-height: 100vh;
    display: flex;
`;

export const Content = styled.div`
    ${({ theme }) => css`
        flex: 1;
        display: flex;
        ${theme.mixins.container({ paddingX: true, paddingY: true })}

        ${theme.breakpoints.md} {
            width: 100%;
            padding: 0;
        }
    `}
`;
