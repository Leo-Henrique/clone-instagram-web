import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import QueryError from "../../../components/Alerts/QueryError";
import Layout from "../../../components/Layout";
import Footer from "../../../components/Misc/Footer";
import Head from "../../../components/Misc/Head";
import { useGetPostQuery } from "../api/getPost";
import Post from "../components/Post";
import PostHeader from "../components/PostHeader";
import * as Styled from "./style";

export default function PostRoute() {
    const isBreakpointMd = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointMd
    );
    const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
    const { postId } = useParams();
    const { data: post, isError, error, refetch } = useGetPostQuery(postId);
    const navigate = useNavigate();

    return (
        <Layout privateHeader={<PostHeader />}>
            <Head
                {...(post && {
                    title: `Publicação de ${post.user.name}`,
                    index: true,
                })}
            />

            <Styled.Wrapper $isAuthenticated={isAuthenticated}>
                {isError ? (
                    <QueryError
                        error={error}
                        refetch={refetch}
                        $padding="4rem 2rem"
                        $large
                        {...(error.status === 400 && {
                            customButton: {
                                text: "Voltar a página inicial",
                                callback: () => navigate("/"),
                            },
                        })}
                    />
                ) : (
                    <>
                        <Post post={post} startWithHighlight />

                        {isAuthenticated && (
                            <Footer
                                $padding={isBreakpointMd ? "3rem 0" : "5rem 0 1rem"}
                                $center
                            />
                        )}
                    </>
                )}
            </Styled.Wrapper>
        </Layout>
    );
}
