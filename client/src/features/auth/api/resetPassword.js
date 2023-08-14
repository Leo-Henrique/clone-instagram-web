import { useDispatch } from "react-redux";
import api from "../../../app/api";
import { showMessage } from "../../../app/slices/message";
import convertId from "../../../utils/convertId";
import { signInThunk } from "../slices/auth";

const { useResetPasswordMutation } = api.injectEndpoints({
    endpoints: build => ({
        resetPassword: build.mutation({
            query: body => ({
                url: "auth/reset_password",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body,
            }),
            transformResponse: res => convertId(res, ["user"]),
        }),
    }),
});

export default function useResetPassword(dataForReset) {
    const dispatch = useDispatch();
    const [request, result] = useResetPasswordMutation();
    const resetPassword = async event => {
        if (event) event.preventDefault();

        try {
            const data = await request(dataForReset).unwrap();
            const text = `Sua senha foi atualizada com sucesso. Fazendo login automático`;

            await dispatch(
                showMessage({ text, duration: 6000, loading: true })
            ).unwrap();

            dispatch(signInThunk(data));
        } catch {}
    };

    return [resetPassword, result];
}
