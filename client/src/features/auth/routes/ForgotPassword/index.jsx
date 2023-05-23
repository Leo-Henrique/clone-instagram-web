import { AnimatePresence } from "framer-motion";

import useHead from "../../../../hooks/useHead";
import useForgotPasswordMutation from "../../api/forgotPassword";
import Template from "../../components/Layout/Template";
import SendEmail from "./SendEmail";
import SentEmail from "./SentEmail";

export default function ForgotPassword() {
    const [request, result] = useForgotPasswordMutation();
    const { data, isSuccess } = result;

    useHead({
        title: "Redefinir senha | Instagram",
        desc: "Redefina sua senha do Clone do Instagram.",
        index: false,
    });

    return (
        <Template>
            <AnimatePresence mode="wait">
                {!isSuccess ? (
                    <SendEmail key="1" request={request} result={result} />
                ) : (
                    <SentEmail key="2" email={data.email} />
                )}
            </AnimatePresence>
        </Template>
    );
}
