import { useState } from "react";

import { Auth, AuthContainer } from "../../components/layout";
import ImgIcon from "../../../../components/ImgIcon";
import IMGForgotPassword from "../../../../assets/icons/forgot-password.png";
import SubmitBtn from "../../../../components/SubmitBtn";
import Footer from "../../../../components/Footer";
import useHead from "../../../../hooks/useHead";

export default function ForgotPassword() {
    const [form, setForm] = useState({ password: "" });

    useHead({
        title: "Criar nova senha | Instagram",
        desc: "Crie uma nova senha para sua conta do Clone do Instagram.",
        index: false,
    });

    return (
        <AuthContainer>
            <Auth>
                <Auth.Main>
                    <ImgIcon $src={IMGForgotPassword} $size={96} $center />

                    <Auth.Title $marginTop="1.5rem">
                        Crie uma nova senha
                    </Auth.Title>

                    <Auth.Text>
                        Sua senha deve ter no mínimo 3 caracteres.
                    </Auth.Text>

                    <form>
                        <Auth.Input
                            id="password"
                            type="password"
                            label="Senha"
                            form={form}
                            setForm={setForm}
                            autoFocus
                        />

                        <SubmitBtn text="Redefinir minha senha" />
                    </form>
                </Auth.Main>
            </Auth>

            <Footer />
        </AuthContainer>
    );
}
