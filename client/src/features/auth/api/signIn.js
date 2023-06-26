import { useDispatch } from "react-redux";
import api from "../../../app/api";
import convertId from "../../../utils/convertId";
import { signInThunk } from "../slices/auth";

const extendApi = api.injectEndpoints({
    endpoints: build => ({
        signIn: build.mutation({
            query: body => ({
                url: "auth/signin",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body,
            }),
            transformResponse: res => convertId(res, ["user"]),
        }),
        auth: build.query({
            query: () => "auth",
            transformResponse: res => convertId(res),
        }),
    }),
});

const { useSignInMutation } = extendApi;
export const { useAuthQuery } = extendApi;

export const useSignIn = form => {
    const dispatch = useDispatch();
    const [request, result] = useSignInMutation();
    const signIn = async event => {
        if (event) event.preventDefault();

        try {
            const data = await request(form).unwrap();

            dispatch(signInThunk(data));
        } catch {}
    };

    return [signIn, result];
};
