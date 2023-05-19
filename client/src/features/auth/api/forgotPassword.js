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

export default useForgotPasswordMutation;
