import { useState } from "react";
import { Link } from "react-router-dom";

import { AuthContainer, Auth } from "../../components/layout";
import { SignInWrapper } from "./style";
import Slideshow from "../../components/Slideshow";
import SubmitBtn from "../../../../components/SubmitBtn";
import Footer from "../../../../components/Footer";
import useHead from "../../../../hooks/useHead";

export default function SignIn() {
    const [form, setForm] = useState({
        user: "",
        password: "",
    });

    useHead({
        title: "Instagram",
        desc: "Crie uma conta ou entre no Clone do Instagram, uma simulação completa criada por Leonardo Henrique da versão web do verdadeiro Instagram.",
    });

    return (
        <AuthContainer>
            <SignInWrapper>
                <Slideshow />

                <Auth>
                    <Auth.Main
                        $paddingTop="4.5rem"
                        $paddingBottom="calc(2rem - 1.2rem)"
                    >
                        <Auth.Logo />

                        <form>
                            <Auth.Input
                                id="user"
                                label="Nome de usuário ou e-mail"
                                type="text"
                                form={form}
                                setForm={setForm}
                                autoFocus
                            />

                            <Auth.Input
                                id="password"
                                label="Senha"
                                type="password"
                                form={form}
                                setForm={setForm}
                            />

                            <SubmitBtn text="Entrar" />
                        </form>

                        <Auth.Separator $margin="2rem 0 calc(2rem - 1.2rem)" />

                        <Auth.SmallLink>
                            <Link to="auth/forgot_password">
                                Esqueceu sua senha?
                            </Link>
                        </Auth.SmallLink>
                    </Auth.Main>

                    <Auth.Info
                        text="Não tem uma conta?"
                        linkText="Cadastre-se"
                        linkHref="auth/signup"
                    />
                </Auth>
            </SignInWrapper>

            <Footer />
        </AuthContainer>
    );
}
