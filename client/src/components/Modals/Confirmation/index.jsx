import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "../../../app/slices/modal";
import Modal from "../../Features/Modal";
import Button from "../Button";
import DeleteTemplate from "./DeleteTemplate";
import * as Styled from "./style";

export default function Confirmation() {
    const dispatch = useDispatch();
    const { action, content, template } = useSelector(
        ({ modal }) => modal.confirmation
    );
    const confirm = () => {
        dispatch(closeModal("confirmation"));
        action.callback();
    };

    return (
        <Modal name="confirmation" closeOptions={{ cancelButton: true }}>
            {content && (
                <Styled.Content>
                    {typeof content === "string" ? (
                        <>
                            {content === "DELETE" && (
                                <DeleteTemplate {...template} />
                            )}
                        </>
                    ) : (
                        content
                    )}
                </Styled.Content>
            )}

            <Button text={action.name} $danger={true} onClick={confirm} />
        </Modal>
    );
}
