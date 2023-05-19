import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Layout from "../../components/Layout/style";
import { SignInWrapper } from "./style";
import Slideshow from "../../components/Slideshow";
import SubmitBtn from "../../../../components/SubmitBtn";
import Footer from "../../../../components/Footer";
import useHead from "../../../../hooks/useHead";
import useSignInMutation from "../../api/signIn";
import { signIn } from "../../authSlice";

export default function SignIn() {
    const [form, setForm] = useState({
        user: "",
        password: "",
    });
    const [authenticate, { isLoading, isError, error }] = useSignInMutation();
    const dispatch = useDispatch();
    const submit = async event => {
        event.preventDefault();

        const { data } = await authenticate(form);

        if (data) {
            const { token, user } = data;

            dispatch(signIn({ token, user }));
            localStorage.setItem("token", JSON.stringify(token));
        }
    };

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

                        <form onSubmit={submit}>
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

                            <SubmitBtn isLoading={isLoading} text="Entrar" />
                        </form>

                        <Layout.Separator $margin="2rem 0 calc(2rem - 1.2rem)" />

                        {isError && <Layout.Error error={error} />}

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
