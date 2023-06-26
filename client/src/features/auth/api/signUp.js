import { useDispatch } from "react-redux";
import api from "../../../app/api";
import { showMessage } from "../../../app/slices/message";
import convertId from "../../../utils/convertId";
import { signInThunk } from "../slices/auth";

const { useSignUpMutation } = api.injectEndpoints({
    endpoints: build => ({
        signUp: build.mutation({
            query: body => ({
                url: "auth/signup",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body,
            }),
            transformResponse: res => convertId(res, ["user"]),
        }),
    }),
});

export default function useSignUp(form) {
    const dispatch = useDispatch();
    const [request, result] = useSignUpMutation();
    const signUp = async event => {
        if (event) event.preventDefault();

        try {
            const data = await request(form).unwrap();
            const [firstName] = data.user.name.split(" ");
            const messageOptions = {
                text: `Bem-vindo, ${firstName}!`,
                duration: 2500,
            };

            await dispatch(showMessage(messageOptions)).unwrap();
            dispatch(signInThunk(data));
        } catch {}
    };

    return [signUp, result];
}
