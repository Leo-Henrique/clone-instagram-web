import { Link } from "react-router-dom";

import SVGSent from "../../../../assets/icons/vectors/your-messages.svg";
import useMotion from "../../../../hooks/useMotion";
import Layout from "../../components/Layout";
import * as Styled from "./style";

export default function SentEmail({ email }) {
    const motionProps = useMotion({ variants: "blockNew" });

    return (
        <Layout.FormBlock
            $paddingBottom="calc(4.5rem - 1.2rem)"
            {...motionProps}
        >
            <Styled.Icon>
                <SVGSent />
            </Styled.Icon>

            <Layout.Title $marginTop="1.5rem">E-mail enviado</Layout.Title>

            <Layout.Text>
                Um e-mail foi enviado para <strong>{email}</strong> contendo um
                link para que você possa redefinir sua senha.
            </Layout.Text>

            <Styled.ReturnLink>
                <Link to="/">ok</Link>
            </Styled.ReturnLink>
        </Layout.FormBlock>
    );
}
