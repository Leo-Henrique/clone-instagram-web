import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { cancelConfirmation, confirmThunk } from "../../../app/slices/confirmation";
import Modal from "../../Features/Modal";
import * as Styled from "./style";

export default function Confirmation() {
    const showConfirmation = useSelector(({ confirmation }) => confirmation.show);
    const action = useSelector(({ confirmation }) => confirmation.action);
    const {
        show: showContent,
        image,
        imageAlt,
        title,
        text,
    } = useSelector(({ confirmation }) => confirmation.content);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);

    useEffect(() => {
        if (showConfirmation) setShowModal(true);
    }, [showConfirmation]);

    useEffect(() => {
        if (!showModal) dispatch(cancelConfirmation());
    }, [showModal]);

    return (
        <Modal showModal={showModal} setShowModal={setShowModal}>
            {showContent && (
                <Styled.Content>
                    {image && (
                        <Styled.Image>
                            <img src={image} alt={imageAlt} />
                        </Styled.Image>
                    )}
                    {title && <h2>{title}</h2>}
                    {text && <p>{text}</p>}
                </Styled.Content>
            )}

            <Styled.Action>
                <button
                    type="button"
                    onClick={() => dispatch(confirmThunk(closeModal))}
                >
                    {action}
                </button>
            </Styled.Action>

            <Styled.Cancel>
                <button type="button" onClick={closeModal}>
                    Cancelar
                </button>
            </Styled.Cancel>
        </Modal>
    );
}
