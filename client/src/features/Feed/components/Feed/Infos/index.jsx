import { useSelector } from "react-redux";

import QueryError from "../../../../../components/Alerts/QueryError";
import Footer from "../../../../../components/Misc/Footer";
import UserBadge from "../../../../misc/components/UserBadge";
import Users from "../../../../misc/components/Users";
import useGetUsersQuery from "../../../api/getUsers";
import * as Styled from "./style";

export default function Infos() {
    const authUser = useSelector(({ auth }) => auth.user);
    const { data: users, isError, error, refetch } = useGetUsersQuery();

    return (
        <Styled.Infos>
            <UserBadge
                user={authUser}
                showName={true}
                gap="1.2rem"
                pictureSize={45}
            />

            <div>
                {isError ? (
                    <QueryError
                        error={error}
                        refetch={refetch}
                        $center={false}
                        $padding="5rem 0"
                    />
                ) : (
                    <>
                        <Styled.UsersTitle>Usuários do Instagram</Styled.UsersTitle>

                        <Styled.UsersList $skeleton={!users}>
                            <Users
                                data={users}
                                followLink={true}
                                userBadgeProps={{
                                    pictureSize: 45,
                                    gap: "1.2rem",
                                    showName: true,
                                }}
                            />
                        </Styled.UsersList>
                    </>
                )}
            </div>

            {isError || <Footer />}
        </Styled.Infos>
    );
}
