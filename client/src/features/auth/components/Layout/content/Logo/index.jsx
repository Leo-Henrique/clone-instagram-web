import SVGInstagram from "../../../../../../assets/icons/vectors/instagram.svg";
import * as Styled from "./style";

export default function Logo(props) {
    return (
        <Styled.Wrapper {...props}>
            <SVGInstagram />
        </Styled.Wrapper>
    );
}
