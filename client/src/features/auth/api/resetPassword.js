import api from "../../../app/api";

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

export default useResetPasswordMutation;
