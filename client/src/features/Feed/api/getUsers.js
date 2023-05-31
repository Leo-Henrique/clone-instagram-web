import api from "../../../app/api";

const { useGetUsersQuery } = api.injectEndpoints({
    endpoints: build => ({
        getUsers: build.query({
            query: () => "users",
        }),
    }),
});

export default useGetUsersQuery;
