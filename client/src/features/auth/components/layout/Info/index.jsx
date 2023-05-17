import { Link } from "react-router-dom";

import Wrapper from "./style.js";

export default function Info({ text, linkHref, linkText }) {
    return (
        <Wrapper>
            <p>
                <span>{text}</span>
                {"\n"}
                <Link to={linkHref}>{linkText}</Link>
            </p>
        </Wrapper>
    );
}
