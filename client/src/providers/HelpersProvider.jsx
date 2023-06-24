import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

import Message from "../components/Alerts/Message";
import Confirmation from "../components/Modals/Confirmation";
import Options from "../components/Modals/Options";

export default function HelpersProvider({ children }) {
    const showMessage = useSelector(({ message }) => message.show);
    const showConfirmation = useSelector(({ modal }) => modal.confirmation.show);
    const showOptions = useSelector(({ modal }) => modal.options.show);

    return (
        <>
            <AnimatePresence>
                {showMessage && <Message />}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {showConfirmation && <Confirmation key="confirmation" />}
                {showOptions && <Options key="options" />}
            </AnimatePresence>
            
            {children}
        </>
    );
}
