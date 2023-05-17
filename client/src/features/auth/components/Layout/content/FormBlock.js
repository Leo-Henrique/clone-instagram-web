import { css, styled } from "styled-components";

const FormBlock = styled.div`
    ${({ theme, $paddingTop = "4.5rem", $paddingBottom = "4.5rem"  }) => (css`
        ${theme.mixins.authBlock};
        padding-top: ${$paddingTop};
        padding-bottom: ${$paddingBottom};

        ${theme.breakpoints.authSm} {
            padding-top: 0;
            padding-bottom: 0;
        }
    `)}
`;

export default FormBlock;
