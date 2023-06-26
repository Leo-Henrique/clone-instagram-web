import { useDispatch } from "react-redux";
import api from "../../../app/api";
import { showMessage } from "../../../app/slices/message";

const { useResetPasswordMutation } = api.injectEndpoints({
    endpoints: build => ({
        resetPassword: build.mutation({
            query: body => ({
                url: "auth/reset_password",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body,
            }),
        }),
    }),
});

export default function useResetPassword(data) {
    const dispatch = useDispatch();
    const [request, result] = useResetPasswordMutation();
    const resetPassword = async event => {
        if (event) event.preventDefault();

        try {
            const { success, token } = await request(data).unwrap();
            const text = `${success} Fazendo login automático`;

            await dispatch(
                showMessage({ text, duration: 6000, loading: true })
            ).unwrap();
            localStorage.setItem("token", JSON.stringify(token));
            location.reload();
        } catch {}
    };

    return [resetPassword, result];
}
