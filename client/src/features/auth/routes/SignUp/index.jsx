import { useState } from "react";

import { useDispatch } from "react-redux";
import SubmitBtn from "../../../../components/misc/SubmitBtn";
import useHead from "../../../../hooks/useHead";
import useSignUpMutation from "../../api/signUp";
import { authenticate } from "../../authSlice";
import Layout from "../../components/Layout";
import * as Styled from "./style";

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
    const [signUp, { isLoading, isError, error }] = useSignUpMutation();
    const dispatch = useDispatch();
    const submit = event => {
        event.preventDefault();
        dispatch(authenticate({ request: signUp, form }));
    };

    useHead({
        title: "Cadastre-se",
        desc: "Crie sua conta para o Clone do Instagram.",
        index: true,
    });

    return (
        <Layout.Template>
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

                    <SubmitBtn
                        isLoading={isLoading}
                        text="Cadastre-se"
                        form={form}
                    />
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
