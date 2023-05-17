import { styled } from "styled-components";

const Main = styled.div`
    ${({ theme }) => theme.mixins.authBlock};
    padding-top: ${({ $paddingTop = "4.5rem" }) => $paddingTop};
    padding-bottom: ${({ $paddingBottom = "4.5rem" }) => $paddingBottom};

    @media (max-width: 450px) {
        padding-top: 0;
        padding-bottom: 0;
    }
`;

export default Main;
