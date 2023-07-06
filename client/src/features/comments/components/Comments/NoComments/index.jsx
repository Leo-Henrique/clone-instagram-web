import * as Styled from "./style";

export default function NoComments() {
    return (
        <Styled.Wrapper>
            <>
                <Styled.Warning>Ainda não há nenhum comentário.</Styled.Warning>

                <Styled.Text>Inicie a conversa.</Styled.Text>
            </>
        </Styled.Wrapper>
    );
}
