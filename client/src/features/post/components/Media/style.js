import { styled } from "styled-components";

export const Media = styled.div`
    flex: 0 0 100%;
    height: ${({ $width }) => $width};
    position: relative;
    
    img, video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`