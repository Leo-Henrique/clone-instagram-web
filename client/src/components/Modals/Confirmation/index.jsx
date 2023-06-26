import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../app/slices/modal";
import Modal from "../../Features/Modal";
import Button from "../Button";
import Delete from "./Templates/Delete";
import Unfollow from "./Templates/Unfollow";
import * as Styled from "./style";

const Template = ({ template: { name, props } }) => {
    switch (name) {
        case "DELETE":
            return <Delete {...props} />;
        case "UNFOLLOW":
            return <Unfollow {...props} />;
        default:
            return null;
    }
};

export default function Confirmation() {
    const dispatch = useDispatch();
    const { action, template } = useSelector(({ modal }) => modal.confirmation);
    const confirm = () => {
        dispatch(closeModal("confirmation"));
        action.callback();
    };

    return (
        <Modal name="confirmation" closeOptions={{ cancelButton: true }}>
            {template.name && (
                <Styled.Content>
                    <Template template={template} />
                </Styled.Content>
            )}

            <Button text={action.name} $danger={true} onClick={confirm} />
        </Modal>
    );
}
