import api from "../../../app/api";
import convertId from "../../../utils/convertId";

const { useGetUsersQuery } = api.injectEndpoints({
    endpoints: build => ({
        getUsers: build.query({
            query: () => "users",
            transformResponse: res => convertId(res),
            providesTags: result =>
                result
                    ? ["User", ...result.map(({ id }) => ({ type: "User", id }))]
                    : ["User"],
        }),
    }),
});

export default useGetUsersQuery;
