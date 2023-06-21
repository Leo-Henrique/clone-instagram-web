import { AnimatePresence } from "framer-motion";

import Head from "../../../../components/Misc/Head";
import useForgotPasswordMutation from "../../api/forgotPassword";
import Layout from "../../components/Layout";
import SendEmail from "./SendEmail";
import SentEmail from "./SentEmail";

export default function ForgotPassword() {
    const [request, result] = useForgotPasswordMutation();
    const { data, isSuccess } = result;

    return (
        <Layout.Template>
            <Head title="Redefinir senha" />

            <AnimatePresence mode="wait">
                {!isSuccess ? (
                    <SendEmail key="1" request={request} result={result} />
                ) : (
                    <SentEmail key="2" email={data.email} />
                )}
            </AnimatePresence>
        </Layout.Template>
    );
}
