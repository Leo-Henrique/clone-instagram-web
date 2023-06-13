import { useSelector } from "react-redux";

import QueryError from "../../../../components/Alerts/QueryError";
import Footer from "../../../../components/Layout/Footer";
import Skeleton from "../../../../components/Loaders/Skeleton";
import UserBadge from "../../../misc/components/UserBadge";
import Post from "../../../post/components/Post";
import useGetPostsQuery from "../../api/getPosts";
import useGetUsersQuery from "../../api/getUsers";
import Suggestions from "../Suggestions";
import * as Styled from "./style";

export default function Feed() {
    const authUser = useSelector(({ auth }) => auth.user);
    const postsQuery = useGetPostsQuery();
    const usersQuery = useGetUsersQuery();
    const posts = postsQuery.data || Array.from({ length: 1 });
    const users = usersQuery.data || Array.from({ length: 5 });

    return (
        <Styled.Wrapper>
            <Styled.Posts>
                {postsQuery.isError ? (
                    <QueryError error={postsQuery.error} />
                ) : (
                    <>
                        {posts.map((post, index) => (
                            <Post key={post?.id || index} post={post} />
                        ))}
                    </>
                )}
            </Styled.Posts>

            <Styled.Users>
                <UserBadge user={authUser} showName={true} />

                <div>
                    {usersQuery.isError ? (
                        <QueryError error={usersQuery.error} />
                    ) : (
                        <>
                            <p>{users ? "Usuários do Instagram" : <Skeleton />}</p>

                            <ul>
                                <Suggestions data={users} followLink={true} />
                            </ul>
                        </>
                    )}
                </div>

                <Footer />
            </Styled.Users>
        </Styled.Wrapper>
    );
}
