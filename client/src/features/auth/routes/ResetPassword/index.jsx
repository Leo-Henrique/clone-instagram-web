import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Template from "../../components/Layout/Template";
import Layout from "../../components/Layout/style";
import ImgIcon from "../../../../components/ImgIcon";
import IMGForgotPassword from "../../../../assets/icons/forgot-password.png";
import SubmitBtn from "../../../../components/SubmitBtn";
import useHead from "../../../../hooks/useHead";
import useResetPasswordMutation from "../../api/resetPassword";
import { signIn } from "../../authSlice";

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
            dispatch(signIn({ token: data.token }));
            localStorage.setItem("token", JSON.stringify(data.token));
            navigate("/");
        }
    };

    useHead({
        title: "Criar nova senha | Instagram",
        desc: "Crie uma nova senha para sua conta do Clone do Instagram.",
        index: false,
    });

    if (!location.search || !userId || !token) return <Navigate to="/" />;

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

                {isError && <Layout.Error error={error} />}
            </Layout.FormBlock>

            <Layout.ReturnLink>
                <Link to="/">Voltar ao login</Link>
            </Layout.ReturnLink>
        </Template>
    );
}
