import { useSelector } from "react-redux";

import QueryError from "../../../../components/Alerts/QueryError";
import Carousel from "../../../../components/Features/Carousel";
import Skeleton from "../../../../components/Loaders/Skeleton";
import useGetUsersQuery from "../../api/getUsers";
import Suggestions from "../Suggestions";
import * as Styled from "./style";

export default function Welcome() {
    const { data, isSuccess, isError, error } = useGetUsersQuery();
    const isBreakpointMd = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointMd
    );

    if (isError) return <QueryError error={error} pageError={true} />;

    return (
        <Styled.Wrapper>
            <Styled.Title>
                {isSuccess ? "Bem-vindo ao Instagram" : <Skeleton />}
            </Styled.Title>

            <Styled.Text>
                {isSuccess ? (
                    "Ao seguir as pessoas, você verá as fotos e vídeos que elas publicam aqui."
                ) : (
                    <Skeleton />
                )}
            </Styled.Text>

            {isBreakpointMd ? (
                <Carousel>
                    <Suggestions data={data} welcome={true} />
                </Carousel>
            ) : (
                <Styled.Suggestions>
                    <Suggestions data={data} welcome={true} />
                </Styled.Suggestions>
            )}
        </Styled.Wrapper>
    );
}
