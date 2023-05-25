import { styled } from "styled-components";

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.textSupport2};
    line-height: 1.4;
    text-align: center;
    margin: 1rem 0 1.5rem;
    
    strong {
        color: ${({ theme }) => theme.colors.black};
        font-weight: 600;
    }
`;
