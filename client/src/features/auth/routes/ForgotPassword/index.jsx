import { useState } from "react";
import { Link } from "react-router-dom";

import Template from "../../components/Layout/Template";
import Layout from "../../components/Layout/style";
import ImgIcon from "../../../../components/ImgIcon";
import IMGForgotPassword from "../../../../assets/icons/forgot-password.png";
import SubmitBtn from "../../../../components/SubmitBtn";
import useHead from "../../../../hooks/useHead";
import useForgotPasswordMutation from "../../api/forgotPassword";
import SentEmail from "./SentEmail";

export default function ForgotPassword() {
    const [form, setForm] = useState({ user: "" });
    const [request, result] = useForgotPasswordMutation();
    const { data, isLoading, isSuccess, isError, error } = result;
    const submit = event => {
        event.preventDefault();
        request({
            user: form.user,
            websiteName: "Clone Instagram Web",
            URLToReset: `${location.origin}/auth/reset_password`,
        });
    };

    useHead({
        title: "Redefinir senha | Instagram",
        desc: "Redefina sua senha do Clone do Instagram.",
        index: false,
    });

    if (isSuccess) return <SentEmail data={data} />

    return (
        <Template>
            <Layout.FormBlock>
                <ImgIcon $src={IMGForgotPassword} $size={96} $center />

                <Layout.Title $marginTop="1.5rem">
                    Problemas para entrar?
                </Layout.Title>

                <Layout.Text>
                    Insira seu e-mail ou nome de usuário que lhe enviaremos um
                    link por e-mail para que você possa redefinir sua senha.
                </Layout.Text>

                <form onSubmit={submit}>
                    <Layout.Input
                        id="user"
                        type="text"
                        label="E-mail ou nome de usuário"
                        form={form}
                        setForm={setForm}
                        autoFocus
                    />

                    <SubmitBtn
                        isLoading={isLoading}
                        text="Enviar link para login"
                    />
                </form>

                {isError && <Layout.Error error={error} $margin="2rem 0 0" />}

                <Layout.Separator $margin="2rem 0 calc(2rem - 1.2rem)">
                    ou
                </Layout.Separator>

                <Layout.AlternateLink>
                    <Link to="/auth/signup">Criar nova conta</Link>
                </Layout.AlternateLink>
            </Layout.FormBlock>

            <Layout.ReturnLink>
                <Link to="/">Voltar ao login</Link>
            </Layout.ReturnLink>
        </Template>
    );
}
