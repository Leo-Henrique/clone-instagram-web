import { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../../../../components/Misc/Footer";
import Head from "../../../../components/Misc/Head";
import Button from "../../../../components/Misc/Button";
import useMotion from "../../../../hooks/useMotion";
import { useSignIn } from "../../api/signIn";
import Layout from "../../components/Layout";
import Slideshow from "../../components/Slideshow";
import * as Styled from "./style";

export default function SignIn() {
    const [form, setForm] = useState({
        user: "",
        password: "",
    });
    const [signIn, { isLoading, isError, error }] = useSignIn(form);
    const motionProps = useMotion({ variants: "fadeInLeft" });

    return (
        <Layout.Wrapper>
            <Head
                description="Crie uma conta ou entre no Clone do Instagram, uma simulação completa criada por Leonardo Henrique da versão web do verdadeiro Instagram."
                index={true}
            />

            <Styled.Wrapper {...motionProps}>
                <Slideshow />

                <Layout.Column>
                    <Layout.FormBlock $paddingBottom="calc(2rem - 1.2rem)">
                        <Layout.Logo />

                        <form onSubmit={signIn}>
                            <Layout.Input
                                id="user"
                                label="Nome de usuário ou e-mail"
                                type="text"
                                form={form}
                                setForm={setForm}
                                autoComplete="username"
                                autoFocus
                            />

                            <Layout.Input
                                id="password"
                                label="Senha"
                                type="password"
                                form={form}
                                setForm={setForm}
                                autoComplete="current-password"
                            />

                            <Button
                                form={form}
                                isLoading={isLoading}
                                text="Entrar"
                            />
                        </form>

                        <Layout.Separator $margin="2rem 0 calc(2rem - 1.2rem)" />

                        <Layout.Error isError={isError} error={error} />

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
            </Styled.Wrapper>

            <Footer $padding="5rem 1.5rem 3rem" />
        </Layout.Wrapper>
    );
}
