import QueryError from "../../../../components/Alerts/QueryError";
import useGetUsersQuery from "../../api/getUsers";
import Suggestions from "../Suggestions";
import * as Styled from "./style";

export default function Welcome() {
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetUsersQuery();

    if (isLoading) return <>Skeleton</>;

    if (isError) return <QueryError error={error} pageError={true} />;

    if (isSuccess)
        return (
            <Styled.Wrapper>
                <Styled.Title>Bem-vindo ao Instagram</Styled.Title>

                <Styled.Text>
                    Ao seguir as pessoas, você verá as fotos e vídeos que elas
                    publicam aqui.
                </Styled.Text>

                <Styled.Carousel>
                    <Suggestions users={users} welcome={true} />
                </Styled.Carousel>
            </Styled.Wrapper>
        );
}
