import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../app/api";
import { closeModal } from "../../../app/slices/modal";
import SVGClose from "../../../assets/icons/vectors/close.svg";
import EachUser from "../../../features/misc/components/Users";
import QueryError from "../../Alerts/QueryError";
import Modal from "../../Features/Modal";
import * as Styled from "./style";

export default function Users() {
    const dispatch = useDispatch();
    const usersRef = useRef(null);
    const [hasScrollbar, setHasScrollbar] = useState(null);
    const [result, setResult] = useState(null);
    const { name, expectedAmount, endpoint, data } = useSelector(
        ({ modal }) => modal.users
    );
    const getUsers = async refetch => {
        const result = await dispatch(
            api.endpoints[endpoint.name].initiate(endpoint.args),
            refetch && { forceRefetch: true }
        );

        setResult(result);
    };

    useEffect(() => {
        const { current } = usersRef;

        setHasScrollbar(current?.scrollHeight > current?.clientHeight);
        data ? setResult({ data }) : getUsers();
    }, []);

    return (
        <Modal name="users" dialogStyles={Styled.dialog}>
            <Styled.Header>
                <h1>{name}</h1>

                <Styled.Close onClick={() => dispatch(closeModal("users"))}>
                    <SVGClose aria-label="Fechar janela" />
                </Styled.Close>
            </Styled.Header>

            {result?.isError ? (
                <QueryError error={result.error} refetch={() => getUsers(true)} />
            ) : (
                <Styled.Users ref={usersRef} $hasScrollbar={hasScrollbar}>
                    <EachUser
                        data={result?.data}
                        userBadgeProps={{ showName: true, pictureSize: 45 }}
                        skeletonCount={expectedAmount}
                    />
                </Styled.Users>
            )}
        </Modal>
    );
}
