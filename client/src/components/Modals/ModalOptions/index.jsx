import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { closeModal } from "../../../app/slices/modal";
import Modal from "../../Features/Modal";
import Button from "../components/Button";

export default function Options() {
    const dispatch = useDispatch();
    const options = useSelector(({ modal }) => modal.options.actions);

    return (
        <Modal name="options" closeOptions={{ cancelButton: true }}>
            {options.map(({ name, callback, danger }) => (
                <Button
                    key={name}
                    text={name}
                    $danger={danger}
                    {...(typeof callback === "string"
                        ? { as: Link, to: callback }
                        : {
                              onClick: () => {
                                  dispatch(closeModal("options"));
                                  callback();
                              },
                          })}
                />
            ))}
        </Modal>
    );
}
