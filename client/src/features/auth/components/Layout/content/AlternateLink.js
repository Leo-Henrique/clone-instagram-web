import { m } from "framer-motion";
import { css, styled } from "styled-components";

const AlternateLink = styled(m.div)`${({ theme }) => (css`
    text-align: center;

    a {
        display: inline-block;
        color: ${theme.colors.light.textSupport1};
        font-weight: 600;
        padding: 1.2rem;
        ${theme.mixins.genericLinkStates};
    }
`)}`;

export default AlternateLink;