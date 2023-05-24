import * as Styled from "./style";

export default function Footer() {
    return (
        <Styled.Wrapper>
            <Styled.Text>
                Feito com <span>&hearts;</span> e React por {"\n"}
                <a
                    href="https://www.linkedin.com/in/leonardo-henrique-/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Leonardo Henrique
                </a>.
            </Styled.Text>
        </Styled.Wrapper>
    );
}
