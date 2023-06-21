import { useState } from "react";

import { useDispatch } from "react-redux";
import { showMessage } from "../../../../app/slices/message";
import Head from "../../../../components/Misc/Head";
import Button from "../../../../components/misc/Button";
import useSignUpMutation from "../../api/signUp";
import Layout from "../../components/Layout";
import { signInThunk } from "../../slices/auth";
import * as Styled from "./style";

export default function SignUp() {
    const fields = [
        {
            id: "email",
            type: "text",
            label: "E-mail",
            autoComplete: "email",
        },
        {
            id: "username",
            type: "text",
            label: "Nome de usuário",
            autoComplete: "username",
        },
        {
            id: "name",
            type: "text",
            label: "Nome completo",
            autoComplete: "name",
        },
        {
            id: "password",
            type: "password",
            label: "Senha",
            autoComplete: "new-password",
        },
    ];
    const [form, setForm] = useState(() => {
        const obj = {};

        fields.forEach(({ id }) => (obj[id] = ""));
        return obj;
    });
    const [request, { isLoading, isError, error }] = useSignUpMutation();
    const dispatch = useDispatch();
    const submit = async event => {
        event.preventDefault();

        const { data } = await request(form);

        if (data) {
            const messageTime = 2000;

            dispatch(
                showMessage({
                    text: `Bem-vindo, ${data.user.name.split(" ")[0]}!`,
                    duration: messageTime,
                })
            );
            setTimeout(() => dispatch(signInThunk(data)), messageTime);
        }
    };

    return (
        <Layout.Template>
            <Head
                title="Cadastre-se"
                description="Crie sua conta no Clone do Instagram."
                index={true}
            />

            <Layout.FormBlock $paddingBottom="3.5rem">
                <Layout.Logo $marginBottom="1.5rem" />

                <Styled.Title>
                    Cadastre-se para ver fotos e vídeos dos seus amigos.
                </Styled.Title>

                <Layout.Separator />

                <form onSubmit={submit}>
                    {fields.map((field, index) => (
                        <Layout.Input
                            {...field}
                            key={field.id}
                            form={form}
                            setForm={setForm}
                            autoFocus={index === 0}
                        />
                    ))}

                    <Styled.Text>
                        Os seus dados serão usados unicamente para a sua
                        identificação.
                    </Styled.Text>

                    <Button isLoading={isLoading} text="Cadastre-se" form={form} />
                </form>

                <Layout.Error
                    isError={isError}
                    error={error}
                    $padding="2.5rem 0 0 0"
                />
            </Layout.FormBlock>

            <Layout.InfoBlock
                text="Possui uma conta?"
                linkText="Conecte-se"
                linkHref="/"
            />
        </Layout.Template>
    );
}
