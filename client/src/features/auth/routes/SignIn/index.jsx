import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Footer from "../../../../components/Layout/Footer";
import SubmitBtn from "../../../../components/misc/SubmitBtn";
import useHead from "../../../../hooks/useHead";
import useMotion from "../../../../hooks/useMotion";
import { useSignInMutation } from "../../api/signIn";
import { signInThunk } from "../../authSlice";
import Layout from "../../components/Layout";
import Slideshow from "../../components/Slideshow";
import * as Styled from "./style";

export default function SignIn() {
    const [form, setForm] = useState({
        user: "",
        password: "",
    });
    const [request, { isLoading, isError, error }] = useSignInMutation();
    const dispatch = useDispatch();
    const submit = async event => {
        event.preventDefault();

        const { data } = await request(form);

        if (data) dispatch(signInThunk(data));
    };
    const motionProps = useMotion({
        variants: {
            initial: { opacity: 0, x: -15 },
            animate: { opacity: 1, x: 0 },
        },
    });

    useHead({
        desc: "Crie uma conta ou entre no Clone do Instagram, uma simulação completa criada por Leonardo Henrique da versão web do verdadeiro Instagram.",
        index: true,
    });

    return (
        <Layout.Wrapper>
            <Styled.Wrapper {...motionProps}>
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

                            <SubmitBtn
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

            <Footer />
        </Layout.Wrapper>
    );
}
