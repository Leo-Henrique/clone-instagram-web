import { styled } from "styled-components";

const Text = styled.p`
    color: ${({ theme }) => theme.colors.light.textSupport2};
    line-height: 1.4;
    text-align: center;
    margin: 1rem 0 1.5rem;
    
    strong {
        color: ${({ theme }) => theme.colors.black};
        font-weight: 600;
    }
`;

export default Text;
