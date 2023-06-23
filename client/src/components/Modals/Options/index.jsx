import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "../../../app/slices/modal";
import Modal from "../../Features/Modal";
import Button from "../Button";

export default function Options() {
    const dispatch = useDispatch();
    const options = useSelector(({ modal }) => modal.options.actions);

    return (
        <Modal name="options" closeOptions={{ cancelButton: true }}>
            {options.map(({ name, callback, danger }) => (
                <Button
                    key={name}
                    text={name}
                    onClick={() => {
                        dispatch(closeModal("options"));
                        callback();
                    }}
                    $danger={danger}
                />
            ))}
        </Modal>
    );
}
