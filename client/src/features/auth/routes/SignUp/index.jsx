import { useState } from "react";

import { Auth, AuthContainer } from "../../components/layout";
import { Text, Title } from "./style";
import Footer from "../../../../components/Footer";
import SubmitBtn from "../../../../components/SubmitBtn";

export default function SignUp() {
    const fields = [
        {
            id: "email",
            type: "text",
            label: "E-mail",
        },
        {
            id: "username",
            type: "text",
            label: "Nome de usuário",
        },
        {
            id: "name",
            type: "text",
            label: "Nome completo",
        },
        {
            id: "password",
            type: "password",
            label: "Senha",
        },
    ];
    const [form, setForm] = useState(() => {
        const obj = {};

        fields.forEach(({ id }) => (obj[id] = ""));
        return obj;
    });

    return (
        <AuthContainer>
            <Auth>
                <Auth.Main $paddingTop="4.5rem" $paddingBottom="3.5rem">
                    <Auth.Logo $marginBottom="1.5rem" />

                    <Title>
                        Cadastre-se para ver fotos e vídeos dos seus amigos.
                    </Title>

                    <Auth.Separator />

                    <form>
                        {fields.map((field, index) => (
                            <Auth.Input
                                {...field}
                                key={field.id}
                                form={form}
                                setForm={setForm}
                                autoFocus={index === 0}
                            />
                        ))}

                        <Text>
                            Os seus dados serão usados unicamente para a sua identificação.
                        </Text>

                        <SubmitBtn text="Cadastre-se" />
                    </form>
                </Auth.Main>

                <Auth.Info
                    text="Possui uma conta?"
                    linkText="Conecte-se"
                    linkHref="/"
                />
            </Auth>

            <Footer />
        </AuthContainer>
    );
}
