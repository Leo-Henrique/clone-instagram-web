import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useLocation } from "react-router-dom";

import { showMessage } from "../../../../app/slices/message";
import IMGForgotPassword from "../../../../assets/icons/forgot-password.png";
import PNGIcon from "../../../../components/misc/PNGIcon";
import Button from "../../../../components/misc/Button";
import useHead from "../../../../hooks/useHead";
import useResetPasswordMutation from "../../api/resetPassword";
import { signInThunk } from "../../slices/auth";
import Layout from "../../components/Layout";

export default function ResetPassword() {
    const [form, setForm] = useState({ password: "" });
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userId = params.get("user");
    const token = params.get("token");
    const [request, { isLoading, isError, error }] = useResetPasswordMutation();
    const dispatch = useDispatch();
    const submit = async event => {
        event.preventDefault();

        const { data } = await request({
            userId,
            token,
            password: form.password,
        });

        if (data) {
            const { token, success } = data;
            const messageTime = 3000;

            dispatch(showMessage({ text: success, duration: messageTime }));
            setTimeout(() => dispatch(signInThunk({ token })), messageTime);
        }
    };

    useHead({ title: "Criar nova senha" });

    if (!location.search || !userId || !token) return <Navigate to="/" />;

    return (
        <Layout.Template>
            <Layout.FormBlock>
                <PNGIcon $src={IMGForgotPassword} $size={96} $center />

                <Layout.Title $marginTop="1.5rem">Crie uma nova senha</Layout.Title>

                <Layout.Text>Sua senha deve ter no mínimo 3 caracteres.</Layout.Text>

                <form onSubmit={submit}>
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
