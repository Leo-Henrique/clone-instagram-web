import { styled } from "styled-components";

export const Image = styled.div`
    margin-bottom: 2rem;

    &,
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.textSupport2};

    strong {
        font-weight: 600;
    }
`;
