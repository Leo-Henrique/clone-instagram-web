import { useState } from "react";
import { Link } from "react-router-dom";

import Template from "../../components/Layout/Template";
import Layout from "../../components/Layout/style";
import ImgIcon from "../../../../components/ImgIcon";
import IMGForgotPassword from "../../../../assets/icons/forgot-password.png";
import SubmitBtn from "../../../../components/SubmitBtn";
import { AlternateLink, ReturnLink } from "./style";
import useHead from "../../../../hooks/useHead";

export default function ForgotPassword() {
    const [form, setForm] = useState({ user: "" });

    useHead({
        title: "Redefinir senha | Instagram",
        desc: "Redefina sua senha do Clone do Instagram.",
        index: false,
    });

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

                <form>
                    <Layout.Input
                        id="user"
                        type="text"
                        label="E-mail ou nome de usuário"
                        form={form}
                        setForm={setForm}
                        autoFocus
                    />

                    <SubmitBtn text="Enviar link para login" />
                </form>

                <Layout.Separator $margin="2rem 0 calc(2rem - 1.2rem)">
                    ou
                </Layout.Separator>

                <AlternateLink>
                    <Link to="/auth/signup">Criar nova conta</Link>
                </AlternateLink>
            </Layout.FormBlock>

            <ReturnLink>
                <Link to="/">Voltar ao login</Link>
            </ReturnLink>
        </Template>
    );
}
