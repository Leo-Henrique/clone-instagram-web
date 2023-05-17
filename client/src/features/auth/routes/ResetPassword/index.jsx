import { useState } from "react";

import Template from "../../components/Layout/Template";
import Layout from "../../components/Layout/style";
import ImgIcon from "../../../../components/ImgIcon";
import IMGForgotPassword from "../../../../assets/icons/forgot-password.png";
import SubmitBtn from "../../../../components/SubmitBtn";
import useHead from "../../../../hooks/useHead";

export default function ForgotPassword() {
    const [form, setForm] = useState({ password: "" });

    useHead({
        title: "Criar nova senha | Instagram",
        desc: "Crie uma nova senha para sua conta do Clone do Instagram.",
        index: false,
    });

    return (
        <Template>
            <Layout.FormBlock>
                <ImgIcon $src={IMGForgotPassword} $size={96} $center />

                <Layout.Title $marginTop="1.5rem">
                    Crie uma nova senha
                </Layout.Title>

                <Layout.Text>
                    Sua senha deve ter no mínimo 3 caracteres.
                </Layout.Text>

                <form>
                    <Layout.Input
                        id="password"
                        type="password"
                        label="Senha"
                        form={form}
                        setForm={setForm}
                        autoFocus
                    />

                    <SubmitBtn text="Redefinir minha senha" />
                </form>
            </Layout.FormBlock>
        </Template>
    );
}
