import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "../app/store";
import Message from "../components/Message";
import MotionProvider from "./MotionProvider";
import StylesProvider from "./StylesProvider";
import AuthProvider from "./authProvider";

export default function AppProvider({ children }) {
    return (
        <Provider store={store}>
            <StylesProvider>
                <BrowserRouter>
                    <MotionProvider>
                        <Message />
                        <AuthProvider>{children}</AuthProvider>
                    </MotionProvider>
                </BrowserRouter>
            </StylesProvider>
        </Provider>
    );
}
