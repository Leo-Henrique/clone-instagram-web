import { Link } from "react-router-dom";

import { Smartphones, Wrapper } from "./style";
import IMGSlide1 from "../../../../assets/images/home-screenshot1.png";
import IMGSlide2 from "../../../../assets/images/home-screenshot2.png";
import IMGSlide3 from "../../../../assets/images/home-screenshot3.png";
import IMGSlide4 from "../../../../assets/images/home-screenshot4.png";
import SVGInstagram from "../../../../assets/icons/vectors/instagram.svg";
import Auth from "../style";
import Input from "../Input";
import SubmitBtn from "../../../../components/SubmitBtn";

export default function SignIn() {
    return (
        <Wrapper>
            <Smartphones>
                <img
                    src={IMGSlide1}
                    alt="Captura de tela exibindo publicações do Instagram"
                />
                <img
                    src={IMGSlide2}
                    alt="Captura de tela exibindo interação com mensagens pelo Instagram"
                />
                <img
                    src={IMGSlide3}
                    alt="Captura de tela exibindo um perfil de um usuário do Instagram"
                />
                <img
                    src={IMGSlide4}
                    alt="Captura de tela exibindo uma foto de duas pessoas pela câmera do Instagram"
                />
            </Smartphones>

            <Auth>
                <Auth.Main
                    $paddingTop="4.5rem"
                    $paddingBottom="calc(2rem - 1.2rem)"
                >
                    <Auth.Logo>
                        <SVGInstagram />
                    </Auth.Logo>

                    <form>
                        <Input
                            id="user"
                            label="Nome de usuário ou e-mail"
                            type="text"
                            autoFocus
                        />

                        <Input id="password" label="Senha" type="password" />

                        <SubmitBtn text="Entrar" />
                    </form>

                    <Auth.Separator $margin="2rem 0 calc(2rem - 1.2rem)" />

                    <Auth.SmallLink>
                        <Link to="auth/forgot_password">
                            Esqueceu sua senha?
                        </Link>
                    </Auth.SmallLink>
                </Auth.Main>

                <Auth.Info>
                    <p>
                        <span>Não tem uma conta? </span>
                        <Link to="auth/signup">Cadastre-se</Link>
                    </p>
                </Auth.Info>
            </Auth>
        </Wrapper>
    );
}
