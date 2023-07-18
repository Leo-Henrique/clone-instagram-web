import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";

import IMGForgotPassword from "../../../../assets/icons/forgot-password.png";
import Head from "../../../../components/Misc/Head";
import Button from "../../../../components/misc/Button";
import PNGIcon from "../../../../components/misc/PNGIcon";
import useResetPassword from "../../api/resetPassword";
import Layout from "../../components/Layout";
import NotFound from "../../../../routes/NotFound";

export default function ResetPassword() {
    const [form, setForm] = useState({ password: "" });
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userId = params.get("user");
    const token = params.get("token");
    const [resetPassword, { isLoading, isError, error }] = useResetPassword({
        userId,
        token,
        password: form.password,
    });

    if (!location.search || !userId || !token) return <NotFound />;

    return (
        <Layout.Template>
            <Head title="Criar nova senha" />

            <Layout.FormBlock>
                <PNGIcon $src={IMGForgotPassword} $size={96} $center />

                <Layout.Title $marginTop="1.5rem">Crie uma nova senha</Layout.Title>

                <Layout.Text>Sua senha deve ter no mínimo 3 caracteres.</Layout.Text>

                <form onSubmit={resetPassword}>
                    <Layout.Input
                        id="password"
                        type="password"
                        label="Senha"
                        form={form}
                        setForm={setForm}
                        autoComplete="new-password"
                        autoFocus
                    />

                    <Button
                        text="Redefinir minha senha"
                        isLoading={isLoading}
                        form={form}
                    />
                </form>

                <Layout.Error isError={isError} error={error} />
            </Layout.FormBlock>

            <Layout.ReturnLink>
                <Link to="/">Voltar ao login</Link>
            </Layout.ReturnLink>
        </Layout.Template>
    );
}
