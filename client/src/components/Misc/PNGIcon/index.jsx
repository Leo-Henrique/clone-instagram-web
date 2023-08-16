import * as Styled from "./style";

export default function PNGIcon({ src, size, center, ...rest }) {
    return <Styled.Wrapper $src={src} $size={size} $center={center} {...rest} />;
}
