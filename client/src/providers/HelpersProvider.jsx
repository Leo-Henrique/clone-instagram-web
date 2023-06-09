import Confirmation from "../components/Alerts/Confirmation";
import Message from "../components/Alerts/Message";

export default function HelpersProvider({ children }) {
    return (
        <>
            <Message />
            <Confirmation />
            {children}
        </>
    );
}
