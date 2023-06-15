import { css, styled } from "styled-components";

export const Wrapper = styled.article`
    ${({ theme }) => css`
        background-color: ${theme.colors.block};
        border: 1px solid ${theme.colors.separator};
        border-radius: 10px;

        ${theme.breakpoints.sm} {
            border-right: none;
            border-bottom: none;
            border-left: none;
            border-radius: 0;
        }
    `}
`;

export const CarouselWrapper = styled.div`
    position: relative;
`;

export const SingleMediaWrapper = styled.div`
    display: flex;
`;

export const Infos = styled.div``;
