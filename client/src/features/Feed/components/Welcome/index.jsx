import { useSelector } from "react-redux";

import QueryError from "../../../../components/Alerts/QueryError";
import Carousel from "../../../../components/Features/Carousel";
import Skeleton from "../../../../components/Loaders/Skeleton";
import useGetUsersQuery from "../../api/getUsers";
import Suggestions from "../Suggestions";
import * as Styled from "./style";

export default function Welcome() {
    const { data, isError, error } = useGetUsersQuery();
    const isBreakpointMd = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointMd
    );

    if (isError) return <QueryError error={error} pageError={true} />;

    return (
        <Styled.Wrapper>
            <Styled.Title>
                {data ? "Bem-vindo ao Instagram" : <Skeleton />}
            </Styled.Title>

            <Styled.Text>
                {data ? (
                    "Ao seguir as pessoas, você verá as fotos e vídeos que elas publicam aqui."
                ) : (
                    <Skeleton />
                )}
            </Styled.Text>

            {isBreakpointMd ? (
                <Carousel checkVisible={data} $padding="4rem 0 2rem">
                    <Suggestions data={data} />
                </Carousel>
            ) : (
                <Styled.Suggestions>
                    <Suggestions data={data} />
                </Styled.Suggestions>
            )}
        </Styled.Wrapper>
    );
}
