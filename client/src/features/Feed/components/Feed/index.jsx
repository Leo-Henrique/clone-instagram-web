import { useSelector } from "react-redux";

import QueryError from "../../../../components/Alerts/QueryError";
import Footer from "../../../../components/Layout/Footer";
import UserBadge from "../../../misc/components/UserBadge";
import Post from "../../../post/components/Post";
import useGetPostsQuery from "../../api/getPosts";
import useGetUsersQuery from "../../api/getUsers";
import Suggestions from "../Suggestions";
import * as Styled from "./style";

export const Infos = () => {
    const authUser = useSelector(({ auth }) => auth.user);
    const { data: users, isError, error } = useGetUsersQuery();

    return (
        <Styled.Infos>
            <UserBadge user={authUser} showName={true} gap="2rem" pictureSize={55} />

            <div>
                {isError ? (
                    <QueryError error={error} />
                ) : (
                    <>
                        <Styled.UsersTitle>Usuários do Instagram</Styled.UsersTitle>

                        <Styled.UsersList $skeleton={!users}>
                            <Suggestions data={users} followLink={true} />
                        </Styled.UsersList>
                    </>
                )}
            </div>

            {isError || <Footer />}
        </Styled.Infos>
    );
};

export default function Feed() {
    const isBreakpointLg = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointLg
    );
    const { data, isError, error } = useGetPostsQuery();
    const posts = data || Array.from({ length: 4 });

    return (
        <Styled.Wrapper>
            <Styled.Posts>
                {isError ? (
                    <QueryError error={error} />
                ) : (
                    <>
                        {/* {posts.map((post, index) => (
                            <Post key={post?.id || index} post={post} />
                        ))} */}
                            <Post key={posts[0]?.id} post={posts[0]} />

                    </>
                )}
            </Styled.Posts>

            {isBreakpointLg || <Infos />}
        </Styled.Wrapper>
    );
}
