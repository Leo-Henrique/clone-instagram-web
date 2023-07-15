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
    const {
        name,
        expectedAmount,
        endpoint,
        data: receivedData,
    } = useSelector(({ modal }) => modal.users);
    const {
        data: apiData,
        isError,
        error,
        refetch,
    } = api.endpoints[endpoint.name].useQuery(endpoint.args, {
        skip: !!receivedData,
    });
    const data = receivedData || apiData;
    const usersListRef = useRef(null);
    const [hasScrollbar, setHasScrollbar] = useState(null);

    useEffect(() => {
        const usersList = usersListRef.current;

        setHasScrollbar(usersList?.scrollHeight > usersList?.clientHeight);
    }, []);

    return (
        <Modal name="users" dialogStyles={Styled.dialog}>
            <Styled.Header>
                <h1>{name}</h1>

                <Styled.Close onClick={() => dispatch(closeModal("users"))}>
                    <SVGClose aria-label="Fechar janela" />
                </Styled.Close>
            </Styled.Header>

            {isError ? (
                <QueryError error={error} refetch={refetch} />
            ) : (
                <Styled.Users ref={usersListRef} $hasScrollbar={hasScrollbar}>
                    <EachUser
                        data={data}
                        userBadgeProps={{ showName: true, pictureSize: 45 }}
                        skeletonCount={expectedAmount}
                    />
                </Styled.Users>
            )}
        </Modal>
    );
}
