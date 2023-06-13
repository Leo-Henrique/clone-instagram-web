import api from "../../../app/api";
import convertId from "../../../utils/convertId";

const { useGetPostsQuery } = api.injectEndpoints({
    endpoints: build => ({
        getPosts: build.query({
            query: () => "posts",
            transformResponse: convertId,
        }),
    }),
});

export default useGetPostsQuery;
