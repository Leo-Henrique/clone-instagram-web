import api from "../../../app/api";
import convertId from "../../../utils/convertId";

const { useGetPostsQuery } = api.injectEndpoints({
    endpoints: build => ({
        getPosts: build.query({
            query: () => "posts",
            transformResponse: res => convertId(res, "user"),
            providesTags: result =>
                result
                    ? ["Posts", ...result.map(({ id }) => ({ type: "Posts", id }))]
                    : ["Posts"],
        }),
    }),
});

export default useGetPostsQuery;
