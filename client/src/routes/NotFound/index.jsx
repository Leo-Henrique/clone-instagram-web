import Layout from "../../components/Layout";
import Button from "../../components/Misc/Button";
import Head from "../../components/Misc/Head";
import * as Styled from "./style";

export default function NotFound() {
    return (
        <Layout>
            <Head title="Página não encontrada" />

            <Styled.Wrapper>
                <Styled.Title>Página indisponível.</Styled.Title>

                <Styled.Text>
                    O link solicitado foi alterado ou nunca existiu. Verifique se o
                    endereço está correto ou volte para a página inicial.
                </Styled.Text>

                <Button link to="/" $expand={false} text="Voltar a página inicial" />
            </Styled.Wrapper>
        </Layout>
    );
}
