import api from "../../../app/api";

const { useGetPostsQuery } = api.injectEndpoints({
    endpoints: build => ({
        getPosts: build.query({
            query: () => "posts",
        }),
    }),
});

export default useGetPostsQuery;
