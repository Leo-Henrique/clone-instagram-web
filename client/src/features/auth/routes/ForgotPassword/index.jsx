import { AnimatePresence } from "framer-motion";

import Head from "../../../../components/Misc/Head";
import useForgotPassword from "../../api/forgotPassword";
import Layout from "../../components/Layout";
import SendEmail from "./SendEmail";
import SentEmail from "./SentEmail";

export default function ForgotPassword() {
    const [sendEmailToLogin, { data, isLoading, isSuccess, isError, error }] =
        useForgotPassword();

    return (
        <Layout.Template>
            <Head title="Redefinir senha" />

            <AnimatePresence mode="wait">
                {!isSuccess ? (
                    <SendEmail
                        key="1"
                        sendEmailToLogin={sendEmailToLogin}
                        isLoading={isLoading}
                        isError={isError}
                        error={error}
                    />
                ) : (
                    <SentEmail key="2" email={data.email} />
                )}
            </AnimatePresence>
        </Layout.Template>
    );
}
