import api from "../../../app/api";
import convertId from "../../../utils/convertId";

const { useGetPostsQuery } = api.injectEndpoints({
    endpoints: build => ({
        getPosts: build.query({
            query: () => "posts",
            transformResponse: res => {
                const media = res.map(({ media }) => media);
                const markedMedia = media
                    .map(media => media.map(({ persons }) => persons))
                    .flat(2);

                convertId(res, "user");
                convertId(markedMedia, "user");
                return res;
            },
            providesTags: result =>
                result
                    ? [
                          "Post",
                          "User",
                          ...result.map(({ id }) => ({ type: "Post", id })),
                          ...result.map(({ user }) => ({
                              type: "User",
                              id: user.id,
                          })),
                      ]
                    : ["Post", "User"],
        }),
    }),
});

export default useGetPostsQuery;
