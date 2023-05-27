import { Link } from "react-router-dom";

import SVGInstagram from "../../../assets/icons/vectors/instagram.svg";
import * as Styled from "./style";

export default function Logo({ SVG, ...rest }) {
    return (
        <Styled.Wrapper {...rest}>
            <Link to="/" >
                {SVG ? SVG : <SVGInstagram />}
            </Link>
        </Styled.Wrapper>
    );
}
