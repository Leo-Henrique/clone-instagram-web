import QueryError from "../../components/Alerts/QueryError";
import Spinner from "../../components/Loaders/Spinner";
import useHead from "../../hooks/useHead";
import useGetPostsQuery from "./api/getPosts";
import Template from "./components/Template";
import Welcome from "./components/Welcome";

export default function Feed() {
    const {
        data: posts,
        isLoading,
        isFetching,
        isSuccess,
        isError,
        error,
    } = useGetPostsQuery();

    useHead({});
    
    return (
        <Template>
            {isLoading ? (
                <Spinner $pageLoading={true} />
            ) : isError ? (
                <QueryError pageError={true} />
            ) : isSuccess && posts.length ? (
                <>posts</>
            ) : (
                isSuccess && <Welcome />
            )}
        </Template>
    );
}
