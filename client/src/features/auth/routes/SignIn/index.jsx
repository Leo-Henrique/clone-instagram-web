import { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout/style";
import { SignInWrapper } from "./style";
import Slideshow from "../../components/Slideshow";
import SubmitBtn from "../../../../components/SubmitBtn";
import Footer from "../../../../components/Footer";
import useHead from "../../../../hooks/useHead";

export default function SignIn() {
    const [form, setForm] = useState({
        user: "",
        password: "",
    });

    useHead({
        title: "Instagram",
        desc: "Crie uma conta ou entre no Clone do Instagram, uma simulação completa criada por Leonardo Henrique da versão web do verdadeiro Instagram.",
    });

    return (
        <Layout>
            <SignInWrapper>
                <Slideshow />

                <Layout.Column>
                    <Layout.FormBlock $paddingBottom="calc(2rem - 1.2rem)">
                        <Layout.Logo />

                        <form>
                            <Layout.Input
                                id="user"
                                label="Nome de usuário ou e-mail"
                                type="text"
                                form={form}
                                setForm={setForm}
                                autoFocus
                            />

                            <Layout.Input
                                id="password"
                                label="Senha"
                                type="password"
                                form={form}
                                setForm={setForm}
                            />

                            <SubmitBtn text="Entrar" />
                        </form>

                        <Layout.Separator $margin="2rem 0 calc(2rem - 1.2rem)" />

                        <Layout.SmallLink>
                            <Link to="auth/forgot_password">
                                Esqueceu sua senha?
                            </Link>
                        </Layout.SmallLink>
                    </Layout.FormBlock>

                    <Layout.InfoBlock
                        text="Não tem uma conta?"
                        linkText="Cadastre-se"
                        linkHref="auth/signup"
                    />
                </Layout.Column>
            </SignInWrapper>

            <Footer />
        </Layout>
    );
}
