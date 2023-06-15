import api from "../../../app/api";
import convertId from "../../../utils/convertId";

const { useGetPostsQuery } = api.injectEndpoints({
    endpoints: build => ({
        getPosts: build.query({
            query: () => "posts",
            transformResponse: res => convertId(res, "user", "comments"),
        }),
    }),
});

export default useGetPostsQuery;
