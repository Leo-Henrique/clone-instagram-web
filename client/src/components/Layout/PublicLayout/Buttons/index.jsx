import React from "react";
import Button from "../../../Misc/Button";
import * as Styled from "./style";

export default function Buttons({ expandSignIn, ...rest }) {
    return (
        <Styled.Wrapper {...rest}>
            <Button link to="/" text="Entrar" $expand={expandSignIn} />

            <Styled.SignUp to="/auth/signUp">Cadastre-se</Styled.SignUp>
        </Styled.Wrapper>
    );
}
