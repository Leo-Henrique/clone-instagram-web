import { css, styled } from "styled-components";

const Wrapper = styled.div`
    ${({ theme, $isAuthenticated }) => (css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: ${$isAuthenticated
            ? theme.colors.background
            : theme.colors.light.background};
    `)}
`;

export default Wrapper;