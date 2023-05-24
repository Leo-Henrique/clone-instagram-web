import { Link } from "react-router-dom";

import * as Styled from "./style.js";

export default function InfoBlock({ text, linkHref, linkText }) {
    return (
        <Styled.Wrapper>
            <p>
                <span>{text}</span>
                {"\n"}
                <Link to={linkHref}>{linkText}</Link>
            </p>
        </Styled.Wrapper>
    );
}
