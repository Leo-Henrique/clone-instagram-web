import { Link } from "react-router-dom";

import Template from "../../../components/Layout/Template";
import Layout from "../../../components/Layout/style";
import SVGSent from "../../../../../assets/icons/vectors/your-messages.svg";
import { Icon, ReturnLink } from "./style";

export default function SentEmail({ data: { email } }) {
    return (
        <Template>
            <Layout.FormBlock $paddingBottom="calc(4.5rem - 1.2rem)">
                <Icon>
                    <SVGSent />
                </Icon>

                <Layout.Title $marginTop="1.5rem">E-mail enviado</Layout.Title>

                <Layout.Text>
                    Um e-mail foi enviado para <strong>{email}</strong> contendo
                    um link para que você possa redefinir sua senha.
                </Layout.Text>

                <ReturnLink>
                    <Link to="/">
                        ok
                    </Link>
                </ReturnLink>
            </Layout.FormBlock>
        </Template>
    );
}
