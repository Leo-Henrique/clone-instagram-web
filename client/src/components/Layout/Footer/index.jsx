import { Wrapper } from "./style";

export default function Footer() {
    return (
        <Wrapper>
            <Wrapper.Text>
                Feito com <span>&hearts;</span> e React por {"\n"}
                <a
                    href="https://www.linkedin.com/in/leonardo-henrique-/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Leonardo Henrique
                </a>.
            </Wrapper.Text>
        </Wrapper>
    );
}
