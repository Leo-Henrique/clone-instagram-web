import { css, styled } from "styled-components";
import DefaultLogo from "../../Misc/Logo";

export const Logo = styled(DefaultLogo)`
    align-self: stretch;

    a {
        height: 100%;
        display: flex;
    }
`;

const contentAttrs = ({ $warningHeight, $headerHeight }) => {
    const styles = properties => ({ style: { ...properties } });

    if ($warningHeight)
        return styles({
            minHeight: `calc(100vh - ${$headerHeight} - ${$warningHeight})`,
            marginBottom: $warningHeight,
        });

    return styles({ minHeight: `calc(100vh - ${$headerHeight})` });
};

export const Content = styled.div.attrs(contentAttrs)`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        padding-top: ${theme.global.containerPaddingY};
        ${({ theme }) => theme.mixins.container({ paddingX: true })};

        ${theme.breakpoints.md} {
            padding: 0;
        }
        main {
            flex: 1;
        }
    `}
`;
