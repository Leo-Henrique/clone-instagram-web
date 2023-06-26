import { useDispatch } from "react-redux";
import api from "../../../app/api";

const { useForgotPasswordMutation } = api.injectEndpoints({
    endpoints: build => ({
        forgotPassword: build.mutation({
            query: body => ({
                url: "auth/forgot_password",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body,
            }),
        }),
    }),
});

export default function useForgotPassword() {
    const [request, result] = useForgotPasswordMutation();
    const sendEmailToLogin = form => {
        request({
            user: form.user,
            websiteName: "Clone Instagram Web",
            URLToReset: `${location.origin}/auth/reset_password`,
        });
    }

    return [sendEmailToLogin, result];
}
