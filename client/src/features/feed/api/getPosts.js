import api from "../../../app/api";
import convertId from "../../../utils/convertId";

const getPostsName = "getPosts";

api.injectEndpoints({
    endpoints: build => ({
        [getPostsName]: build.query({
            query: queryObject => {
                const path = "posts";

                if (!queryObject) return path;

                const params = Object.keys(queryObject);
                const paramsWithValue = params.map(
                    param => `${param}=${queryObject[param]}`
                );

                return `${path}?${paramsWithValue.join("&")}`;
            },
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
                    ? ["Post", ...result.map(({ id }) => ({ type: "Post", id }))]
                    : ["Post"],
        }),
    }),
});

export default getPostsName;
