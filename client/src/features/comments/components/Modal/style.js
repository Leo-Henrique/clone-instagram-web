import { css, styled } from "styled-components";
import DefaultModal from "../../../../components/Features/Modal";

export const Modal = styled(DefaultModal)`
    padding-left: 0;
    padding-right: 0;

    > div {
        max-width: 600px;
        width: 100%;
        height: 76%;
        display: flex;
        flex-direction: column;
    }
`;

export const Header = styled.div`
    ${({ theme }) => css`
        padding: 1.5rem;
        text-align: center;
        font-size: ${theme.fontSizes.subh1};
        font-weight: 600;
    `}
`;
