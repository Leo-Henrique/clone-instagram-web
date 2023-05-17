import { useState } from "react";
import { Link } from "react-router-dom";

import { Auth, AuthContainer } from "../../components/layout";
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
        <AuthContainer>
            <Auth>
                <Auth.Main>
                    <ImgIcon $src={IMGForgotPassword} $size={96} $center />

                    <Auth.Title $marginTop="1.5rem">
                        Problemas para entrar?
                    </Auth.Title>

                    <Auth.Text>
                        Insira seu e-mail ou nome de usuário que lhe enviaremos
                        um link por e-mail para que você possa redefinir sua
                        senha.
                    </Auth.Text>

                    <form>
                        <Auth.Input
                            id="user"
                            type="text"
                            label="E-mail ou nome de usuário"
                            form={form}
                            setForm={setForm}
                            autoFocus
                        />

                        <SubmitBtn text="Enviar link para login" />
                    </form>

                    <Auth.Separator $margin="2rem 0 calc(2rem - 1.2rem)">
                        ou
                    </Auth.Separator>

                    <AlternateLink>
                        <Link to="/auth/signup">Criar nova conta</Link>
                    </AlternateLink>
                </Auth.Main>

                <ReturnLink>
                    <Link to="/">Voltar ao login</Link>
                </ReturnLink>
            </Auth>
        </AuthContainer>
    );
}
