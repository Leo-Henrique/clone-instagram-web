import api from "../../../app/api";

const { useSignUpMutation } = api.injectEndpoints({
    endpoints: build => ({
        signUp: build.mutation({
            query: body => ({
                url: "auth/signup",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body,
            }),
        }),
    }),
});

export default useSignUpMutation;
