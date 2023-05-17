import { css, styled } from "styled-components";

const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.subh1};
    font-weight: 600;
    text-align: center;
    ${({ $marginTop }) => $marginTop && (css` 
        margin-top: ${$marginTop};
    `)};
`;

export default Title;
