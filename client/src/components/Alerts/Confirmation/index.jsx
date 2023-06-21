import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cancelConfirmation } from "../../../app/slices/confirmation";
import Modal from "../../Features/Modal";
import * as Styled from "./style";

export default function Confirmation() {
    const { show, action, content } = useSelector(
        ({ confirmation }) => confirmation
    );
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const confirm = () => {
        action.callback();
        setShowModal(false);
        dispatch(cancelConfirmation());
    };

    useEffect(() => {
        if (show) setShowModal(true);
    }, [show]);

    useEffect(() => {
        if (!showModal) dispatch(cancelConfirmation());
    }, [showModal]);

    return (
        <Modal showModal={showModal} setShowModal={setShowModal}>
            {content && <Styled.Content>{content}</Styled.Content>}

            <Styled.Action>
                <button type="button" onClick={confirm}>
                    {action.name}
                </button>
            </Styled.Action>

            <Styled.Cancel>
                <button type="button" onClick={() => setShowModal(false)}>
                    Cancelar
                </button>
            </Styled.Cancel>
        </Modal>
    );
}
