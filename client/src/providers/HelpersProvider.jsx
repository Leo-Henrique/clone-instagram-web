import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showWarningVersion } from "../app/slices/modal";
import Message from "../components/Alerts/Message";
import ModalConfirmation from "../components/Modals/ModalConfirmation";
import ModalOptions from "../components/Modals/ModalOptions";
import ModalUsers from "../components/Modals/ModalUsers";
import ModalWarningVersion from "../components/Modals/ModalWarningVersion";
import ModalComments from "../features/comments/components/Modal";
import ModalPost from "../features/post/components/Modal";

export default function HelpersProvider({ children }) {
    const showMessage = useSelector(({ message }) => message.show);
    const showConfirmation = useSelector(({ modal }) => modal.confirmation.show);
    const showOptions = useSelector(({ modal }) => modal.options.show);
    const showUsers = useSelector(({ modal }) => modal.users.show);
    const showPost = useSelector(({ modal }) => modal.post.show);
    const showComments = useSelector(({ modal }) => modal.comments.show);
    const warningVersion = useSelector(({ modal }) => modal.warningVersion.show);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!localStorage.warningVersion) dispatch(showWarningVersion());
    }, []);

    return (
        <>
            <AnimatePresence>{showMessage && <Message />}</AnimatePresence>

            <AnimatePresence mode="wait">
                {showConfirmation && <ModalConfirmation key="confirmation" />}
                {showOptions && <ModalOptions key="options" />}
            </AnimatePresence>

            <AnimatePresence>
                {showUsers && <ModalUsers key="users" />}
                {warningVersion && <ModalWarningVersion key="warningVersion" />}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {showPost && <ModalPost key="post" />}
                {showComments && <ModalComments key="comments" />}
            </AnimatePresence>

            {children}
        </>
    );
}
