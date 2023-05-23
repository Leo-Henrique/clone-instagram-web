import { BrowserRouter } from "react-router-dom";

import Message from "../components/Message";
import MotionProvider from "./MotionProvider";
import StylesProvider from "./StylesProvider";
import AuthProvider from "./authProvider";

export default function AppProvider({ children }) {
    return (
        <StylesProvider>
            <BrowserRouter>
                <MotionProvider>
                    <Message />
                    <AuthProvider>{children}</AuthProvider>
                </MotionProvider>
            </BrowserRouter>
        </StylesProvider>
    );
}
