import { useState } from "react";

import { useDispatch } from "react-redux";
import SubmitBtn from "../../../../components/SubmitBtn";
import useHead from "../../../../hooks/useHead";
import useSignUpMutation from "../../api/signUp";
import { authenticate } from "../../authSlice";
import Template from "../../components/Layout/Template";
import Layout from "../../components/Layout/style";
import { Text, Title } from "./style";

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
        title: "Cadastre-se | Instagram",
        desc: "Crie sua conta para o Clone do Instagram.",
    });

    return (
        <Template>
            <Layout.FormBlock $paddingBottom="3.5rem">
                <Layout.Logo $marginBottom="1.5rem" />

                <Title>
                    Cadastre-se para ver fotos e vídeos dos seus amigos.
                </Title>

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

                    <Text>
                        Os seus dados serão usados unicamente para a sua
                        identificação.
                    </Text>

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
        </Template>
    );
}
