import api from "../../../store/api";

const { useSignInMutation } = api.injectEndpoints({
    endpoints: build => ({
        signIn: build.mutation({
            query: body => ({
                url: "auth/signin",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body,
            }),
        }),
    }),
});

export default useSignInMutation;
