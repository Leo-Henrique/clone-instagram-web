import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

import Message from "../components/Alerts/Message";
import ModalConfirmation from "../components/Modals/ModalConfirmation";
import ModalOptions from "../components/Modals/ModalOptions";
import ModalUsers from "../components/Modals/ModalUsers";
import ModalPost from "../features/post/components/Modal";

export default function HelpersProvider({ children }) {
    const showMessage = useSelector(({ message }) => message.show);
    const showConfirmation = useSelector(({ modal }) => modal.confirmation.show);
    const showOptions = useSelector(({ modal }) => modal.options.show);
    const showUsers = useSelector(({ modal }) => modal.users.show);
    const showPost = useSelector(({ modal }) => modal.post.show);

    return (
        <>
            <AnimatePresence>{showMessage && <Message />}</AnimatePresence>

            <AnimatePresence mode="wait">
                {showConfirmation && <ModalConfirmation key="confirmation" />}
                {showOptions && <ModalOptions key="options" />}
                {showUsers && <ModalUsers key="users" />}
                {showPost && <ModalPost key="post" />}
            </AnimatePresence>

            {children}
        </>
    );
}
