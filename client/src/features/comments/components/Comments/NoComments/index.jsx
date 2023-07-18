import { useSelector } from "react-redux";
import * as Styled from "./style";

export default function NoComments() {
    const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);

    return (
        <Styled.Wrapper>
            <Styled.Warning>
                {isAuthenticated
                    ? "Ainda não há nenhum comentário."
                    : "Entre para ver ou publicar comentários"}
            </Styled.Warning>

            {isAuthenticated ? (
                <Styled.Text>Inicie a conversa.</Styled.Text>
            ) : (
                <Styled.SignIn to="/">Entrar no Instagram</Styled.SignIn>
            )}
        </Styled.Wrapper>
    );
}
