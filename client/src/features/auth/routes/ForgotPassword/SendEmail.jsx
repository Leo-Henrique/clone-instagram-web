import { useState } from "react";
import { Link } from "react-router-dom";

import IMGForgotPassword from "../../../../assets/icons/forgot-password.png";
import PNGIcon from "../../../../components/PNGIcon";
import SubmitBtn from "../../../../components/SubmitBtn";
import useMotion from "../../../../hooks/useMotion";
import Layout from "../../components/Layout/style";

export default function SendEmail({
    request,
    result: { isLoading, isError, error },
}) {
    const [form, setForm] = useState({ user: "" });
    const submit = event => {
        event.preventDefault();
        request({
            user: form.user,
            websiteName: "Clone Instagram Web",
            URLToReset: `${location.origin}/auth/reset_password`,
        });
    };
    const motionProps = useMotion({ variants: "blockOld" });

    return (
        <>
            <Layout.FormBlock {...motionProps}>
                <PNGIcon $src={IMGForgotPassword} $size={96} $center />

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
                        form={form}
                    />
                </form>

                <Layout.Error
                    isError={isError}
                    error={error}
                    $padding="2rem 0 0"
                />

                <Layout.Separator $margin="2rem 0 calc(2rem - 1.2rem)">
                    ou
                </Layout.Separator>

                <Layout.AlternateLink>
                    <Link to="/auth/signup">Criar nova conta</Link>
                </Layout.AlternateLink>
            </Layout.FormBlock>

            <Layout.ReturnLink {...motionProps}>
                <Link to="/">Voltar ao login</Link>
            </Layout.ReturnLink>
        </>
    );
}
