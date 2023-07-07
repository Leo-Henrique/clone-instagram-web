import { styled } from "styled-components";

export const Media = styled.div`
    flex: 0 0 100%;
    position: relative;
    height: ${({ $height }) => $height || "max-content"};

    img,
    video {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        object-position: center;
    }
`;
