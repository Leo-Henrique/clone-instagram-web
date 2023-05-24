import { m } from "framer-motion";
import { css, styled } from "styled-components";

export const Wrapper = styled(m.div)`${({ theme }) => (css`
    width: 100%;
    position: fixed;
    inset: auto 0 0;
    z-index: ${theme.zIndexes.message};
    padding: 1.5rem 15px;
    background-color: ${theme.colors.dark.blockSupport1};
    color: ${theme.colors.dark.text};

    p {
        max-width: 650px;
    }
`)}`;
