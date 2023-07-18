import { styled } from "styled-components";

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
    display: flex;
    flex-direction: column;
    ${({ theme }) => theme.mixins.container()};

    main {
        flex: 1;
    }
`;
