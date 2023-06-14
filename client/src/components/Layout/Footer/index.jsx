import { useSelector } from "react-redux";

import useSize from "../../../hooks/useSize";
import * as Styled from "./style";

export default function Footer() {
    const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
    const { element, width } = useSize();

    return (
        <Styled.Wrapper $isAuthenticated={isAuthenticated}>
            <Styled.Text>
                Feito com <span>&hearts;</span> e React por {"\n"}
                <Styled.Author
                    href="https://www.linkedin.com/in/leonardo-henrique-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    ref={element}
                    $isAuthenticated={isAuthenticated}
                    $width={width}
                >
                    Leonardo Henrique
                </Styled.Author>
                .
            </Styled.Text>
        </Styled.Wrapper>
    );
}
