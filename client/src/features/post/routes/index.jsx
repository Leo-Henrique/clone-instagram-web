import { useParams } from "react-router-dom";
import QueryError from "../../../components/Alerts/QueryError";
import Layout from "../../../components/Layout";
import Footer from "../../../components/Misc/Footer";
import Head from "../../../components/Misc/Head";
import { useGetPostQuery } from "../api/getPost";
import Post from "../components/Post";
import PostHeader from "../components/PostHeader";
import * as Styled from "./style";

export default function PostRoute() {
    const { postId } = useParams();
    const { data: post, isError, error, refetch } = useGetPostQuery(postId);

    return (
        <Layout privateHeader={<PostHeader />}>
            {isError ? (
                <QueryError
                    error={error}
                    refetch={refetch}
                    $padding="4rem 2rem"
                    $large
                />
            ) : (
                <Styled.Wrapper>
                    {post && <Head title={`Publicação de ${post.user.name}`} />}

                    <Post post={post} startWithHighlight />

                    <Footer $center />
                </Styled.Wrapper>
            )}
        </Layout>
    );
}
