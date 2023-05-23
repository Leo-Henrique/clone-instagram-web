import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import { showMessage } from "../../../../app/slices/message";
import IMGForgotPassword from "../../../../assets/icons/forgot-password.png";
import PNGIcon from "../../../../components/PNGIcon";
import SubmitBtn from "../../../../components/SubmitBtn";
import useHead from "../../../../hooks/useHead";
import useResetPasswordMutation from "../../api/resetPassword";
import { signIn } from "../../authSlice";
import Template from "../../components/Layout/Template";
import Layout from "../../components/Layout/style";

export default function ResetPassword() {
    const [form, setForm] = useState({ password: "" });
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userId = params.get("user");
    const token = params.get("token");
    const [request, { isLoading, isError, error }] = useResetPasswordMutation();
    const navigate = useNavigate();
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
            setTimeout(() => {
                dispatch(signIn({ token }));
                localStorage.setItem("token", JSON.stringify(token));
                navigate("/");
            }, messageTime);
        }
    };

    useHead({ title: "Criar nova senha" });

    if (!location.search || !userId || !token) return <Navigate to="/" />;

    return (
        <Template>
            <Layout.FormBlock>
                <PNGIcon $src={IMGForgotPassword} $size={96} $center />

                <Layout.Title $marginTop="1.5rem">
                    Crie uma nova senha
                </Layout.Title>

                <Layout.Text>
                    Sua senha deve ter no mínimo 3 caracteres.
                </Layout.Text>

                <form onSubmit={submit}>
                    <Layout.Input
                        id="password"
                        type="password"
                        label="Senha"
                        form={form}
                        setForm={setForm}
                        autoFocus
                    />

                    <SubmitBtn
                        isLoading={isLoading}
                        text="Redefinir minha senha"
                        form={form}
                    />
                </form>

                <Layout.Error isError={isError} error={error} />
            </Layout.FormBlock>

            <Layout.ReturnLink>
                <Link to="/">Voltar ao login</Link>
            </Layout.ReturnLink>
        </Template>
    );
}
