import { AnimatePresence } from "framer-motion";

import useHead from "../../../../hooks/useHead";
import useForgotPasswordMutation from "../../api/forgotPassword";
import Layout from "../../components/Layout"
import SendEmail from "./SendEmail";
import SentEmail from "./SentEmail";

export default function ForgotPassword() {
    const [request, result] = useForgotPasswordMutation();
    const { data, isSuccess } = result;

    useHead({ title: "Redefinir senha" });

    return (
        <Layout.Template>
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
